import { useState } from 'react';
import { SERVICES } from '../data';
import { Page } from '../types';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  // Keep track of which service cards are expanded
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div id="services-view" className="relative w-full pt-28">
      {/* Header Section (Inspired by Image 5/8) */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-nuve-cream">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">OUR STUDIO CAPABILITIES</span>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-light text-nuve-espresso max-w-4xl uppercase">
            DESIGN THAT <span className="font-serif-italic text-nuve-clay normal-case">Resonates.</span>
          </h1>
          
          <div className="w-16 h-[1px] bg-nuve-clay my-4" />
          
          <p className="font-sans text-base md:text-lg text-nuve-stone max-w-2xl font-light leading-relaxed">
            We offer more than design — we craft experiences through clarity, texture, intention, and thoughtful presence. Explore our layered core capabilities.
          </p>
        </div>
      </section>

      {/* Grid of Fine-Lined Bento Cards (Direct translation of Image 5/8) */}
      <section className="py-16 md:py-28 px-6 md:px-12 bg-white relative">
        <div className="absolute inset-0 bg-grain" />
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, index) => {
              const isExpanded = expandedId === service.id;
              return (
                <div
                  key={service.id}
                  className={`border border-nuve-stone/15 bg-white p-8 md:p-12 transition-all duration-500 relative flex flex-col justify-between ${
                    isExpanded ? 'ring-1 ring-nuve-clay/40 bg-nuve-ivory/40' : 'hover:border-nuve-clay/35'
                  }`}
                >
                  <div>
                    {/* Index number and expandable action */}
                    <div className="flex justify-between items-center mb-8">
                      <span className="font-mono text-base text-nuve-stone font-light">
                        {service.number}
                      </span>
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="p-1.5 rounded-full border border-nuve-stone/10 text-nuve-stone hover:text-nuve-clay hover:border-nuve-clay/30 transition-all duration-300 focus:outline-none cursor-pointer"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>

                    {/* Image frame */}
                    <div className="aspect-[16/10] w-full overflow-hidden mb-8 border border-nuve-stone/5 bg-nuve-cream">
                      <img
                        src={service.image}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Headline */}
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl tracking-wider text-nuve-espresso mb-4">
                      {service.title}
                    </h2>

                    {/* Baseline Description */}
                    <p className="font-sans text-base text-nuve-espresso/90 leading-relaxed font-normal mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Expandable details panel */}
                  <div className="mt-2">
                    {isExpanded && (
                      <div className="mb-6 py-4 border-t border-nuve-stone/10 text-lg text-nuve-espresso/80 leading-relaxed font-normal flex flex-col gap-5 animate-fadeIn">
                        <p className="text-base text-nuve-espresso/90 leading-relaxed font-normal">
                          {service.longDescription}
                        </p>
                        <div className="mt-2 flex flex-col gap-2">
                          <span className="font-mono text-base tracking-widest text-nuve-clay uppercase font-bold">TYPICAL PROCESS OUTLINE:</span>
                          <ul className="list-disc pl-5 space-y-2 text-lg text-nuve-espresso/90">
                            <li>Initial schematic alignment and somatic brief session.</li>
                            <li>Material samples review, elevation models and rendering reviews.</li>
                            <li>Bespoke sourcing and craftsmanship coordination checks.</li>
                            <li>Site visitation, custom installations alignment, and styling.</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="font-mono text-base tracking-widest text-nuve-clay uppercase font-bold hover:underline focus:outline-none cursor-pointer"
                    >
                      {isExpanded ? 'COLLAPSE INSIGHTS ↑' : 'EXPAND STUDY PROCESS →'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Services Consultation Callout */}
      <section className="py-24 bg-nuve-cream border-t border-nuve-stone/10">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase">WORK WITH US</span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight font-light text-nuve-espresso max-w-xl leading-snug">
            WOULD YOU LIKE TO CO-DESIGN A SANCTUARY WITH US?
          </h2>
          <p className="font-sans text-lg text-nuve-stone max-w-lg leading-relaxed font-light">
            We are currently accepting a limited list of residential and commercial commissions for late 2026. Let's begin planning your layout.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="group flex items-center gap-3 font-mono text-base tracking-[0.25em] bg-nuve-espresso text-nuve-cream px-8 py-4 uppercase hover:bg-nuve-clay transition-all duration-300 cursor-pointer"
          >
            INITIATE A CONVERSATION <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
