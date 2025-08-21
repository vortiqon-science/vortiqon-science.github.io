import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, ChevronDown } from 'lucide-react';
import { pageVariants, pageTransition, stagger, fadeInUp } from '../utils/animations';
import { siteData } from '../utils/data';
import { cn } from '../utils/cn';

export const ProjectsPage = () => {
    const [openAccordion, setOpenAccordion] = useState(0);
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="bg-black text-white">
            <main className="container mx-auto px-6 py-24 pt-32 min-h-screen">
                <motion.div 
                    className="text-center mb-16" 
                    variants={stagger} 
                    initial="initial" 
                    animate="animate"
                >
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold font-display">Our Projects</motion.h1>
                    <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Deep dive into the technical challenges we are solving.</motion.p>
                </motion.div>
                <motion.div 
                    className="space-y-6 max-w-4xl mx-auto" 
                    variants={stagger} 
                    initial="initial" 
                    animate="animate"
                >
                    {siteData.projects.map((project, index) => (
                        <motion.div key={project.title} variants={fadeInUp} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                            <button className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800/50 transition-colors" onClick={() => setOpenAccordion(openAccordion === index ? null : index)}>
                                <div><h2 className="text-2xl font-bold text-white">{project.title}</h2><p className="text-indigo-400 font-semibold">{project.status}</p></div>
                                <motion.div animate={{ rotate: openAccordion === index ? 180 : 0 }}><ChevronDown /></motion.div>
                            </button>
                            <AnimatePresence>{openAccordion === index && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                                    <div className="p-6 pt-0"><div className="border-t border-slate-800 pt-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
                                        <div className="lg:col-span-2">
                                            <img src={project.imgSrc} alt={`${project.title} model`} className="rounded-lg w-full mb-8 shadow-lg" />
                                            {project.timeline && (
                                                <>
                                                    <h3 className="text-xl font-bold text-white mb-4">Project Timeline</h3>
                                                    <div className="relative pl-6">
                                                        {/* Vertical line */}
                                                        <div className="absolute left-[3px] top-0 h-full w-0.5 bg-indigo-500/30" />
                                                        <div className="space-y-6">
                                                            {project.timeline.map(item => (
                                                                <div key={item.name} className="relative flex items-center">
                                                                    {/* Dot container */}
                                                                    <div className={cn(
                                                                        "absolute -left-[31px] h-4 w-4 rounded-full border-2 border-indigo-500 bg-slate-900 flex items-center justify-center",
                                                                        item.completed && 'bg-indigo-500'
                                                                    )}>
                                                                        {/* Inner pulsing dot */}
                                                                        {item.inProgress && <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />}
                                                                    </div>
                                                                    <h4 className={cn("font-semibold", item.completed ? 'text-slate-400 line-through' : 'text-white')}>{item.name}</h4>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="lg:col-span-3"><p className="text-slate-300 leading-relaxed mb-8">{project.description}</p>{project.subsystems && (<><h3 className="text-xl font-bold text-white mb-4">Key Subsystems</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">{project.subsystems.map(sub => <div key={sub} className="bg-slate-800 p-3 rounded-lg flex items-center"><Rocket className="h-4 w-4 mr-3 text-indigo-400"/> {sub}</div>)}</div></>)}{project.externalLink ? (<a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-all">Learn More</a>) : (<a href="#" className="mt-8 inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 transition-all">View Technical Docs</a>)}</div>
                                    </div></div>
                                </motion.div>)}</AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </motion.div>
    );
};
