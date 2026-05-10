import { Rocket, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-deep-space relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Rocket className="text-blue-500 w-5 h-5" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            ANUJ<span className="text-blue-500">.</span>YADAV
          </span>
        </div>

        <div className="text-gray-500 text-[10px] font-bold tracking-tight uppercase">
          © {currentYear} Anuj Yadav <span className="mx-2 opacity-20">|</span> Collaborating with innovators globally
        </div>

        <div className="flex gap-6">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border border-deep-space flex items-center justify-center text-[10px] font-bold text-white">AY</div>
            <div className="w-8 h-8 rounded-full bg-gray-800 border border-deep-space flex items-center justify-center text-[10px] text-gray-400">+5</div>
          </div>
        </div>
      </div>
      
      {/* Scanning Line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}
