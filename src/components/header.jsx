import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

export const Header = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // "Contact" has been removed from the main navigation
  const navItems = ['Home', 'Projects', 'Team', 'Blog'];
  const handleNavigate = (page) => { onNavigate(page); setIsOpen(false); };

  // This effect adds a scroll listener to make the header's background appear on scroll
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      hasScrolled 
        ? "bg-black/50 backdrop-blur-lg border-b border-slate-800" 
        : "bg-transparent border-b border-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" onClick={() => handleNavigate('Home')} className="text-2xl md:text-3xl font-extrabold text-white">
            Vortiqon<span className="text-indigo-400">.</span>Science
          </a>
          
          {/* This container groups the nav and join button for correct alignment on the right */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-8">
              {navItems.map(item => (
                <a key={item} href="#" onClick={() => handleNavigate(item)} className={cn("text-base font-medium transition-colors duration-300 relative pb-1", activePage === item ? "text-white" : "text-slate-300 hover:text-white")}>
                  {item}
                  {activePage === item && <motion.div layoutId="underline" className="absolute left-0 right-0 bottom-0 h-0.5 bg-indigo-400" />}
                </a>
              ))}
            </nav>
            <a href="#" onClick={() => handleNavigate('Contact')} className="ml-8 bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-all duration-300">Join</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white" aria-label="Toggle Menu">
            <svg width="23" height="23" viewBox="0 0 23 23"><motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={{ closed: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }} animate={isOpen ? "open" : "closed"} /><motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.1 }} animate={isOpen ? "open" : "closed"} /><motion.path stroke="currentColor" strokeWidth="2" strokeLinecap="round" variants={{ closed: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }} animate={isOpen ? "open" : "closed"} /></svg>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden overflow-hidden">
              <nav className="flex flex-col space-y-2 pt-4">
                {navItems.map(item => <a key={item} href="#" onClick={() => handleNavigate(item)} className="text-slate-200 hover:bg-slate-800 rounded-md px-3 py-2 transition-colors duration-300">{item}</a>)}
                <a href="#" onClick={() => handleNavigate('Contact')} className="mt-2 w-full text-center bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-all duration-300">Join</a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
