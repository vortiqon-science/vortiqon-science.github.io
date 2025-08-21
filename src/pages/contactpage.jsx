import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { pageVariants, pageTransition, stagger, fadeInUp } from '../utils/animations';

export const ContactPage = ({ contactTarget }) => {
    const [status, setStatus] = useState('');
    const handleSubmit = (e) => { e.preventDefault(); setStatus('Thank you for your message! We will get back to you soon.'); e.target.reset(); };
    
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="bg-black text-white">
            <main className="container mx-auto px-6 py-24 pt-32 min-h-screen">
                <motion.div className="text-center mb-16" variants={stagger} initial="initial" animate="animate">
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold font-display">Get In Touch</motion.h1>
                    <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Have a question, a proposal, or want to join the team? We'd love to hear from you.</motion.p>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate" className="max-w-2xl mx-auto bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-indigo-900/20">
                    {/* Personalized message if a specific team member was selected */}
                    {contactTarget && (
                        <div className="mb-6 p-4 bg-indigo-900/50 border border-indigo-500/50 rounded-lg text-center">
                            <p className="text-indigo-200">Your message will be forwarded to <span className="font-bold">{contactTarget.name}</span>.</p>
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div><label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label><input type="text" name="name" id="name" required className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" /></div>
                            <div><label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label><input type="email" name="email" id="email" required className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" /></div>
                        </div>
                        <div className="mt-6"><label htmlFor="subject" className="block text-sm font-medium text-slate-300">Subject</label><input type="text" name="subject" id="subject" defaultValue={contactTarget ? `Message for ${contactTarget.name}` : ''} required className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" /></div>
                        <div className="mt-6"><label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label><textarea id="message" name="message" rows="5" required className="mt-1 block w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"></textarea></div>
                        <div className="mt-8"><button type="submit" className="w-full bg-indigo-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center transform hover:scale-105"><Send className="mr-2 h-5 w-5" /> Send Message</button></div>
                    </form>
                    {status && <p className="mt-6 text-center text-emerald-400">{status}</p>}
                </motion.div>
            </main>
        </motion.div>
    );
};
