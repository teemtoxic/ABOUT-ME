import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';
import { ChevronRight, Download, Send } from 'lucide-react';
import DeveloperLogo from './DeveloperLogo';

const roles = [
  'Frontend Developer',
  'Backend Engineer',
  'AI Framework Builder',
  'React Developer',
  'Android App Developer',
  'PC Software Developer',
  'Authentication Expert',
  'Python Developer',
  'Java Programmer',
  'C / C++ Developer',
];

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] uppercase font-bold tracking-widest mb-6">
            AI Engineering & Software Creation
          </div>
          
          <h1 className="text-6xl md:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-4">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Anuj Yadav</span>
          </h1>
          
          <div className="flex items-center text-xl md:text-2xl font-mono text-gray-400 mb-6 h-12">
            <span className="mr-2">_</span>
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                wrapperClassName: 'text-blue-400',
                cursorClassName: 'text-blue-500 w-0.5 h-6 bg-blue-500 ml-1 animate-pulse'
              }}
            />
          </div>
          
          <p className="text-sm md:text-base text-gray-400 mb-10 max-w-sm leading-relaxed">
            Passionate 19-year-old self-taught developer from India. 
            I architect modern digital experiences, building everything 
            from AI systems to cross-platform software with clinical precision.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-bold text-sm shadow-lg shadow-blue-900/20 transition-all"
            >
              Hire Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-lg font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Resume.pdf
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center h-[500px]"
        >
          <DeveloperLogo />
        </motion.div>
      </div>
    </section>
  );
}
