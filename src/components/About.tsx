import { motion } from 'motion/react';
import { Page } from '../types';
import { ArrowRight, CircleDot } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const pillars = [
    {
      title: 'MATERIALITY FIRST',
      description: 'We believe materials hold active energy and history. We reject synthetic, flat veneers in favor of living, breathing plaster, reclaimed solid timbers, and unfilled stone that patinates and matures with the house.',
    },
    {
      title: 'THE BEAUTY OF RESTRAINT',
      description: 'True elegance lies in what we edit out. By allowing generous margins of blank spaces, we draw focus to the falling paths of sunlight, the textures of timber joints, and the quietness within the home.',
    },
    {
      title: 'SPATIAL COMPOSITION',
      description: 'We craft layouts as musical scores — choreographing pauses, heights, views, and structural thresholds that encourage walking slower and breathing deeper.',
    },
  ];

  return (
    <div id="about-view" className="relative w-full pt-28">
      {/* Header Banner */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-nuve-cream">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">ABOUT US</span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-light text-nuve-espresso max-w-4xl">
            CRAFTING SPACES THAT <span className="font-serif-italic text-nuve-clay">Breathe.</span>
          </h1>
          <div className="w-16 h-[1px] bg-nuve-clay my-4" />
          <p className="font-sans text-base md:text-lg text-nuve-stone max-w-2xl font-light leading-relaxed">
            Founded by Evelyn Vane and Liam Soren, Nuve Studio is a boutique architectural interior practice rooted in warm minimalism and somatic design.
          </p>
        </div>
      </section>

      {/* Narrative Section (Asymmetric splits) */}
      <section className="py-24 px-6 md:px-12 bg-white relative border-t border-nuve-stone/10">
        <div className="absolute inset-0 bg-grain" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Images panel */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-6">
            <div className="col-span-7 relative overflow-hidden aspect-[4/5] border border-nuve-stone/10 bg-nuve-cream">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                alt="Architectural details"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-5 self-end relative overflow-hidden aspect-square border border-nuve-stone/10 bg-nuve-cream">
              <img
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80"
                alt="Washed sunlight"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Core Philosophy text */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase">OUR STORY</span>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight font-light">
              BEYOND THE SURFACE
            </h2>
            <p className="font-sans text-lg text-nuve-stone leading-relaxed font-light">
              We began in Lisbon with a simple conviction: spaces are our psychological mirrors. A chaotic, over-furnished house feeds anxiety, while a quiet, textured space stabilizes our thoughts and invites clarity.
            </p>
            <p className="font-sans text-lg text-nuve-stone leading-relaxed font-light">
              By merging organic architecture, raw material science, and high-end curation, we establish homes that serve as actual sensory anchors. We source reclaimed olive logs, mold mineral-plaster mixtures by hand, and balance light patterns to ensure every corner has a somatic purpose.
            </p>
            
            <div className="pt-4 border-t border-nuve-stone/15 flex items-center gap-12">
              <div>
                <span className="font-serif text-3xl font-light text-nuve-clay">8+</span>
                <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block mt-1">YEARS CRITICAL WORK</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-light text-nuve-clay">60+</span>
                <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block mt-1">SANCTUARIES COMPLETED</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Three Pillars (Bento-inspired columns) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-nuve-cream border-t border-nuve-stone/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="max-w-xl">
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block mb-4">THE NUVE ETHOS</span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight font-light uppercase">
              OUR GUIDING <span className="font-serif-italic text-nuve-clay normal-case">Principles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-nuve-stone/15 p-10 flex flex-col gap-6 shadow-xs relative"
              >
                <div className="flex items-center gap-3">
                  <CircleDot size={16} className="text-nuve-clay" />
                  <h3 className="font-mono text-base tracking-widest text-nuve-espresso font-semibold">
                    {pillar.title}
                  </h3>
                </div>
                <p className="font-sans text-[13px] text-nuve-stone leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Founders section */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-nuve-stone/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase">THE FOUNDERS</span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight font-light uppercase">
              EVELYN VANE & <br />
              <span className="font-serif-italic text-nuve-clay normal-case">Liam Soren</span>
            </h2>
            <p className="font-sans text-lg text-nuve-stone leading-relaxed font-light">
              Evelyn leads the artistic direction, drawing on her years spent in Japan studying traditional timber joins and wabi-sabi spaces. Liam conducts the technical and structural design, specializing in mineral textures and light modeling.
            </p>
            <p className="font-sans text-lg text-nuve-stone leading-relaxed font-light">
              Together, they balance visual aesthetics with rigorous spatial engineering, delivering environments that remain comfortable and timeless for decades.
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-3 font-mono text-base tracking-[0.25em] bg-nuve-espresso text-nuve-cream px-6 py-3 uppercase hover:bg-nuve-clay transition-all duration-300 cursor-pointer"
              >
                COLLABORATE WITH US <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Large portrait image */}
          <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] border border-nuve-stone/10 bg-nuve-cream">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Designers examining site plans"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
