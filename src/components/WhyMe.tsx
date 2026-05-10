import { motion } from 'motion/react';
import { Target, Zap, Lightbulb, Users, BarChart, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Fast Learner',
    desc: 'Adapting to cutting-edge technologies within days, not months.',
    icon: Zap
  },
  {
    title: 'Self-Taught',
    desc: 'Resourceful and highly motivated to solve problems independently.',
    icon: Target
  },
  {
    title: 'Multi-Skilled',
    desc: 'Bridging the gap between design, frontend, and complex backends.',
    icon: Lightbulb
  },
  {
    title: 'Creative Solver',
    desc: 'Thinking outside the box to deliver unique digital experiences.',
    icon: Users
  },
  {
    title: 'AI Enthusiast',
    desc: 'Harnessing machine learning to automate and innovate workflows.',
    icon: Rocket
  },
  {
    title: 'Modern UI/UX',
    desc: 'Deep understanding of what makes a software look premium and feel smooth.',
    icon: BarChart
  },
];

export default function WhyMe() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 italic">Why Work With Me?</h2>
          <p className="text-white/40 max-w-lg">Beyond just code, I bring a vision of futuristic innovation to every project.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 border-white/5 hover:bg-white/[0.08] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-white mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
