import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Import Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Import Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [page, setPage] = useState('Home');
  // New state to hold the information of the person being contacted
  const [contactTarget, setContactTarget] = useState(null);

  // New handler for navigating to the contact page with a specific target
  const handleContactNavigate = (target = null) => {
    setContactTarget(target);
    setPage('Contact');
  };

  const renderPage = () => {
    switch (page) {
      case 'Projects': return <ProjectsPage />;
      // Pass the new handler to the TeamPage
      case 'Team': return <TeamPage onContact={handleContactNavigate} />;
      case 'Blog': return <BlogPage />;
      // Pass the target state to the ContactPage
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
