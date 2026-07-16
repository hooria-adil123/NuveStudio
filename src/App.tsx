import { useState, useEffect } from 'react';
import { Page } from './types';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Views
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PortfolioDetail from './components/PortfolioDetail';
import Services from './components/Services';
import Journal from './components/Journal';
import JournalDetail from './components/JournalDetail';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('serra-niche');
  const [selectedJournalSlug, setSelectedJournalSlug] = useState<string>('spaces-that-breathe');

  // Page navigation state management
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<{
    page: Page;
    id?: string;
  } | null>(null);

  // Unified elegant navigation routing function
  const navigateTo = (targetPage: Page, id?: string) => {
    // If we're clicking current page, just scroll to top
    if (currentPage === targetPage && !id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Schedule transition curtain
    setPendingNavigation({ page: targetPage, id });
    setIsTransitioning(true);
  };

  // Called when transition overlay completely covers the screen
  const handleTransitionMidpoint = () => {
    if (pendingNavigation) {
      const { page, id } = pendingNavigation;
      setCurrentPage(page);

      if (page === 'portfolio-detail' && id) {
        setSelectedProjectId(id);
      } else if (page === 'journal-detail' && id) {
        setSelectedJournalSlug(id);
      }

      // Immediately snap scroll container to top while screen is covered
      window.scrollTo({ top: 0 });
    }
  };

  // Called when the full page transition is completely done
  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setPendingNavigation(null);
  };

  // Primary Router switch
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'about':
        return <About onNavigate={navigateTo} />;
      case 'portfolio':
        return <Portfolio onNavigate={navigateTo} />;
      case 'portfolio-detail':
        return (
          <PortfolioDetail
            projectId={selectedProjectId}
            onNavigate={navigateTo}
          />
        );
      case 'services':
        return <Services onNavigate={navigateTo} />;
      case 'journal':
        return <Journal onNavigate={navigateTo} />;
      case 'journal-detail':
        return (
          <JournalDetail
            articleSlug={selectedJournalSlug}
            onNavigate={navigateTo}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div id="nuve-applet-root" className="min-h-screen bg-nuve-cream text-nuve-espresso relative flex flex-col justify-between">
      {/* Absolute overlay grain for subtle vintage textured paper vibe */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-45" />

      {/* Persistent Navigation */}
      <Nav currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main View Area */}
      <main id="main-content-window" className="flex-grow">
        {renderPageContent()}
      </main>

      {/* Elegant Footer Column structure */}
      <Footer onNavigate={navigateTo} />

      {/* Signature preloader / route transition curtain */}
      <PageTransition
        isTriggered={isTransitioning}
        destinationPage={pendingNavigation?.page || currentPage}
        onMidpointReached={handleTransitionMidpoint}
        onComplete={handleTransitionComplete}
      />
    </div>
  );
}
