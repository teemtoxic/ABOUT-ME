/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyMe from './components/WhyMe';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Services />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
