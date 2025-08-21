import React from 'react';
import { Mail, Youtube, Github, Linkedin, Instagram, Send as Telegram } from 'lucide-react';

export const Footer = ({ onNavigate }) => (
    <footer className="border-t border-slate-800 bg-black">
        <div className="container mx-auto px-6 py-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Vortiqon Science. All Rights Reserved.</p>
            <p className="mt-2 text-sm">An independent student research team at K. N. Toosi University of Technology.</p>
            <div className="mt-6 flex justify-center space-x-6">
                <a href="https://www.youtube.com/@vortiqon_science" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" title="YouTube"><Youtube className="h-6 w-6" /></a>
                <a href="https://github.com/vortiqon-science" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" title="GitHub"><Github className="h-6 w-6" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" title="LinkedIn (Coming Soon)"><Linkedin className="h-6 w-6" /></a>
                {/* Added Instagram and Telegram Icons */}
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" title="Instagram"><Instagram className="h-6 w-6" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" title="Telegram"><Telegram className="h-6 w-6" /></a>
                {/* Changed mailto link to navigate to the contact page */}
                <a href="#" onClick={() => onNavigate('Contact')} className="hover:text-indigo-400 transition-colors" title="Email"><Mail className="h-6 w-6" /></a>
            </div>
        </div>
    </footer>
);
