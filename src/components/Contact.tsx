import { motion } from 'motion/react';
import { Send, Github, Linkedin, Instagram, Phone as Whatsapp, Mail, MapPin } from 'lucide-react';

const socials = [
  { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-neon-blue' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-neon-blue' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-neon-purple' },
  { icon: Whatsapp, href: '#', label: 'WhatsApp', color: 'hover:text-green-400' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 mb-4"
          >
            <Mail className="w-6 h-6" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 italic">Get in Touch</h2>
          <p className="text-white/40 max-w-lg">Have a project in mind? Let's build something extraordinary together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center neon-glow-blue animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-neon-blue" />
                </div>
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-8">Contact Info</h3>
              
              <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-neon-blue/20 transition-all">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  <span>anuj.dev@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-green-400/20 transition-all">
                    <Whatsapp className="w-5 h-5 text-green-400" />
                  </div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-neon-purple/20 transition-all">
                    <MapPin className="w-5 h-5 text-neon-purple" />
                  </div>
                  <span>New Delhi, India</span>
                </div>
              </div>

              <div className="mt-12">
                <div className="text-sm font-bold uppercase tracking-widest text-white/30 mb-6">Social Connections</div>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-blue transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your vision..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-neon-blue transition-all resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
