import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { pageVariants, pageTransition, stagger, fadeInUp } from '../utils/animations';
import { siteData } from '../utils/data';
import { cn } from '../utils/cn';

// A dedicated, properly styled component for the ORCID icon
const OrcidIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
        <title>ORCID</title>
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM8.22 18.944H6.11v-7.71h2.11v7.71zm-1.055-8.73c-1.214 0-1.98-.766-1.98-1.802s.766-1.802 1.98-1.802 1.98.766 1.98 1.802-.766 1.802-1.98 1.802zm10.235 8.73h-2.11v-4.043c0-.965-.33-1.625-1.213-1.625-.663 0-1.055.446-1.214.88-.056.155-.056.385-.056.616v4.172H9.69s.057-6.98 0-7.71h2.11v1.023c.33-.495.875-1.214 1.924-1.214 1.408 0 2.46 1.023 2.46 3.205v4.696z"/>
    </svg>
);

const MemberCard = ({ member, isLeader = false, onContact }) => (
    <motion.div variants={fadeInUp} className="group w-full max-w-sm">
        <div className="relative bg-slate-900/50 rounded-2xl border border-slate-800 p-6 text-center transition-all duration-500 group-hover:border-indigo-500/50 group-hover:shadow-2xl group-hover:shadow-indigo-900/40 group-hover:-translate-y-2">
            <img src={member.imgSrc} className={cn("w-32 h-32 rounded-full mx-auto border-4 mb-4", isLeader ? "border-indigo-400" : "border-slate-700 group-hover:border-indigo-500 transition-colors")} alt={member.name} />
            <h3 className={cn("font-bold text-white", isLeader ? "text-2xl" : "text-xl")}>{member.name}</h3>
            <p className="text-indigo-400 font-semibold mt-1">{member.role}</p>
            <div className="h-px bg-slate-800 my-4 transition-colors group-hover:bg-indigo-500/50" />
            <p className="text-slate-400 text-sm leading-relaxed mb-4 min-h-[60px]">{member.bio}</p>
            <div className="flex justify-center space-x-4">
                {member.socials.github && <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github /></a>}
                {member.socials.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin /></a>}
                {member.socials.email && <a href="#" onClick={() => onContact(member)} className="text-slate-400 hover:text-white transition-colors"><Mail /></a>}
                {member.socials.orcid && <a href={member.socials.orcid} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><OrcidIcon /></a>}
            </div>
        </div>
    </motion.div>
);

export const TeamPage = ({ onContact }) => {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="bg-black text-white">
            <main className="container mx-auto px-6 py-24 pt-32 min-h-screen">
                <motion.div className="text-center mb-16" variants={stagger} initial="initial" animate="animate">
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold font-display">Meet Our Team</motion.h1>
                    <motion.p variants={fadeInUp} className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">The minds and hands building the future of aerospace.</motion.p>
                </motion.div>
                <motion.div variants={stagger} initial="initial" animate="animate">
                    <motion.section variants={fadeInUp} className="mb-20">
                        <h2 className="text-3xl font-bold text-center text-white mb-10 font-display">Leadership</h2>
                        <div className="flex justify-center">
                            <MemberCard member={siteData.teamMembers.leader} isLeader onContact={onContact} />
                        </div>
                    </motion.section>
                    <motion.section variants={fadeInUp}>
                        <h2 className="text-3xl font-bold text-center text-white mb-10 font-display">Core Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {siteData.teamMembers.core.map((member) => <MemberCard key={member.name} member={member} onContact={onContact} />)}
                        </div>
                    </motion.section>
                </motion.div>
            </main>
        </motion.div>
    );
};
