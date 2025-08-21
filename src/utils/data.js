// In a real-world application, this data would come from a CMS or an API.
export const siteData = {
  teamMembers: {
    leader: {
      name: 'Ahmadreza Hajitalebi',
      role: 'Team Lead & Founder',
      imgSrc: 'https://placehold.co/200x200/1e1b4b/FFFFFF?text=A.H.',
      bio: 'Aerospace Engineering student with a passion for project management and turning theoretical concepts into practical, high-impact hardware.',
      socials: {
        github: 'https://github.com/ahmadreza-hajtalebi',
        linkedin: '#', // Placeholder
        email: 'ahmadrezahajitalebi@email.com', // Placeholder
        orcid: 'https://orcid.org/0009-0001-6646-1276',
      },
    },
    core: [
      { 
        name: 'Sajjad Zahedi', 
        role: 'CubeSat Lead', 
        imgSrc: 'https://placehold.co/200x200/1e1b4b/FFFFFF?text=S.Z.', 
        bio: 'Senior student and our technical lead for the CubeSat mission, specializing in satellite subsystems and integration.', 
        socials: { 
          github: '#', 
          linkedin: '#',
          email: 's.zahedi@email.com' // Placeholder
        } 
      },
      { 
        name: 'Reza Seraj', 
        role: 'Core Operations & Sub-Team Lead', 
        imgSrc: 'https://placehold.co/200x200/1e1b4b/FFFFFF?text=R.S.', 
        bio: 'The backbone of our team\'s operations, managing resources and leading a dedicated sub-team for project execution.', 
        socials: { 
          github: '#', 
          linkedin: '#',
          email: 'r.seraj@email.com' // Placeholder
        } 
      },
      { 
        name: 'Sepanta Ghasemi', 
        role: 'Sub-Team Lead', 
        imgSrc: 'https://placehold.co/200x200/1e1b4b/FFFFFF?text=S.G.', 
        bio: 'A proactive team member leading one of our specialized sub-teams, focusing on research and development.', 
        socials: { 
          github: '#', 
          linkedin: '#',
          email: 's.ghasemi@email.com' // Placeholder
        } 
      },
    ],
  },
  projects: [
      {
          title: "CubeSat Mission 1",
          status: "In Progress",
          description: "Our flagship initiative is the end-to-end design, manufacturing, and operation of a 1U CubeSat. This project serves as a comprehensive platform for our team to gain hands-on experience in every facet of a space mission, from conceptual design to orbital operations.",
          imgSrc: "https://placehold.co/600x450/0f172a/FFFFFF?text=CubeSat+3D+Model",
          subsystems: ["On-Board Computer (OBC)", "Communication (COMMS)", "Attitude Control (ADCS)", "Electrical Power System (EPS)"],
          timeline: [
              { name: "Phase 1: Conceptual Design", completed: true },
              { name: "Phase 2: Preliminary Design Review", completed: true },
              { name: "Phase 3: Detailed Design & Prototyping", inProgress: true },
              { name: "Phase 4: Integration & Testing" },
              { name: "Target Launch: Q3 2026" },
          ]
      },
      {
          title: "Legacy Satellite Refurbishment",
          status: "Ongoing Collaboration",
          description: "In a unique collaboration with the K. N. Toosi University's Space Research Laboratory (spacerl.com), our team is undertaking the challenge of revitalizing a legacy satellite engineering model. This involves reverse-engineering existing subsystems, upgrading outdated components with modern technology, and developing new software to bring the system back to full operational capability for research and educational purposes.",
          imgSrc: "https://placehold.co/600x450/0f172a/FFFFFF?text=Satellite+Refurb",
          externalLink: "http://spacerl.com/"
      }
  ],
  blogPosts: [
      {
          featured: true,
          category: "Featured Document: Technical Deep-Dive",
          title: "A Deep-Dive into our CubeSat's Attitude Determination and Control System (ADCS)",
          description: "Explore the core algorithms, hardware selection, and simulation results behind the system that keeps our satellite stable and oriented in orbit.",
          author: "Ahmadreza Hajitalebi",
          date: "August 20, 2025",
          imgSrc: "https://placehold.co/800x600/0f172a/FFFFFF?text=ADCS+Analysis",
          link: "#"
      },
      { category: "Project Report", title: "CubeSat PDR Phase Completed", description: "A summary of our Preliminary Design Review, key decisions, and the roadmap towards CDR. [PDF]", imgSrc: "https://placehold.co/600x400/0f172a/FFFFFF?text=PDR+Complete", link: "#" },
      { category: "Presentation", title: "Git & GitHub for Aerospace Teams", description: "How we use version control to manage complex CAD files, simulation code, and documentation. [PPTX]", imgSrc: "https://placehold.co/600x400/0f172a/FFFFFF?text=Git+for+Engineers", link: "#" },
      { category: "Technical Analysis", title: "Power Budgeting for a 1U CubeSat", description: "An analysis of our Electrical Power System design, from solar panel selection to battery management. [PDF]", imgSrc: "https://placehold.co/600x400/0f172a/FFFFFF?text=EPS+Design", link: "#" },
  ],
};
