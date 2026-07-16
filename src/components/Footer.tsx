import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-nuve-espresso text-nuve-cream pt-20 pb-12 relative overflow-hidden">
      {/* Background ambient grain */}
      <div className="absolute inset-0 bg-grain" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-nuve-stone/20">
          {/* Logo / Tagline */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="font-serif text-3xl tracking-wider">
              NUVE <span className="font-serif-italic text-nuve-clay">STUDIO</span>
            </h2>
            <p className="font-sans text-lg text-nuve-sand/80 max-w-sm leading-relaxed font-light">
              We design light-filled, emotionally resonant interior environments. Guided by materiality, restraint, and intentional layout.
            </p>
            <div className="mt-4">
              <span className="font-mono text-sm tracking-widest text-nuve-clay uppercase block">ESTABLISHED 2018</span>
              <span className="font-mono text-base text-nuve-stone">PORTUGAL & GREECE</span>
            </div>
          </div>

          {/* Menu Links Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="font-mono text-base tracking-[0.2em] text-nuve-clay font-medium">MENU</p>
            <ul className="flex flex-col gap-2.5">
              {['home', 'about', 'portfolio', 'services', 'journal'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item as Page)}
                    className="font-sans text-base tracking-wider text-nuve-sand/80 hover:text-nuve-cream transition-colors duration-200 cursor-pointer text-left uppercase"
                  >
                    {item === 'home' ? 'INTRO' : item === 'about' ? 'ABOUT US' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="font-mono text-base tracking-[0.2em] text-nuve-clay font-medium">FOLLOW US</p>
            <ul className="flex flex-col gap-2.5">
              {['INSTAGRAM', 'PINTEREST', 'BEHANCE', 'LINKEDIN'].map((social) => (
                <li key={social}>
                  <a
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-sans text-base tracking-wider text-nuve-sand/80 hover:text-nuve-cream transition-colors duration-200 block"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <p className="font-mono text-base tracking-[0.2em] text-nuve-clay font-medium">CONTACT</p>
            <address className="not-italic flex flex-col gap-3">
              <p className="font-sans text-base text-nuve-sand/85 leading-relaxed font-light">
                Rua de São Bento 142,<br />
                1200-821 Lisbon, Portugal
              </p>
              <div className="flex flex-col gap-1 mt-2">
                <a
                  href="mailto:hello@nuvestudio.com"
                  className="font-sans text-base text-nuve-sand/85 hover:text-nuve-cream transition-colors underline underline-offset-4"
                >
                  hello@nuvestudio.com
                </a>
                <a
                  href="tel:+351912345678"
                  className="font-sans text-base text-nuve-sand/85 hover:text-nuve-cream transition-colors"
                >
                  +351 912 345 678
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Scrolling Banner Ticker */}
        <div id="footer-marquee-ticker" className="py-12 relative overflow-hidden -mx-12 select-none pointer-events-none border-b border-nuve-stone/15">
          <div className="animate-marquee flex gap-8 whitespace-nowrap text-nuve-cream/20">
            {Array.from({ length: 4 }).map((_, blockIdx) => (
              <div key={blockIdx} className="flex items-center gap-12 text-3xl md:text-5xl font-serif tracking-wider">
                <span>GET IN TOUCH</span>
                <span className="text-nuve-clay text-2xl font-sans">•</span>
                <span className="font-serif-italic text-nuve-clay">NUVE STUDIO</span>
                <span className="text-nuve-clay text-2xl font-sans">•</span>
                <span>DESIGNS WITH INTENTION</span>
                <span className="text-nuve-clay text-2xl font-sans">•</span>
                <span className="font-serif-italic">MATERIAL & MOOD</span>
                <span className="text-nuve-clay text-2xl font-sans">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-nuve-stone font-mono text-sm">
          <p>© {new Date().getFullYear()} NUVE STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-nuve-sand transition-colors">PRIVACY POLICY</a>
            <a href="#terms" className="hover:text-nuve-sand transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
