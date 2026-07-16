import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, SERVICES } from '../data';
import { Page } from '../types';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Compass, Sparkles, Layers } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page, id?: string) => void;
}

// Custom curated material specifications for the interactive Somatic Curator
const MATERIALS_PALETTE = [
  {
    id: 'mineral-plaster',
    name: 'MINERAL PLASTER',
    origin: 'Alentejo quarries, Portugal',
    feeling: 'Glance-free velvet warmth',
    description: 'Applied entirely by hand with coarse local sands. It retains the rhythmic sweeps of the artisan trowel, absorbing direct sunlight and turning glare into soft shadows.',
    image: '/src/assets/images/hero_plaster_interior_1784203156784.jpg'
  },
  {
    id: 'ancient-travertine',
    name: 'ANCIENT TRAVERTINE',
    origin: 'Tivoli, Italy',
    feeling: 'Geological slow-time weight',
    description: 'Unfilled, honed stone blocks displaying deep caverns and wild mineral veins. A direct tactile link to ancient sediment layerings brought inside the home.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'somatic-boucle',
    name: 'SOMATIC BOUCLÉ',
    origin: 'Biella mills, Italy',
    feeling: 'Spacious nested protection',
    description: 'Loomed from heavy organic virgin wools and local flax. Its high-tactile loops reflect daylight unevenly, creating a warm protective shell for deep resting.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'weathered-oak',
    name: 'WEATHERED OAK',
    origin: 'Jutland forests, Denmark',
    feeling: 'Living timber connection',
    description: 'Sourced from naturally fallen oaks, brushed to expose the rugged, raised heartwood grain. Untreated by synthetic varnishes to preserve its botanical scent.',
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Home({ onNavigate }: HomeProps) {
  const featuredProjects = PROJECTS.slice(0, 3);

  // 1. Hero Slideshow State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideshowProgress, setSlideshowProgress] = useState(0);
  const [isHoveredHero, setIsHoveredHero] = useState(false);

  const heroSlides = [
    {
      projectIndex: 0,
      titleLine1: 'SACRED',
      titleLine2: 'Hearth.',
      titleLine3: 'SILENCE.',
      subtitle: 'Sculpting with raw light, hand-applied plaster, and coastal presence.',
      coordinates: '39.6953° N, 2.9175° E • MALLORCA, ESP',
      paramLabel: 'LIGHT INTUITION',
      paramVal: '45% TRANSLUCENCY'
    },
    {
      projectIndex: 1,
      titleLine1: 'FOCUS.',
      titleLine2: 'Clarity.',
      titleLine3: 'SABLE.',
      subtitle: 'Refined work sanctuaries framed by organic timber and deep focus alignment.',
      coordinates: '38.7223° N, 9.1393° W • LISBON, PRT',
      paramLabel: 'GRAIN DENSITY',
      paramVal: 'RELAXED FIBERS'
    },
    {
      projectIndex: 2,
      titleLine1: 'OCULAR',
      titleLine2: 'Curves.',
      titleLine3: 'FORM.',
      subtitle: 'Living architecture detailed with fluid curved plaster and solid dark oak volume.',
      coordinates: '37.9838° N, 23.7275° E • ATHENS, GRC',
      paramLabel: 'SOMATIC FREQ',
      paramVal: 'DEEP GROUNDED'
    }
  ];

  // Auto cycle hero slides unless user hovers
  useEffect(() => {
    let intervalId: any;
    if (!isHoveredHero) {
      intervalId = setInterval(() => {
        setSlideshowProgress((prev) => {
          if (prev >= 100) {
            setCurrentSlide((current) => (current + 1) % heroSlides.length);
            return 0;
          }
          return prev + 1.25; // cycle every ~4 seconds
        });
      }, 50);
    }
    return () => clearInterval(intervalId);
  }, [isHoveredHero, currentSlide]);

  const handleManualSlideSelect = (idx: number) => {
    setCurrentSlide(idx);
    setSlideshowProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setSlideshowProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setSlideshowProgress(0);
  };

  // 2. Interactive Material Curator State
  const [selectedMatId, setSelectedMatId] = useState('mineral-plaster');
  const activeMaterial = MATERIALS_PALETTE.find(m => m.id === selectedMatId) || MATERIALS_PALETTE[0];

  // 3. Studio Philosophy Accordion State
  const [expandedPhilosophy, setExpandedPhilosophy] = useState<number>(0);
  const philosophyItems = [
    {
      number: 'I / III',
      title: 'SOMATIC SILENCE',
      summary: 'Designing for the barefoot walk and the resting mind.',
      details: 'We reject modern sterile, hyper-reflective materials in favor of finishes that cushion both acoustics and visual pathings. By utilizing un-sanded plaster and soft loomed rugs, we form physical envelopes where the nervous system instantly feels safe and contained.'
    },
    {
      number: 'II / III',
      title: 'THE DIGNITY OF PATINA',
      summary: 'Organic items that age with grace and trace natural slow-time.',
      details: 'We believe a house is a living container. Our materials—unlacquered raw brass, solid spruce beams, and split limestone—are selected because they oxidize, scuff, and enrich their character under the touch of your hands, making time a supportive companion.'
    },
    {
      number: 'III / III',
      title: 'CHOREOGRAPHED SUNLIGHT',
      summary: 'Sculpting with shadows to match circadian biological rhythms.',
      details: 'A flatly lit room feels disconnected from life. We model solar paths for every season, integrating vertical window slots, deep arched bays, and linen filters to drape rooms in warm morning golds and sleepy low-level evening amber lights.'
    }
  ];

  // Active project index from current slide
  const activeProject = PROJECTS[heroSlides[currentSlide].projectIndex];

  return (
    <div id="home-view" className="relative w-full">
      {/* 1. HERO SECTION: INTERACTIVE EDITORIAL SLIDESHOW */}
      <section
        id="home-hero"
        className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-20 pt-28 px-6 md:px-12 bg-nuve-espresso overflow-hidden"
        onMouseEnter={() => setIsHoveredHero(true)}
        onMouseLeave={() => setIsHoveredHero(false)}
      >
        {/* Full-bleed background slideshow image with transitions */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1.01 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <img
                src={activeProject.primaryImage}
                alt={activeProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.02]"
              />
            </motion.div>
          </AnimatePresence>
          {/* Subtle warm texture gradients and paper overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-nuve-espresso via-nuve-espresso/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-nuve-espresso/50 via-transparent to-nuve-espresso/30" />
          <div className="absolute inset-0 bg-grain" />
        </div>

        {/* Hero Central Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10 text-white flex flex-col gap-10 md:gap-16">

          {/* Majestic Big Headline Area */}
          <div className="max-w-5xl select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <h1 className="font-serif text-5xl sm:text-7xl md:text-[95px] leading-[0.9] tracking-tight font-light text-white uppercase">
                  {heroSlides[currentSlide].titleLine1}
                </h1>
                
                <div className="flex items-center gap-6 my-1">
                  <span className="font-serif-italic text-nuve-clay text-5xl sm:text-7xl md:text-[105px] leading-none normal-case">
                    {heroSlides[currentSlide].titleLine2}
                  </span>
                  <div className="h-[2px] bg-nuve-clay/40 flex-grow hidden sm:block max-w-xs rounded-full" />
                </div>

                <h1 className="font-serif text-5xl sm:text-7xl md:text-[95px] leading-[0.9] tracking-tight font-light text-white/80 uppercase">
                  {heroSlides[currentSlide].titleLine3}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom interactive action and indicator columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-white/10">
            {/* Subtitle description */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-sans text-base sm:text-lg md:text-base text-nuve-sand/90 font-light leading-relaxed max-w-md"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Direct navigation CTA */}
            <div className="lg:col-span-3 flex">
              <button
                onClick={() => onNavigate('portfolio-detail', activeProject.id)}
                className="group flex items-center gap-3 font-mono text-base tracking-[0.3em] text-white hover:text-nuve-clay transition-all duration-300 focus:outline-none cursor-pointer border-b border-white/30 pb-2 hover:border-nuve-clay/50"
              >
                STUDY CASE FILE <ArrowUpRight size={13} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Custom Premium Slideshow Controllers */}
            <div className="lg:col-span-4 flex flex-col gap-3 sm:items-end">
              <div className="flex items-center gap-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-nuve-clay hover:text-nuve-clay transition-all duration-300 focus:outline-none cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Dots & progress */}
                <div className="flex gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleManualSlideSelect(idx)}
                      className="group relative w-8 py-2 focus:outline-none cursor-pointer"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className="h-[2px] bg-white/20 w-full rounded-full overflow-hidden">
                        {currentSlide === idx && (
                          <motion.div
                            layoutId="activeSlideProgress"
                            className="h-full bg-nuve-clay"
                            style={{ width: `${currentSlide === idx ? (isHoveredHero ? 100 : slideshowProgress) : 0}%` }}
                          />
                        )}
                      </div>
                      <span className="absolute -top-3 left-0 font-mono text-sm text-white/35 group-hover:text-white/80 transition-colors">
                        0{idx + 1}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-nuve-clay hover:text-nuve-clay transition-all duration-300 focus:outline-none cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ELEVATED NARRATIVE TEASER (Inspired by Sol Haus) */}
      <section id="home-about-teaser" className="py-24 md:py-36 px-6 md:px-12 bg-white relative">
        <div className="absolute inset-0 bg-grain" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          
          {/* Spaced header with floating statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">THE PHILOSOPHY</span>
              <div className="w-12 h-[1px] bg-nuve-clay" />
            </div>
            
            <div className="lg:col-span-8">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight font-light text-nuve-espresso">
                WE DO NOT MERELY FILL VOLUMES. <br />
                <span className="font-serif-italic text-nuve-clay normal-case font-normal">We choreograph spatial pause.</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <p className="font-sans text-lg md:text-base text-nuve-stone leading-relaxed font-light">
                At Nuve Studio, we believe that interior design is a quiet dialogue between light, mineral texture, and emotional comfort. We treat a blank wall not as a blank canvas waiting to be cluttered, but as a deliberate shield to capture soft, shifting sunshine.
              </p>
              
              <p className="font-sans text-lg text-nuve-stone/85 leading-relaxed font-light">
                Every material we invite into a space must pass our rigid standard of somatic authenticity. If it does not absorb light gracefully, if it feels artificial under barefoot steps, or if it does not mature with dignity over years, it does not belong in your home.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="group inline-flex items-center gap-3 font-mono text-base tracking-[0.25em] text-nuve-espresso hover:text-nuve-clay transition-all duration-300 border-b border-nuve-espresso/20 pb-1.5 cursor-pointer font-bold"
                >
                  MEET THE DESIGN DIRECTORS <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Lookbook Image Pair (Asymmetric, overlapping) */}
            <div className="lg:col-span-7 flex flex-row items-center relative pl-4 md:pl-12 py-8">
              
              {/* Main portrait photo frame */}
              <div className="w-7/12 relative overflow-hidden aspect-[4/5] border border-nuve-stone/10 bg-nuve-cream group z-10 -mt-10">
                <div className="absolute inset-0 bg-nuve-espresso/5 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src="/src/assets/images/bedroom_organic_1784203171535.jpg"
                  alt="Organic bed curves and textured linen plaster"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                
                {/* Micro capsule floating tag */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-xs px-4 py-2 text-sm font-mono tracking-widest text-nuve-espresso border border-nuve-stone/10 shadow-md">
                  CASE NO. 04 / CURVED SLUMBER
                </div>
              </div>

              {/* Smaller overlapping square photo frame */}
              <div className="w-6/12 -ml-16 md:-ml-24 mt-16 z-20 relative overflow-hidden aspect-[4/5] border border-nuve-stone/12 bg-nuve-cream shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                  alt="Fireplace hearth detailed corner styling"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-nuve-espresso px-2 py-1 text-xs font-mono tracking-wider text-white">
                  TACTILE SWATCH
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW COMPONENT: THE TACTILE MATERIAL PALETTE (Fully Interactive) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-nuve-cream border-t border-b border-nuve-stone/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">MATERIAL SELECTION</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-nuve-espresso uppercase font-light">
              THE TACTILE <span className="font-serif-italic text-nuve-clay">Palette</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-nuve-stone font-light leading-relaxed">
              We curate a set of raw, living elements that anchor our designs. Select a finish below to discover its origin, texture, and architectural intention.
            </p>
          </div>

          {/* Interactive Swatch Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-nuve-stone/10 p-6 md:p-12 relative shadow-xs">
            
            {/* Left Selection column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase font-semibold">SELECT MATERIAL:</span>
              
              <div className="flex flex-col gap-3">
                {MATERIALS_PALETTE.map((mat, index) => {
                  const isSelected = mat.id === selectedMatId;
                  return (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMatId(mat.id)}
                      className={`text-left p-4 border transition-all duration-300 focus:outline-none cursor-pointer flex justify-between items-center ${
                        isSelected
                          ? 'border-nuve-clay bg-nuve-ivory shadow-xs'
                          : 'border-nuve-stone/10 bg-transparent hover:border-nuve-clay/30 hover:bg-nuve-cream/20'
                      }`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-sm text-nuve-stone">MATERIAL 0{index + 1}</span>
                        <span className="font-serif text-base tracking-wide font-light text-nuve-espresso">
                          {mat.name}
                        </span>
                      </div>
                      <div className={`w-2.5 h-2.5 rounded-full border transition-all ${isSelected ? 'bg-nuve-clay border-nuve-clay scale-110' : 'border-nuve-stone/30'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Display area with cross-fading */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t lg:border-t-0 lg:border-l border-nuve-stone/15 pt-8 lg:pt-0 lg:pl-12 min-h-[350px]">
              
              {/* Image Frame */}
              <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden border border-nuve-stone/10 bg-nuve-cream">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeMaterial.id}
                    src={activeMaterial.image}
                    alt={activeMaterial.name}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute top-4 left-4 bg-nuve-espresso/90 text-white font-mono text-sm tracking-widest px-2.5 py-1 uppercase">
                  ACTIVE SWATCH
                </div>
              </div>

              {/* Specification data sheet */}
              <div className="flex flex-col gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMaterial.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4 text-nuve-espresso"
                  >
                    <div>
                      <span className="font-mono text-sm text-nuve-stone tracking-widest uppercase block">PROVENANCE ORIGIN</span>
                      <p className="font-sans text-lg font-light text-nuve-espresso">{activeMaterial.origin}</p>
                    </div>

                    <div>
                      <span className="font-mono text-sm text-nuve-stone tracking-widest uppercase block">CHARACTER & FEEL</span>
                      <p className="font-serif text-base text-nuve-clay italic">{activeMaterial.feeling}</p>
                    </div>

                    <div>
                      <span className="font-mono text-sm text-nuve-stone tracking-widest uppercase block">DESIGN PURPOSE</span>
                      <p className="font-sans text-base text-nuve-stone font-light leading-relaxed">{activeMaterial.description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. ASYMMETRIC PORTFOLIO LOOKBOOK (Staggered print grid) */}
      <section id="home-portfolio-teaser" className="py-24 md:py-36 px-6 md:px-12 bg-white relative">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          
          {/* Lookbook Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-nuve-stone/15">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">LOOKBOOK INDEX</span>
              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight font-light text-nuve-espresso uppercase">
                SELECTED WORKS <span className="font-serif-italic text-nuve-clay normal-case font-normal">and atmospheres</span>
              </h2>
            </div>
            
            <button
              onClick={() => onNavigate('portfolio')}
              className="group flex items-center gap-2.5 font-mono text-base tracking-[0.25em] text-nuve-espresso hover:text-nuve-clay transition-all duration-300 border-b border-nuve-espresso/20 pb-1.5 cursor-pointer font-bold"
            >
              BROWSE ALL PROJECTS ({PROJECTS.length}) <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Staggered lookbook columns */}
          <div className="flex flex-col gap-24">
            
            {/* ROW 1: Large Asymmetrical Pair */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Project 1 (Wide Column) */}
              <div
                onClick={() => onNavigate('portfolio-detail', PROJECTS[0].id)}
                className="lg:col-span-7 group cursor-pointer flex flex-col gap-6"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-nuve-stone/10 bg-nuve-cream">
                  <div className="absolute inset-0 bg-nuve-espresso/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                  <img
                    src={PROJECTS[0].primaryImage}
                    alt={PROJECTS[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 font-mono text-sm tracking-widest text-nuve-espresso">
                    INDEX {PROJECTS[0].number}
                  </div>
                </div>

                <div className="flex justify-between items-start pt-2 border-b border-nuve-stone/10 pb-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase">
                      {PROJECTS[0].location} • {PROJECTS[0].year}
                    </span>
                    <h3 className="font-serif text-2xl tracking-wider text-nuve-espresso group-hover:text-nuve-clay transition-colors duration-300 font-light">
                      {PROJECTS[0].title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-nuve-stone/20 flex items-center justify-center group-hover:bg-nuve-espresso group-hover:text-white group-hover:border-nuve-espresso transition-all duration-300">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <p className="font-sans text-base sm:text-lg text-nuve-stone leading-relaxed font-light max-w-xl">
                  {PROJECTS[0].description}
                </p>

                {/* Color swatch indicator */}
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-mono text-sm text-nuve-stone tracking-widest">PALETTE SWATCH:</span>
                  <div className="flex gap-1">
                    {PROJECTS[0].accentColors.map((col, idx) => (
                      <div key={idx} className="w-3.5 h-3.5 rounded-full border border-nuve-stone/15" style={{ backgroundColor: col }} title={PROJECTS[0].paletteNames[idx]} />
                    ))}
                  </div>
                  <span className="font-sans text-base text-nuve-stone/80 italic">{PROJECTS[0].paletteNames.join(', ')}</span>
                </div>
              </div>

              {/* Project 2 (Narrow Offset Column) */}
              <div
                onClick={() => onNavigate('portfolio-detail', PROJECTS[1].id)}
                className="lg:col-span-5 group cursor-pointer flex flex-col gap-6 lg:mt-24"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-nuve-stone/10 bg-nuve-cream">
                  <div className="absolute inset-0 bg-nuve-espresso/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                  <img
                    src={PROJECTS[1].primaryImage}
                    alt={PROJECTS[1].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 font-mono text-sm tracking-widest text-nuve-espresso">
                    INDEX {PROJECTS[1].number}
                  </div>
                </div>

                <div className="flex justify-between items-start pt-2 border-b border-nuve-stone/10 pb-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase">
                      {PROJECTS[1].location} • {PROJECTS[1].year}
                    </span>
                    <h3 className="font-serif text-2xl tracking-wider text-nuve-espresso group-hover:text-nuve-clay transition-colors duration-300 font-light">
                      {PROJECTS[1].title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-nuve-stone/20 flex items-center justify-center group-hover:bg-nuve-espresso group-hover:text-white group-hover:border-nuve-espresso transition-all duration-300">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                <p className="font-sans text-base sm:text-lg text-nuve-stone leading-relaxed font-light">
                  {PROJECTS[1].description}
                </p>
              </div>
            </div>

            {/* ROW 2: Wide Panoramic Blueprint Frame */}
            <div
              onClick={() => onNavigate('portfolio-detail', PROJECTS[2].id)}
              className="group cursor-pointer border border-nuve-stone/15 bg-nuve-ivory/30 p-6 md:p-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch shadow-xs"
            >
              {/* Image box */}
              <div className="lg:w-3/5 overflow-hidden aspect-[16/10] border border-nuve-stone/10 bg-nuve-cream relative">
                <img
                  src={PROJECTS[2].primaryImage}
                  alt={PROJECTS[2].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-nuve-espresso text-white px-3 py-1 font-mono text-sm tracking-widest">
                  PANORAMIC BRIEF
                </div>
              </div>

              {/* Architectural Blueprint card box */}
              <div className="lg:w-2/5 flex flex-col justify-between py-2 border-t lg:border-t-0 lg:border-l border-dashed border-nuve-stone/20 lg:pl-10">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center text-mono text-base text-nuve-stone">
                    <span>STUDIO SCHEMATIC</span>
                    <span>SPECIFICATION NO. 3A</span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-sm tracking-widest text-nuve-clay font-bold uppercase">FEATURED PROJECT</span>
                    <h3 className="font-serif text-3xl tracking-wide text-nuve-espresso font-light uppercase">
                      {PROJECTS[2].title}
                    </h3>
                    <span className="font-mono text-sm text-nuve-stone tracking-widest">{PROJECTS[2].location} // CO-DESIGN</span>
                  </div>

                  <p className="font-sans text-base text-nuve-stone leading-relaxed font-light">
                    {PROJECTS[2].description}
                  </p>

                  <div className="flex flex-col gap-1.5 border-t border-nuve-stone/10 pt-4">
                    {PROJECTS[2].specs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="flex justify-between text-base font-light">
                        <span className="font-mono text-sm text-nuve-stone tracking-wider uppercase">{spec.label}:</span>
                        <span className="font-sans text-nuve-espresso">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 flex items-center gap-2 text-mono text-base text-nuve-clay font-bold uppercase group-hover:underline">
                  OPEN SYSTEM ARCHIVE <ArrowRight size={13} />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE STUDIO PHILOSOPHY (The Accordions of Restraint) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-nuve-cream border-t border-nuve-stone/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-2xl">
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block mb-3">STUDIO PRINCIPLES</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-nuve-espresso uppercase font-light">
              THE MANIFESTO <span className="font-serif-italic text-nuve-clay">of Restraint</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-nuve-stone font-light leading-relaxed mt-3">
              We abide by core guidelines modeled on traditional craftsmanship. Click an ethos below to read our execution guide.
            </p>
          </div>

          {/* Interactive Accordion columns */}
          <div className="flex flex-col border-t border-nuve-stone/15">
            {philosophyItems.map((item, idx) => {
              const isExpanded = expandedPhilosophy === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedPhilosophy(idx)}
                  className={`border-b border-nuve-stone/15 py-8 md:py-12 transition-all duration-300 cursor-pointer ${
                    isExpanded ? 'bg-white/30 px-4 md:px-8' : 'hover:bg-white/10'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Index identifier */}
                    <div className="md:col-span-2 font-mono text-sm text-nuve-stone tracking-widest font-semibold">
                      {item.number}
                    </div>

                    {/* Headline */}
                    <div className="md:col-span-4">
                      <h3 className="font-serif text-xl sm:text-2xl text-nuve-espresso tracking-wide font-light">
                        {item.title}
                      </h3>
                    </div>

                    {/* Short summary always shown */}
                    <div className="md:col-span-5 font-sans text-base text-nuve-stone font-light">
                      {item.summary}
                    </div>

                    {/* Expand action */}
                    <div className="md:col-span-1 flex md:justify-end text-nuve-clay font-mono text-base font-semibold">
                      {isExpanded ? '[-] CLOSE' : '[+] REVEAL'}
                    </div>
                  </div>

                  {/* Expandable Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 mt-6 border-t border-nuve-stone/10 text-base sm:text-lg text-nuve-stone font-light leading-relaxed">
                          <div className="md:col-span-2" />
                          <div className="md:col-span-10 max-w-3xl flex flex-col gap-4">
                            <p>{item.details}</p>
                            <div className="flex gap-4 items-center">
                              <span className="font-mono text-sm text-nuve-clay uppercase font-bold tracking-widest">SOCIALLY CURATED UNDER:</span>
                              <div className="flex gap-2">
                                <span className="bg-nuve-sand/30 border border-nuve-stone/10 px-2.5 py-0.5 font-mono text-sm text-nuve-espresso uppercase">Slow Architecture</span>
                                <span className="bg-nuve-sand/30 border border-nuve-stone/10 px-2.5 py-0.5 font-mono text-sm text-nuve-espresso uppercase">Somatic Resonance</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. SERVICES TEASER GRID */}
      <section id="home-services-teaser" className="py-24 md:py-36 px-6 md:px-12 bg-white border-t border-nuve-stone/10 relative">
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="max-w-2xl">
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block mb-4">WHAT WE OFFER</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight font-light text-nuve-espresso uppercase">
              STUDIO CAPABILITIES <span className="font-serif-italic text-nuve-clay normal-case font-normal">and practice</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-nuve-stone leading-relaxed mt-4 font-light">
              We offer bespoke, full-scope interior consulting. Our work spans physical architecture editing, historic furniture sourcing, quiet object styling, and expert construction coordination.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="group border border-nuve-stone/15 hover:border-nuve-clay/40 transition-all duration-300 p-8 flex flex-col justify-between min-h-[360px] bg-white relative cursor-pointer shadow-xs hover:shadow-md"
              >
                <div>
                  <span className="font-mono text-base text-nuve-stone font-light block mb-6">0{index + 1}</span>
                  <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-nuve-cream border border-nuve-stone/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg tracking-wider text-nuve-espresso group-hover:text-nuve-clay transition-colors duration-300 font-light mb-3 uppercase">
                    {service.title}
                  </h3>
                </div>
                <div>
                  <p className="font-sans text-base text-nuve-stone leading-relaxed font-light mb-4">
                    {service.description}
                  </p>
                  <span className="font-mono text-sm tracking-widest text-nuve-clay group-hover:underline uppercase font-bold">
                    EXPLORE PROCESS →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="group flex items-center gap-3 font-mono text-base tracking-[0.25em] bg-nuve-espresso text-nuve-cream px-10 py-5 uppercase hover:bg-nuve-clay transition-all duration-300 cursor-pointer shadow-md"
            >
              INITIATE A CONVERSATION <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
