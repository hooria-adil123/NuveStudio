import { useState } from 'react';
import { PROJECTS } from '../data';
import { Page } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (page: Page, id?: string) => void;
}

type FilterCategory = 'all' | 'residential' | 'commercial' | 'hospitality';

export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div id="portfolio-view" className="relative w-full pt-28">
      {/* Header Banner */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-nuve-cream">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">PORTFOLIO INDEX</span>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-light text-nuve-espresso max-w-4xl uppercase">
            IMPRESSIONS THAT <span className="font-serif-italic text-nuve-clay normal-case">Endure.</span>
          </h1>
          
          <div className="w-16 h-[1px] bg-nuve-clay my-4" />
          
          {/* Filters and Navigation */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-4">
            <span className="font-mono text-base font-bold tracking-widest text-nuve-espresso uppercase">FILTER BY:</span>
            <div className="flex flex-wrap gap-2">
              {(['all', 'residential', 'commercial', 'hospitality'] as FilterCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`font-mono font-bold text-base tracking-[0.2em] px-4 py-2 border transition-all duration-300 focus:outline-none cursor-pointer uppercase ${
                    activeFilter === category
                      ? 'bg-nuve-espresso text-nuve-cream border-nuve-espresso'
                      : 'border-nuve-espresso/30 text-nuve-espresso/80 hover:border-nuve-espresso hover:text-nuve-espresso'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section (Asymmetric layouts inspired by Sol Haus) */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative">
        <div className="absolute inset-0 bg-grain" />
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-serif text-xl text-nuve-stone italic">No matching projects found in this collection.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  id={`portfolio-card-${project.id}`}
                  onClick={() => onNavigate('portfolio-detail', project.id)}
                  className="group cursor-pointer flex flex-col gap-6"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden border border-nuve-stone/10 bg-nuve-sand">
                    <img
                      src={project.primaryImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    {/* Index count tag */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 text-base font-mono text-nuve-espresso tracking-[0.15em]">
                      {project.number}
                    </div>
                  </div>

                  {/* Info Row */}
                  <div className="flex justify-between items-start pt-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono font-bold text-sm tracking-widest text-nuve-espresso/70 uppercase">
                        {project.location} • {project.year}
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl tracking-wide text-nuve-espresso group-hover:text-nuve-clay transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-nuve-espresso/15 flex items-center justify-center group-hover:bg-nuve-espresso group-hover:text-nuve-cream transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Description Teaser */}
                  <p className="font-sans text-[13px] text-nuve-espresso/80 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Accents Bar */}
                  <div className="flex items-center gap-3 border-t border-nuve-stone/10 pt-4 mt-2">
                    <span className="font-mono font-bold text-base text-nuve-espresso/70 tracking-[0.2em] uppercase">PALETTE:</span>
                    <div className="flex items-center gap-2">
                      {project.accentColors.map((color, colorIdx) => (
                        <div
                          key={colorIdx}
                          className="w-4.5 h-4.5 rounded-full border border-nuve-espresso/10"
                          style={{ backgroundColor: color }}
                          title={project.paletteNames[colorIdx]}
                        />
                      ))}
                    </div>
                    <span className="font-sans font-medium text-[12px] text-nuve-espresso/80 italic">
                      {project.paletteNames.join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Aesthetic Callout */}
      <section className="py-24 bg-nuve-cream text-center border-t border-nuve-stone/10 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <p className="font-mono text-sm tracking-widest text-nuve-stone uppercase">OUR COMMITMENT</p>
          <blockquote className="font-serif text-2xl sm:text-3xl italic font-light text-nuve-espresso leading-relaxed">
            "Space is not merely volume. It is a slow emotional register, structured by details we can sense and touch."
          </blockquote>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-4 font-mono text-base tracking-widest border-b border-nuve-espresso pb-1 text-nuve-espresso hover:text-nuve-clay hover:border-nuve-clay transition-colors uppercase cursor-pointer"
          >
            DISCUSS A NEW PROJECT
          </button>
        </div>
      </section>
    </div>
  );
}
