import { useCallback, useEffect, useRef, useState } from 'react';

interface HoverPreviewVideoProps {
  src: string;
  className?: string;
  poster?: string;
  objectFit?: 'cover' | 'contain';
  previewMode?: 'segments' | 'loop';
  loopEndFraction?: number;
}

const SEGMENT_FRACTIONS = [0.04, 0.18, 0.34, 0.52, 0.68, 0.84];

export function HoverPreviewVideo({
  src,
  className = '',
  poster,
  objectFit = 'cover',
  previewMode = 'segments',
  loopEndFraction = 0.45,
}: HoverPreviewVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const segmentIndexRef = useRef(0);

  const seekToFraction = useCallback((fraction: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    video.currentTime = Math.min(video.duration * fraction, video.duration - 0.05);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playClip = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until user interaction elsewhere on the page.
      }
    };

    const handleLoadedMetadata = () => {
      if (previewMode === 'loop') {
        video.currentTime = 0;
      } else {
        seekToFraction(SEGMENT_FRACTIONS[0]);
      }
      void playClip();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    if (video.readyState >= 1) handleLoadedMetadata();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [previewMode, seekToFraction, src]);

  useEffect(() => {
    if (previewMode !== 'segments' || isHovering) return;

    const intervalId = window.setInterval(() => {
      segmentIndexRef.current = (segmentIndexRef.current + 1) % SEGMENT_FRACTIONS.length;
      seekToFraction(SEGMENT_FRACTIONS[segmentIndexRef.current]);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, [isHovering, previewMode, seekToFraction]);

  useEffect(() => {
    if (previewMode !== 'loop') return;

    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const loopEnd = Math.max(video.duration * loopEndFraction, 0.5);
      if (video.currentTime >= loopEnd) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, [loopEndFraction, previewMode, src]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (previewMode === 'loop') return;
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video || !Number.isFinite(video.duration) || video.duration <= 0) return;

    const rect = container.getBoundingClientRect();
    const progress = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    video.currentTime = progress * video.duration;
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        if (previewMode === 'segments') {
          segmentIndexRef.current = 0;
          seekToFraction(SEGMENT_FRACTIONS[0]);
        } else {
          seekToFraction(0);
        }
      }}
      onMouseMove={handleMouseMove}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        preload="metadata"
        disablePictureInPicture
        controls={false}
        tabIndex={-1}
        aria-hidden
        className={`pointer-events-none absolute inset-0 h-full w-full ${
          objectFit === 'contain' ? 'object-contain object-center' : 'object-cover object-center'
        }`}
      />
    </div>
  );
}
