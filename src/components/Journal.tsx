import { JOURNAL } from '../data';
import { Page } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

interface JournalProps {
  onNavigate: (page: Page, slug?: string) => void;
}

export default function Journal({ onNavigate }: JournalProps) {
  return (
    <div id="journal-view" className="relative w-full pt-28">
      {/* Header section (Inspired by Image 6/8) */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-nuve-cream">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <span className="font-mono text-sm tracking-widest text-nuve-stone uppercase block">STUDIO CHRONICLE</span>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-light text-nuve-espresso max-w-4xl uppercase">
            NOTES FROM <br />
            <span className="font-serif-italic text-nuve-clay normal-case">The Studio.</span>
          </h1>
          
          <div className="w-16 h-[1px] bg-nuve-clay my-4" />
          
          <p className="font-sans text-base md:text-lg text-nuve-stone max-w-2xl font-light leading-relaxed">
            Thoughtful write-ups on mineral plaster, negative volume, wabi-sabi balance, and sculpting with sunlight.
          </p>
        </div>
      </section>

      {/* Grid List Section (Asymmetric layout inspired by Image 6/8) */}
      <section className="py-16 md:py-28 px-6 md:px-12 bg-white relative">
        <div className="absolute inset-0 bg-grain" />
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {JOURNAL.map((article) => (
              <article
                key={article.id}
                id={`journal-post-${article.slug}`}
                onClick={() => onNavigate('journal-detail', article.slug)}
                className="group cursor-pointer flex flex-col gap-6"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden border border-nuve-stone/10 bg-nuve-sand">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1 text-sm font-mono text-nuve-espresso tracking-widest">
                    {article.category}
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-4 text-mono text-sm text-nuve-stone">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-nuve-clay" />
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-nuve-espresso group-hover:text-nuve-clay transition-colors duration-300 font-light uppercase">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="font-sans text-base sm:text-lg text-nuve-stone leading-relaxed font-light">
                  {article.excerpt}
                </p>

                {/* CTA Link */}
                <div className="pt-2 border-t border-nuve-stone/10 mt-auto">
                  <span className="group-hover:text-nuve-clay transition-colors font-mono text-base tracking-widest text-nuve-espresso font-bold flex items-center gap-2 uppercase">
                    READ ARTICLE <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Editorial Quote bar */}
      <section className="py-24 bg-nuve-cream border-t border-nuve-stone/10 text-center px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
          <p className="font-mono text-sm tracking-widest text-nuve-stone uppercase">THE PHILOSOPHY</p>
          <blockquote className="font-serif text-2xl italic font-light text-nuve-espresso">
            "We compile notes not to showcase, but to understand our materials, light, and silence."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
