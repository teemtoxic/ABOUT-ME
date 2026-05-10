import { motion } from 'motion/react';
import { User, GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

const personalInfo = [
  { icon: User, label: 'Name', value: 'Anuj Yadav' },
  { icon: Calendar, label: 'Age', value: '19 Years' },
  { icon: MapPin, label: 'Location', value: 'India' },
  { icon: GraduationCap, label: 'Education', value: '12th Pass (College Pending)' },
];

const timeline = [
  { year: '2021', title: 'The Spark', desc: 'Started learning C and C++ out of pure curiosity.' },
  { year: '2022', title: 'Web Development', desc: 'Shifted focus to HTML, CSS, and JS. Built first few static websites.' },
  { year: '2023', title: 'Scaling Up', desc: 'Mastered React and Backend systems. dived into Android and Desktop software.' },
  { year: '2024', title: 'AI & Beyond', desc: 'Integrating AI frameworks and automation into real-world applications.' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue mb-4"
          >
            <User className="w-6 h-6" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              The Journey of a <span className="text-neon-blue">Self-Taught</span> Dev
            </h3>
            
            <p className="text-white/70 mb-8 leading-relaxed">
              I am a driven developer who believes that self-education is the key to mastery. 
              Starting from simple syntax in C to building complex AI ecosystems, my journey 
              has been fueled by passion and persistent problem-solving.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {personalInfo.map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-1">
                    <item.icon className="w-4 h-4 text-neon-blue" />
                    <span className="text-xs text-white/40 uppercase tracking-wider">{item.label}</span>
                  </div>
                  <div className="font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-2 text-white/60">
              <Heart className="w-4 h-4 text-neon-purple" />
              <span>Passionate about AI and Software Development</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Evolution Timeline</h3>
            <div className="space-y-8 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 relative"
                >
                  <div className="w-9 h-9 rounded-full bg-deep-space border-2 border-neon-blue flex items-center justify-center z-10 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-neon-blue pulse" />
                  </div>
                  <div className="glass-card p-6 flex-1 hover:shadow-[0_0_20px_rgba(0,242,255,0.05)] transition-all">
                    <div className="text-neon-blue font-bold text-sm font-mono mb-1">{item.year}</div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
