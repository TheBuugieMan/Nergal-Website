import '../../styles/gemini.css';

import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { CTASection } from './gemini/CTASection';
import { CustomCursor } from './gemini/CustomCursor';
import { FromOneToManySection } from './gemini/FromOneToManySection';
import { GrainOverlay } from './gemini/GrainOverlay';
import { GuideSection } from './gemini/GuideSection';
import { HeroSection } from './gemini/HeroSection';
import { InteractiveDemoSection } from './gemini/InteractiveDemoSection';
import { MultimodalitySection } from './gemini/MultimodalitySection';
import { ProblemSection } from './gemini/ProblemSection';

export default function GeminiCampaignCase() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('gemini-mode');
    document.body.classList.add('gemini-mode');
    return () => {
      document.documentElement.classList.remove('gemini-mode');
      document.body.classList.remove('gemini-mode');
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden cursor-none">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-[110] rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-black/75 hover:border-white/25 transition-colors"
      >
        Back to portfolio
      </button>

      <CustomCursor />
      <GrainOverlay />

      <HeroSection />
      <ProblemSection />
      <GuideSection />
      <InteractiveDemoSection />
      <MultimodalitySection />
      <FromOneToManySection />
      <CTASection />
    </div>
  );
}

