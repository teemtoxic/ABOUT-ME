import { motion } from 'motion/react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
    title: 'AI Chatbot',
    desc: 'Advanced conversational agent with personality and contextual memory.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Gemini API', 'Node.js'],
    github: '#',
    live: '#'
  },
  {
    title: 'Auth System',
    desc: 'Production-ready authentication with JWT, MFA, and role-based access.',
    image: 'https://images.unsplash.com/photo-1555949963-aa291f58a2b7?auto=format&fit=crop&q=80&w=800',
    tech: ['Node.js', 'Redis', 'PostgreSQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'Android Utility App',
    desc: 'System optimization and productivity tool for modern Android devices.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    tech: ['Java', 'Firebase', 'SQLite'],
    github: '#',
    live: '#'
  },
  {
    title: 'Dashboard SDK',
    desc: 'A comprehensive full-stack dashboard with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'D3.js', 'Tailwind'],
    github: '#',
    live: '#'
  },
  {
    title: 'AI Automation Tool',
    desc: 'Workflow automation powered by machine learning for task efficiency.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    tech: ['Python', 'FastAPI', 'PyTorch'],
    github: '#',
    live: '#'
  },
  {
    title: 'Software Tool',
    desc: 'Cross-platform desktop application for file encryption and management.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tech: ['C#', '.NET', 'WPF'],
    github: '#',
    live: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue mb-4"
          >
            <Layers className="w-6 h-6" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden flex flex-col group h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 rounded-full bg-white text-deep-space hover:bg-neon-blue hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="p-3 rounded-full bg-white text-deep-space hover:bg-neon-purple hover:text-white transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded uppercase font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors font-display text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-1 leading-relaxed">{project.desc}</p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-tighter text-white/40">View Project</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
