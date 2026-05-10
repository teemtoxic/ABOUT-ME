import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const stats = [
  { label: 'Projects Completed', value: 35 },
  { label: 'Technologies Learned', value: 15 },
  { label: 'Coding Hours', value: 2500 },
  { label: 'AI Experiments', value: 40 },
  { label: 'Happy Clients', value: 20 },
];

function Counter({ value, label, index }: { value: number, label: string, index: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const step = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  const gradientColors = index % 3 === 0 
    ? 'from-blue-500/20 to-transparent border-blue-500/30' 
    : index % 3 === 1 
      ? 'from-purple-500/20 to-transparent border-purple-500/30'
      : 'from-indigo-500/20 to-transparent border-indigo-500/30';

  const textColors = index % 3 === 0 
    ? 'text-blue-400' 
    : index % 3 === 1 
      ? 'text-purple-400'
      : 'text-indigo-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-6 rounded-2xl border ${gradientColors} bg-gradient-to-br transition-all hover:scale-105`}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {label === 'Coding Hours' ? (count / 1000).toFixed(1) + 'k' : count + (label === 'Education Rank' ? 'th' : '+')}
      </div>
      <div className={`text-[10px] uppercase font-bold tracking-widest ${textColors}`}>
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((stat, i) => (
            <Counter 
              key={stat.label} 
              value={stat.value} 
              label={stat.label} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
