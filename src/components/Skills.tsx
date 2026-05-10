import { motion } from 'motion/react';
import { Cpu, Code2, Database, Terminal, Smartphone, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 92 },
      { name: 'Tailwind CSS', level: 96 },
    ]
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'Authentication', level: 94 },
      { name: 'REST APIs', level: 92 },
      { name: 'Databases', level: 82 },
    ]
  },
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 82 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 78 },
    ]
  },
  {
    title: 'AI & Data',
    icon: Cpu,
    skills: [
      { name: 'AI Frameworks', level: 80 },
      { name: 'ML Basics', level: 75 },
      { name: 'Automation', level: 92 },
      { name: 'Data Handling', level: 85 },
    ]
  },
  {
    title: 'Development',
    icon: Smartphone,
    skills: [
      { name: 'Android Dev', level: 88 },
      { name: 'PC Software', level: 85 },
      { name: 'Full Stack', level: 90 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple mb-4"
          >
            <Terminal className="w-6 h-6" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Core Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] rounded-3xl border border-white/5 p-8 group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-500">{category.title} Proficiency</h4>
                <span className="text-[10px] text-blue-400">Status: Optimal</span>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-gray-300 font-mono">
                      <span>{skill.name.toUpperCase()}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className={`h-full ${i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-indigo-500'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
