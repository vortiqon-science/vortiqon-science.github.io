import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export const GeminiMissionGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // This function converts simple Markdown to HTML for display
    const markdownToHtml = (md) => {
        return md
            .replace(/^### (.*$)/gim, '<h4 class="text-xl font-bold text-indigo-300 mt-6 mb-2">$1</h4>')
            .replace(/^\* (.*$)/gim, '<li>$1</li>')
            .replace(/<\/li>(\s*)<li>/g, '</li><li>') // Combine list items
            .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>') // Wrap list items in <ul>
            .replace(/\n/g, '<br />'); // Convert newlines to breaks for paragraphs
    };
    
    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setError('Please enter a mission idea first.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        try {
            // Send the request to OUR OWN secure serverless function
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt })
            });

            const data = await response.json();

            if (!response.ok) {
                // If the server returned an error, display it
                throw new Error(data.error || 'Something went wrong.');
            }
            
            setResult(markdownToHtml(data.result));

        } catch (err) {
            console.error("Error:", err);
            setError(err.message || "An error occurred. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section variants={fadeInUp}>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display">Mission Idea Generator</h2>
                <p className="text-slate-400 mt-2 max-w-2xl mx-auto">Powered by Google's Gemini API. Have a space mission concept? Let our AI assistant draft a proposal for you.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl shadow-indigo-900/20">
                <textarea 
                    id="mission-prompt" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-md p-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
                    rows="4" 
                    placeholder="e.g., A constellation of CubeSats to provide internet access to remote areas using laser communication..." 
                    value={prompt} 
                    onChange={(e) => setPrompt(e.target.value)} 
                    disabled={isLoading} 
                />
                <button 
                    id="generate-button" 
                    className="mt-4 w-full bg-indigo-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" 
                    onClick={handleGenerate} 
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <motion.div 
                                animate={{ rotate: 360 }} 
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }} 
                                className="mr-3 h-5 w-5 border-t-2 border-r-2 border-white rounded-full" 
                            />
                            Generating...
                        </>
                    ) : (
                        <>
                            <BrainCircuit className="mr-2 h-5 w-5" />
                            Generate Mission Brief
                        </>
                    )}
                </button>
                <AnimatePresence>
                    {(result || error) && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: 10 }} 
                            className="mt-6 p-6 bg-slate-900 border border-slate-700 rounded-md"
                        >
                            {error ? (
                                <p className="text-red-400">{error}</p>
                            ) : (
                                <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: result }} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};
