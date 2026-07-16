import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';

interface PageTransitionProps {
  isTriggered: boolean;
  destinationPage: Page;
  onMidpointReached: () => void;
  onComplete: () => void;
}

// Beautiful detail images for the transition slideshow (interior architecture textures)
const SLIDESHOW_IMAGES = [
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80', // Plaster & light
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80', // Wood grain
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80', // Stone / Terracotta
  'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80', // Linen / shadow
];

export default function PageTransition({
  isTriggered,
  destinationPage,
  onMidpointReached,
  onComplete,
}: PageTransitionProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [stage, setStage] = useState<'idle' | 'covering' | 'holding' | 'revealing'>('idle');

  // Human-friendly title translation for transition hold screen
  const getPageTitle = (page: Page) => {
    switch (page) {
      case 'home':
        return 'INTRODUCING NUVE';
      case 'about':
        return 'ABOUT OUR PATH';
      case 'portfolio':
        return 'PORTFOLIO PROJECTS';
      case 'portfolio-detail':
        return 'IMPRESSIONS THAT ENDURE';
      case 'services':
        return 'DESIGN THAT RESONATES';
      case 'journal':
        return 'NOTES FROM THE STUDIO';
      case 'journal-detail':
        return 'JOURNAL INSIGHTS';
      case 'contact':
        return 'BEGIN A CONVERSATION';
      default:
        return 'NUVE STUDIO';
    }
  };

  useEffect(() => {
    if (isTriggered) {
      setStage('covering');
      setCurrentSlideIndex(0);

      // 1. Cover stage takes ~600ms
      const coverTimeout = setTimeout(() => {
        setStage('holding');
        onMidpointReached();
      }, 600);

      // 2. Hold stage (slideshow) plays for 1800ms
      const holdTimeout = setTimeout(() => {
        setStage('revealing');
      }, 2400);

      // 3. Reveal stage takes ~600ms
      const completeTimeout = setTimeout(() => {
        setStage('idle');
        onComplete();
      }, 3000);

      return () => {
        clearTimeout(coverTimeout);
        clearTimeout(holdTimeout);
        clearTimeout(completeTimeout);
      };
    }
  }, [isTriggered]);

  // Slideshow image rotations during hold phase
  useEffect(() => {
    if (stage === 'holding') {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
      }, 500); // Fast cross-fade slideshow
      return () => clearInterval(interval);
    }
  }, [stage]);

  // Handle prefers-reduced-motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    useEffect(() => {
      if (isTriggered) {
        onMidpointReached();
        onComplete();
      }
    }, [isTriggered]);
    return null;
  }

  // Define transition variables for staggering
  const panelVariants = {
    initial: { y: '100%' },
    cover: {
      y: '0%',
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      y: '-100%',
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isTriggered && (
        <div id="page-transition-overlay" className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-end">
          {/* Staggered Vertical Panels */}
          <div className="absolute inset-0 flex">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                id={`transition-panel-${index}`}
                variants={panelVariants}
                initial="initial"
                animate={stage === 'revealing' ? 'exit' : 'cover'}
                style={{ originY: stage === 'revealing' ? 0 : 1 }}
                className="h-full flex-1 bg-nuve-espresso relative overflow-hidden"
                transition={{
                  delay: index * 0.08,
                }}
              />
            ))}
          </div>

          {/* Slideshow Content Center Screen */}
          {stage === 'holding' && (
            <motion.div
              id="transition-slideshow-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-10 p-6"
            >
              {/* Background ambient grain */}
              <div className="absolute inset-0 bg-grain" />

              {/* Minimal Slide Window */}
              <div id="slideshow-frame" className="w-80 h-96 relative overflow-hidden rounded-sm border border-nuve-stone/10 bg-nuve-espresso">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlideIndex}
                    src={SLIDESHOW_IMAGES[currentSlideIndex]}
                    alt="Material texture transition"
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Visual Accent Lines */}
                <div className="absolute inset-4 border border-nuve-ivory/10 pointer-events-none" />
              </div>

              {/* Text Information */}
              <div className="mt-8 text-center max-w-md z-20">
                <p className="font-mono text-sm tracking-widest text-nuve-clay/80 uppercase">
                  NUVE STUDIO • TRANSITION
                </p>
                <h3 className="font-serif text-2xl text-nuve-cream mt-2 tracking-wide font-light">
                  {getPageTitle(destinationPage)}
                </h3>
                <div className="mt-4 flex justify-center items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-nuve-clay animate-ping" />
                  <span className="font-mono text-sm text-nuve-stone tracking-widest">LOADING</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
