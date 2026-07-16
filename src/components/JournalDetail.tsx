import { JOURNAL } from '../data';
import { Page } from '../types';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';

interface JournalDetailProps {
  articleSlug: string;
  onNavigate: (page: Page, slug?: string) => void;
}

export default function JournalDetail({ articleSlug, onNavigate }: JournalDetailProps) {
  const article = JOURNAL.find((a) => a.slug === articleSlug) || JOURNAL[0];

  // Pick other articles as recommendation
  const recommendations = JOURNAL.filter((a) => a.slug !== articleSlug).slice(0, 2);

  return (
    <div id="journal-detail-view" className="relative w-full pt-28">
      {/* Back button header */}
      <section className="px-6 md:px-12 py-6 bg-nuve-cream border-b border-nuve-stone/10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={() => onNavigate('journal')}
            className="group inline-flex items-center gap-2 font-mono text-base tracking-widest text-nuve-espresso hover:text-nuve-clay transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> BACK TO JOURNAL
          </button>
          
          <div className="flex gap-4">
            <button className="text-nuve-stone hover:text-nuve-clay transition-colors" title="Share article">
              <Share2 size={16} />
            </button>
            <button className="text-nuve-stone hover:text-nuve-clay transition-colors" title="Bookmark article">
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Hero Banner Section */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden bg-nuve-sand border-b border-nuve-stone/10">
        <img
          src={article.image}
          alt={article.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nuve-espresso/70 to-transparent" />
        <div className="absolute inset-0 bg-grain" />
        
        {/* Absolute floating category */}
        <div className="absolute bottom-8 left-6 md:left-12 z-10">
          <span className="bg-white/95 backdrop-blur-xs px-4 py-1.5 text-sm font-mono tracking-widest text-nuve-espresso uppercase">
            {article.category}
          </span>
        </div>
      </section>

      {/* Main text block */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white relative">
        <div className="absolute inset-0 bg-grain" />
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          
          {/* Article Header */}
          <div className="flex flex-col gap-4 border-b border-nuve-stone/10 pb-8">
            <div className="flex items-center gap-4 text-mono text-base text-nuve-stone">
              <span>{article.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-nuve-clay" />
              <span className="flex items-center gap-1">
                <Clock size={14} /> {article.readTime}
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-nuve-espresso tracking-wide uppercase font-light">
              {article.title}
            </h1>
          </div>

          {/* Parsed Editorial Content */}
          <div id="journal-article-body" className="prose prose-stone max-w-none text-nuve-espresso">
            {article.content.split('\n\n').map((paragraph, index) => {
              const text = paragraph.trim();
              if (!text) return null;

              // Check if it's a heading
              if (text.startsWith('###')) {
                return (
                  <h3 key={index} className="font-serif text-xl sm:text-2xl font-light text-nuve-espresso mt-8 mb-4 uppercase">
                    {text.replace('###', '').trim()}
                  </h3>
                );
              }

              // Check if it's a list item
              if (text.startsWith('*')) {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-2 text-lg sm:text-base leading-relaxed text-nuve-stone font-light my-4">
                    {text.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>
                        {li.replace('*', '').trim().replace('**', '').replace('**', '')}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Check if it's numbered list
              if (text.match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal pl-5 space-y-2 text-lg sm:text-base leading-relaxed text-nuve-stone font-light my-4">
                    {text.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>
                        {li.replace(/^\d+\./, '').trim().replace('**', '').replace('**', '')}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Standard paragraph with bold parsing
              return (
                <p
                  key={index}
                  className="font-sans text-lg sm:text-base leading-relaxed text-nuve-stone font-light my-4"
                  dangerouslySetInnerHTML={{
                    __html: text
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-nuve-espresso">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="italic text-nuve-clay">$1</em>'),
                  }}
                />
              );
            })}
          </div>

        </div>
      </section>

      {/* Recs at the bottom */}
      {recommendations.length > 0 && (
        <section className="py-16 md:py-24 bg-nuve-cream border-t border-nuve-stone/15">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="font-mono text-base tracking-widest text-nuve-stone uppercase mb-10">RECOMMENDED READING</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {recommendations.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => {
                    onNavigate('journal-detail', rec.slug);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group cursor-pointer flex flex-col gap-4"
                >
                  <div className="aspect-[16/10] overflow-hidden border border-nuve-stone/10 bg-nuve-sand">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-sm text-nuve-stone tracking-widest uppercase">{rec.category}</span>
                    <h4 className="font-serif text-lg text-nuve-espresso group-hover:text-nuve-clay transition-colors font-light uppercase mt-1">
                      {rec.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
