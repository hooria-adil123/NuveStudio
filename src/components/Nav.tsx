import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';
import { Menu, X } from 'lucide-react';

interface NavProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Nav({ currentPage, onNavigate }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDarkHeader = currentPage === 'home' && !isScrolled;

  // Detect scroll to style Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT US', value: 'about' as Page },
    { label: 'PORTFOLIO', value: 'portfolio' as Page },
    { label: 'SERVICES', value: 'services' as Page },
    { label: 'JOURNAL', value: 'journal' as Page },
  ];

  const handleLinkClick = (page: Page) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  const isDetailActive = (itemPage: Page) => {
    if (currentPage === itemPage) return true;
    if (itemPage === 'portfolio' && currentPage === 'portfolio-detail') return true;
    if (itemPage === 'journal' && currentPage === 'journal-detail') return true;
    return false;
  };

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-nuve-cream/95 backdrop-blur-md py-4 hairline-b shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            id="nav-logo"
            onClick={() => handleLinkClick('home')}
            className="group flex flex-col text-left focus:outline-none"
          >
            <span className={`font-serif text-xl tracking-wider font-semibold transition-colors duration-300 group-hover:text-nuve-clay ${
              isDarkHeader ? 'text-white' : 'text-nuve-espresso'
            }`}>
              NUVE <span className={`font-serif-italic font-light transition-colors duration-300 ${
                isDarkHeader ? 'text-white/95' : 'text-nuve-clay'
              }`}>STUDIO</span>
            </span>
            <span className={`font-mono text-sm tracking-[0.3em] -mt-1 uppercase transition-colors duration-300 ${
              isDarkHeader ? 'text-white/60' : 'text-nuve-stone'
            }`}>
              MATERIAL • MOOD
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`nav-item-${item.value}`}
                onClick={() => handleLinkClick(item.value)}
                className={`font-mono font-bold text-base tracking-[0.2em] relative py-2 transition-colors duration-300 focus:outline-none cursor-pointer ${
                  isDarkHeader
                    ? 'text-white hover:text-nuve-clay'
                    : 'text-nuve-espresso hover:text-nuve-clay'
                }`}
              >
                {item.label}
                {isDetailActive(item.value) && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-nuve-clay"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              id="nav-contact-cta"
              onClick={() => handleLinkClick('contact')}
              className={`font-mono text-base tracking-[0.25em] px-5 py-2.5 rounded-none border transition-all duration-300 focus:outline-none cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-nuve-espresso text-nuve-cream border-nuve-espresso'
                  : isDarkHeader
                    ? 'border-white/40 text-white hover:bg-white hover:text-nuve-espresso hover:border-white'
                    : 'border-nuve-espresso/30 text-nuve-espresso hover:bg-nuve-espresso hover:text-nuve-cream hover:border-nuve-espresso'
              }`}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors focus:outline-none cursor-pointer ${
              isDarkHeader && !isMobileMenuOpen
                ? 'text-white hover:text-nuve-clay'
                : 'text-nuve-espresso hover:text-nuve-clay'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-nuve-cream z-30 pt-28 px-8 flex flex-col justify-between pb-12 overflow-y-auto"
          >
            {/* Ambient grain background */}
            <div className="absolute inset-0 bg-grain" />

            <div className="flex flex-col gap-8 z-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.value}
                  id={`mobile-nav-item-${item.value}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleLinkClick(item.value)}
                  className={`text-left font-serif text-3xl tracking-wide py-2 focus:outline-none flex items-center justify-between cursor-pointer ${
                    isDetailActive(item.value) ? 'text-nuve-clay' : 'text-nuve-espresso'
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-base text-nuve-stone">0{index + 1}</span>
                    {item.label}
                  </span>
                  {isDetailActive(item.value) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-nuve-clay" />
                  )}
                </motion.button>
              ))}

              <motion.button
                id="mobile-nav-contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => handleLinkClick('contact')}
                className={`text-left font-serif text-3xl tracking-wide py-2 focus:outline-none flex items-center justify-between cursor-pointer ${
                  currentPage === 'contact' ? 'text-nuve-clay' : 'text-nuve-espresso'
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-base text-nuve-stone">05</span>
                  CONTACT US
                </span>
                {currentPage === 'contact' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-nuve-clay" />
                )}
              </motion.button>
            </div>

            <div className="z-10 flex flex-col gap-4 border-t border-nuve-stone/20 pt-8">
              <p className="font-mono text-base tracking-[0.2em] text-nuve-stone">
                NUVE STUDIO • LISBON & ATHENS
              </p>
              <p className="font-mono text-sm text-nuve-stone">
                hello@nuvestudio.com • +351 912 345 678
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
