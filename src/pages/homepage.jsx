import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket } from 'lucide-react';

// Import animation settings and components
import { pageVariants, pageTransition, stagger, fadeInUp } from '../utils/animations';
import { Starfield } from '../components/Starfield';
import { GeminiMissionGenerator } from '../components/GeminiMissionGenerator';
import { Tilt } from '../components/Tilt';

// --- Recreated Stats Component ---
const Stats = () => (
    <motion.div 
        variants={fadeInUp} 
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
    >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold">3+</div>
            <div className="text-xs text-gray-400 mt-1">Active Projects</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold">1U</div>
            <div className="text-xs text-gray-400 mt-1">CubeSat in Dev</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold">10k+</div>
            <div className="text-xs text-gray-400 mt-1">Lines of Flight Code</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold">100%</div>
            <div className="text-xs text-gray-400 mt-1">Open Documentation</div>
        </div>
    </motion.div>
);

// --- Recreated Featured Projects Component ---
const FeaturedProjects = ({ onNavigate }) => (
    <motion.section id="projects" variants={fadeInUp}>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-display">Featured Projects</h2>
            <p className="text-gray-400 mt-2">A glimpse into our hands-on work and research.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <a href="#" onClick={() => onNavigate('Projects')} className="group block relative overflow-hidden rounded-lg h-80">
                <img src="https://placehold.co/600x400/111111/FFFFFF?text=CubeSat+Mission+1" className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm" alt="CubeSat Mission 1" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"><h4 className="text-xl font-bold text-white mt-1">CubeSat Mission 1</h4></div>
                    <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out pt-2"><p className="text-gray-300 text-sm">Our flagship project: Designing, building, and testing our first 1U CubeSat from the ground up.</p><span className="font-medium text-indigo-400 mt-2 inline-block">Learn More &rarr;</span></div>
                </div>
            </a>
            {/* Project Card 2 */}
            <a href="#" onClick={() => onNavigate('Projects')} className="group block relative overflow-hidden rounded-lg h-80">
                <img src="https://placehold.co/600x400/111111/FFFFFF?text=Satellite+Refurbishment" className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm" alt="Satellite Refurbishment" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"><h4 className="text-xl font-bold text-white mt-1">Legacy Satellite Refurbishment</h4></div>
                    <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out pt-2"><p className="text-gray-300 text-sm">In collaboration with the KNTU Space Research Lab, we are revitalizing a legacy satellite system.</p><span className="font-medium text-indigo-400 mt-2 inline-block">Learn More &rarr;</span></div>
                </div>
            </a>
            {/* Project Card 3 */}
            <a href="#" onClick={() => onNavigate('Projects')} className="group block relative overflow-hidden rounded-lg h-80">
                <img src="https://placehold.co/600x400/111111/FFFFFF?text=Future+Mission+Concept" className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm" alt="Future Mission" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"><h4 className="text-xl font-bold text-white mt-1">Next-Gen Mission Concept</h4></div>
                    <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out pt-2"><p className="text-gray-300 text-sm">Conceptualizing our next-generation mission, focusing on advanced orbital mechanics.</p><span className="font-medium text-indigo-400 mt-2 inline-block">Learn More &rarr;</span></div>
                </div>
            </a>
        </div>
    </motion.section>
);


export const HomePage = ({ onNavigate }) => (
  <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
    <section id="hero-section" className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-20 overflow-hidden bg-black">
      <Starfield />
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 h-[950px] w-[950px] rounded-full blur-3xl opacity-25" style={{background: 'conic-gradient(from 120deg, rgba(79,70,229,.75), rgba(147,51,234,.5), rgba(34,211,238,.5))'}} />
      <motion.div 
        className="relative container mx-auto px-6 text-center"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>Independent Aerospace Team • KNTU</motion.span>
        <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter"><span className="bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent drop-shadow-lg">Vortiqon Science</span></motion.h1>
        <motion.p variants={fadeInUp} className="mt-5 mx-auto max-w-2xl text-lg md:text-xl text-slate-300">We bridge theory and practice through hands-on aerospace projects and open documentation.</motion.p>
        <motion.div variants={fadeInUp} className="mt-9 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 transform hover:scale-105">Our Mission <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
          <a href="#" onClick={() => onNavigate('Contact')} className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300 transform hover:scale-105">Join Our Team <User className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /></a>
        </motion.div>
        <Stats />
      </motion.div>
    </section>
    <div className="bg-black text-white">
        <motion.main 
            className="container mx-auto px-6 py-24 space-y-32"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.section id="about" variants={fadeInUp}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">About The Team</h2>
                        <p className="text-slate-400 text-lg leading-relaxed">Vortiqon Science is an independent aerospace research team from K. N. Toosi University of Technology. Our mission is to bridge the gap between theory and practice by developing impactful, hands-on aerospace projects. We document our entire journey to educate and inspire the next generation of engineers.</p>
                    </div>
                    <Tilt className="rounded-2xl shadow-2xl shadow-indigo-900/40 transform-style-3d">
                        <img src="https://placehold.co/600x400/111111/FFFFFF?text=Team+in+Action" alt="Vortiqon Science Team" className="w-full h-full object-cover rounded-2xl transform-z-20"/>
                    </Tilt>
                </div>
            </motion.section>
            <FeaturedProjects onNavigate={onNavigate} />
            <GeminiMissionGenerator />
        </motion.main>
    </div>
  </motion.div>
);
