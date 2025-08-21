import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import Components (Corrected to lowercase to match filenames)
import { Header } from './components/header';
import { Footer } from './components/footer';

// Import Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [page, setPage] = useState('Home');
  const [contactTarget, setContactTarget] = useState(null);

  const handleContactNavigate = (target = null) => {
    setContactTarget(target);
    setPage('Contact');
  };

  const renderPage = () => {
    switch (page) {
      case 'Projects': return <ProjectsPage />;
      case 'Team': return <TeamPage onContact={handleContactNavigate} />;
      case 'Blog': return <BlogPage />;
      case 'Contact': return <ContactPage contactTarget={contactTarget} />;
      case 'Home':
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div className="bg-black font-sans text-white">
      <Header activePage={page} onNavigate={setPage} />
      <AnimatePresence mode="wait">
        {React.cloneElement(renderPage(), { key: page })}
      </AnimatePresence>
      <Footer onNavigate={handleContactNavigate} />
    </div>
  );
}
