import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition, stagger, fadeInUp } from '../utils/animations';
import { siteData } from '../utils/data';

export const BlogPage = () => {
    const featuredPost = siteData.blogPosts.find(p => p.featured);
    const regularPosts = siteData.blogPosts.filter(p => !p.featured);
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="bg-black text-white">
            <main className="container mx-auto px-6 py-24 pt-32 min-h-screen">
                <motion.div className="text-center mb-16" variants={stagger} initial="initial" animate="animate">
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold font-display">Documents & Insights</motion.h1>
                    <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">An archive of our technical reports, presentations, and analyses.</motion.p>
                </motion.div>
                {/* Added layout prop to the container to fix animation overlap */}
                <motion.section layout variants={stagger} initial="initial" animate="animate" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {featuredPost && 
                        <motion.a layout href={featuredPost.link} target="_blank" rel="noopener noreferrer" variants={fadeInUp} className="lg:col-span-3 group block rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                            <div className="md:flex bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden h-full">
                                <div className="md:w-1/3 overflow-hidden"><img src={featuredPost.imgSrc} className="w-full h-64 md:h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm" alt={featuredPost.title} /></div>
                                <div className="p-8 flex flex-col md:w-2/3">
                                    <p className="text-sm text-indigo-400 font-semibold mb-2">{featuredPost.category}</p>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{featuredPost.title}</h3>
                                    <p className="text-slate-400 mb-6 flex-grow">{featuredPost.description}</p>
                                    <div className="flex items-center text-sm text-slate-500 mt-auto pt-4 border-t border-slate-800"><p>By {featuredPost.author}</p><span className="mx-2">&bull;</span><p>{featuredPost.date}</p></div>
                                </div>
                            </div>
                        </motion.a>
                    }
                    {regularPosts.map((post, index) => 
                        <motion.a layout key={index} href={post.link} target="_blank" rel="noopener noreferrer" variants={fadeInUp} className="group block relative overflow-hidden rounded-2xl h-80 border border-slate-800">
                            <img src={post.imgSrc} className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm" alt={post.title} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <p className="text-sm text-indigo-400 font-semibold">{post.category}</p>
                                    <h4 className="text-xl font-bold text-white mt-1">{post.title}</h4>
                                </div>
                                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out pt-2">
                                    <p className="text-slate-300 text-sm">{post.description}</p>
                                </div>
                            </div>
                        </motion.a>
                    )}
                </motion.section>
            </main>
        </motion.div>
    );
};
