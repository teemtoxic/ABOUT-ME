import { motion } from 'motion/react';
import { Globe, Server, Code, Bot, Smartphone, Binary, ShieldCheck, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    desc: 'Creating high-performance, responsive websites with modern UI/UX principles.',
    icon: Globe,
    color: 'neon-blue'
  },
  {
    title: 'Full Stack Solutions',
    desc: 'End-to-end applications with complex business logic and real-time features.',
    icon: Server,
    color: 'neon-purple'
  },
  {
    title: 'AI Integration',
    desc: 'Adding intelligent capabilities to your apps using modern AI/ML frameworks.',
    icon: Bot,
    color: 'neon-blue'
  },
  {
    title: 'Android Development',
    desc: 'Native and hybrid mobile applications with smooth performance and clean UI.',
    icon: Smartphone,
    color: 'neon-purple'
  },
  {
    title: 'Backend Systems',
    desc: 'Robust, secure, and scalable backend architectures and API development.',
    icon: Binary,
    color: 'neon-blue'
  },
  {
    title: 'Auth & Security',
    desc: 'Implementing industry-standard authentication and data protection systems.',
    icon: ShieldCheck,
    color: 'neon-purple'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 mb-4"
          >
            <Briefcase className="w-6 h-6" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue via-white to-neon-purple rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className={`p-4 rounded-xl mb-6 bg-white/5 text-blue-400 border border-white/10 inline-block`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display text-white">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] border border-white/10 font-bold text-gray-400">OPTIMIZED</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] border border-white/10 font-bold text-gray-400">READY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
