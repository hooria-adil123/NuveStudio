import { Page, Project } from '../types';
import { PROJECTS } from '../data';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

interface PortfolioDetailProps {
  projectId: string;
  onNavigate: (page: Page, id?: string) => void;
}

export default function PortfolioDetail({ projectId, onNavigate }: PortfolioDetailProps) {
  // Find current project
  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = projectIndex !== -1 ? PROJECTS[projectIndex] : PROJECTS[0];

  // Navigate to adjacent projects
  const handlePrevProject = () => {
    const prevIndex = (projectIndex - 1 + PROJECTS.length) % PROJECTS.length;
    onNavigate('portfolio-detail', PROJECTS[prevIndex].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextProject = () => {
    const nextIndex = (projectIndex + 1) % PROJECTS.length;
    onNavigate('portfolio-detail', PROJECTS[nextIndex].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="portfolio-detail-view" className="relative w-full pt-28">
      {/* Top Back Action Bar */}
      <section className="px-6 md:px-12 py-6 bg-nuve-cream border-b border-nuve-stone/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => onNavigate('portfolio')}
            className="group inline-flex items-center gap-2 font-mono text-base tracking-widest text-nuve-espresso hover:text-nuve-clay transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO PORTFOLIO
          </button>
          
          <div className="flex items-center gap-4 font-mono text-base text-nuve-stone">
            <span>INDEX</span>
            <span className="font-semibold text-nuve-espresso">{project.number}</span>
          </div>
        </div>
      </section>

      {/* Main Showcase Layout (Similar to Image 3/8 & 4/8) */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative">
        <div className="absolute inset-0 bg-grain" />
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* Main Titles */}
          <div className="text-center md:text-left">
            <span className="font-mono text-sm tracking-[0.25em] text-nuve-stone uppercase block mb-3">
              {project.location} • {project.year}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-wide font-light text-nuve-espresso">
              {project.title}
            </h1>
          </div>

          {/* Asymmetric Image/Text Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Primary Image */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-nuve-stone/10 bg-nuve-cream">
                <img
                  src={project.primaryImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-base text-nuve-stone tracking-wide italic text-center md:text-left">
                Design concept for a boutique, quiet luxury {project.category} environment.
              </p>
            </div>

            {/* Right Details Panel */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              
              {/* Description */}
              <div className="flex flex-col gap-4">
                <h3 className="font-mono text-base tracking-widest text-nuve-clay font-semibold">THE BRIEF & CONCEPT</h3>
                <p className="font-sans text-lg text-nuve-stone leading-relaxed font-light">
                  {project.fullDescription}
                </p>
              </div>

              {/* Color Palette Chips (A signature feature from Image 3/8) */}
              <div className="border-t border-nuve-stone/15 pt-8 flex flex-col gap-4">
                <h3 className="font-mono text-base tracking-widest text-nuve-clay font-semibold uppercase">
                  ACCENT COLOR PALETTE
                </h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {project.accentColors.map((color, index) => (
                      <div key={index} className="flex flex-col items-center gap-1.5">
                        <div
                          className="w-12 h-12 rounded-full border border-nuve-espresso/15 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-mono text-sm text-nuve-stone tracking-widest uppercase">
                          {project.paletteNames[index]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="font-sans text-base text-nuve-stone/85 leading-relaxed font-light">
                    Materials and paints selected to preserve soft, natural light reflections.
                  </p>
                </div>
              </div>

              {/* Project Details Specs list */}
              <div className="border-t border-nuve-stone/15 pt-8">
                <h3 className="font-mono text-base tracking-widest text-nuve-clay font-semibold uppercase mb-4">
                  SPECIFICATIONS SHEET
                </h3>
                
                <dl className="grid grid-cols-1 gap-y-3 gap-x-6 sm:grid-cols-2 text-base">
                  {project.specs.map((spec, index) => (
                    <div key={index} className="border-b border-nuve-stone/10 pb-2">
                      <dt className="font-mono text-base tracking-wider text-nuve-stone uppercase">
                        {spec.label}
                      </dt>
                      <dd className="font-sans text-nuve-espresso mt-1 font-medium">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

            </div>
          </div>

          {/* Secondary Sub-image Segment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-nuve-stone/15 pt-16">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">MATERIAL HARMONY</span>
              <h2 className="font-serif text-2xl sm:text-3xl leading-snug font-light text-nuve-espresso">
                ORGANIC CURATION & TEXTURED LAYERS
              </h2>
              <p className="font-sans text-lg text-nuve-stone leading-relaxed font-light">
                Every material combination is chosen to respond beautifully to the natural elements of the space. Plaster surfaces catch the changing morning shadowplay, while solid wooden details introduce a deep warmth that feels authentic and protective.
              </p>
            </div>

            <div className="lg:col-span-7 relative overflow-hidden aspect-[16/10] border border-nuve-stone/10 bg-nuve-cream">
              <img
                src={project.secondaryImage}
                alt={`${project.title} detail angle`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Cyclical Navigation at bottom (PREV / NEXT) */}
      <section className="py-16 md:py-24 bg-nuve-cream border-t border-b border-nuve-stone/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <button
            onClick={handlePrevProject}
            className="group flex flex-col items-start gap-2 focus:outline-none text-left cursor-pointer"
          >
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">PREVIOUS PROJECT</span>
            <span className="font-serif text-lg sm:text-2xl text-nuve-espresso group-hover:text-nuve-clay transition-colors font-light flex items-center gap-2">
              <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" /> PREV
            </span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="hidden sm:inline-flex font-mono text-base tracking-widest bg-nuve-espresso text-nuve-cream px-6 py-3 uppercase hover:bg-nuve-clay transition-all duration-300"
          >
            INQUIRE ABOUT THIS PROJECT
          </button>

          <button
            onClick={handleNextProject}
            className="group flex flex-col items-end gap-2 focus:outline-none text-right cursor-pointer"
          >
            <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">NEXT PROJECT</span>
            <span className="font-serif text-lg sm:text-2xl text-nuve-espresso group-hover:text-nuve-clay transition-colors font-light flex items-center gap-2">
              NEXT <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
