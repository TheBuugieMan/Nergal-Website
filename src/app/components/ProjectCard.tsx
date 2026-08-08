import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { HoverPreviewVideo } from './HoverPreviewVideo';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
  link?: string;
  featured?: boolean;
  featuredLabel?: string;
  portrait?: boolean;
  video?: string;
  videoFit?: 'cover' | 'contain';
  interactive?: boolean;
  fillHeight?: boolean;
  wrapperClassName?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  index,
  link,
  featured,
  featuredLabel,
  portrait,
  video,
  videoFit = 'cover',
  interactive = true,
  fillHeight = false,
  wrapperClassName = '',
}: ProjectCardProps) {
  if (featured) {
    const isClickable = interactive && Boolean(link);
    const useSplitVideoLayout = Boolean(video && videoFit === 'contain' && !portrait);
    const imageSizingClasses = portrait
      ? 'relative h-[560px] sm:h-[640px] md:h-full md:min-h-[720px] overflow-hidden'
      : 'relative h-[360px] md:h-[520px] overflow-hidden';

    const titleBlock = (
      <>
        <h3 className="text-3xl font-light leading-[1.05] tracking-tight text-white transition-colors duration-500 group-hover:text-[#FFD700] md:text-4xl lg:text-5xl">
          {title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 px-3 py-1 font-mono text-xs text-[#FFD700]"
              >
                {tag}
              </span>
            ))}
          </div>
          {isClickable && (
            <motion.div
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 font-mono text-sm text-[#FFD700]"
            >
              <span>Open case study</span>
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          )}
        </div>
      </>
    );

    const featuredBadge = (
      <div className="absolute left-5 top-5 z-10 md:left-7 md:top-7">
        <motion.div
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/45 bg-[#050505]/65 px-3 py-1.5 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#FFD700]" />
          <span className="font-mono text-[10px] tracking-[0.22em] text-[#FFD700] md:text-[11px]">
            {featuredLabel ?? 'FEATURED WORK'}
          </span>
        </motion.div>
      </div>
    );

    const glowBorder = (
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            '0 0 0 1px rgba(255,215,0,0.18), 0 0 30px rgba(255,215,0,0.04)',
            '0 0 0 1px rgba(255,215,0,0.55), 0 0 50px rgba(255,215,0,0.22)',
            '0 0 0 1px rgba(255,215,0,0.18), 0 0 30px rgba(255,215,0,0.04)',
          ],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
    );

    const FeaturedContent = useSplitVideoLayout ? (
      <>
        <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[minmax(260px,36%)_1fr]">
          <div className="relative min-h-[420px] overflow-hidden bg-[#050505] md:min-h-[520px]">
            <HoverPreviewVideo
              src={video!}
              poster={image}
              className="absolute inset-0 h-full w-full"
              objectFit="contain"
            />
            {featuredBadge}
          </div>

          <div className="relative flex flex-col justify-end border-t border-[#FFD700]/10 bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-6 md:border-l md:border-t-0 md:p-10">
            <div className="pointer-events-none absolute right-3 top-3 hidden font-mono text-base text-[#FFD700]/80 md:block">
              ╗
            </div>
            {titleBlock}
          </div>
        </div>
        {glowBorder}
      </>
    ) : (
      <>
        {/* Cinematic image */}
        <div className={`${imageSizingClasses} ${video && videoFit === 'contain' ? 'bg-[#050505]' : ''}`}>
          {video ? (
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <HoverPreviewVideo src={video} poster={image} className="h-full w-full" objectFit={videoFit} />
            </motion.div>
          ) : (
            <motion.img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-center"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          )}

          {/* Vignette gradients for legibility */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505]/55 via-transparent to-[#050505]/30" />

          {featuredBadge}

          {/* Corner accents */}
          <div className="pointer-events-none absolute right-3 top-3 hidden font-mono text-base text-[#FFD700]/80 md:block">
            ╗
          </div>
          <div className="pointer-events-none absolute left-3 bottom-3 hidden font-mono text-base text-[#FFD700]/80 md:block">
            ╚
          </div>

          {/* Glowing scanline drift */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/55 to-transparent"
            initial={{ top: '12%' }}
            animate={{ top: ['12%', '92%', '12%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />

          {/* Title overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">{titleBlock}</div>
        </div>

        {glowBorder}
      </>
    );

    const featuredClasses =
      `group relative ${isClickable ? 'block cursor-pointer' : 'cursor-default'} ${portrait ? 'h-full' : ''} overflow-hidden rounded-lg border border-[#FFD700]/35 bg-gradient-to-br from-[#0a0a0a] to-[#050505] transition-all duration-500 ${isClickable ? 'hover:border-[#FFD700]/70' : ''}`;

    const motionWrapperClasses = portrait ? 'h-full' : '';

    if (isClickable && link) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 }}
          whileHover={{ y: -6 }}
          className={motionWrapperClasses}
        >
          <Link to={link} className={featuredClasses}>
            {FeaturedContent}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05 }}
        whileHover={{ y: -6 }}
        className={`${featuredClasses} ${motionWrapperClasses}`}
      >
        {FeaturedContent}
      </motion.div>
    );
  }

  const CardContent = (
    <>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 via-transparent to-[#FFD700]/20" />
      </div>

      {/* Image */}
      <div className={`relative overflow-hidden ${fillHeight ? 'min-h-[140px] flex-1' : 'h-56'}`}>
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl text-white group-hover:text-[#FFD700] transition-colors duration-300">
            {title}
          </h3>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 45 }}
            className="text-[#8B0000] group-hover:text-[#FFD700] transition-colors duration-300"
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        </div>

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs text-[#FFD700] bg-[#FFD700]/10 rounded-full border border-[#FFD700]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8B0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </>
  );

  const cardClasses =
    `group relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-lg overflow-hidden border border-[#1a1a1a] hover:border-[#8B0000] transition-all duration-500 block ${fillHeight ? 'flex h-full flex-col' : ''}`;

  if (link) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className={`${wrapperClassName} ${fillHeight ? 'h-full' : ''}`.trim()}
      >
        <Link to={link} className={cardClasses}>
          {CardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`${cardClasses} ${wrapperClassName}`.trim()}
    >
      {CardContent}
    </motion.div>
  );
}
