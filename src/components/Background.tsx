import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-deep-space">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-[-2] opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-loop-render-31557-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Ambient Background Gradients from Theme */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      
      {/* Scanning Decorative Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-30" />
      <div className="absolute left-1/2 bottom-0 w-[1px] h-24 bg-gradient-to-b from-blue-500/30 to-transparent" />
      
      <div className="glow-mesh opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]" />
      
      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full opacity-10"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            scale: Math.random() * 1.5
          }}
          animate={{
            y: [null, '-20%', '120%'],
            opacity: [0, 0.15, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      ))}
    </div>
  );
}
