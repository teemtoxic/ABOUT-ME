import { motion } from 'motion/react';
import { Terminal, Code2, Cpu, Braces } from 'lucide-react';

export default function DeveloperLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Glow */}
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
      
      {/* Outer Rotating Ring */}
      <motion.div
        className="absolute w-72 h-72 rounded-full border-2 border-dashed border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner Pulsing Ring */}
      <motion.div
        className="absolute w-56 h-56 rounded-full border border-purple-500/30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Logo Symbols */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          {/* Main Icon with intense glow */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              filter: [
                'drop-shadow(0 0 20px rgba(59,130,246,0.5))',
                'drop-shadow(0 0 40px rgba(59,130,246,0.8))',
                'drop-shadow(0 0 20px rgba(59,130,246,0.5))'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="w-32 h-32 text-blue-400" />
          </motion.div>
          
          {/* Floating Brackets */}
          <motion.div
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-5xl font-mono text-purple-500/50"
            animate={{ x: [-10, 0, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {"{"}
          </motion.div>
          <motion.div
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-5xl font-mono text-purple-500/50"
            animate={{ x: [10, 0, 10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {"}"}
          </motion.div>
        </div>
      </motion.div>

      {/* Orbiting Icons */}
      {[
        { Icon: Terminal, delay: 0, x: 140, y: 0, color: "text-blue-400" },
        { Icon: Braces, delay: 5, x: -100, y: 100, color: "text-purple-400" },
        { Icon: Cpu, delay: 10, x: 80, y: -120, color: "text-indigo-400" },
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl ${item.color}`}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ 
            x: [item.x, item.x + 10, item.x],
            y: [item.y, item.y - 10, item.y],
            opacity: 1
          }}
          transition={{ 
            duration: 5, 
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <item.Icon className="w-6 h-6" />
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          animate={{
            x: [0, (i % 2 === 0 ? 1 : -1) * 150],
            y: [0, (i < 3 ? 1 : -1) * 150],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
}
