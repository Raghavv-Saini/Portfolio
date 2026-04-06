'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Scene1Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Camera push effect: scale from 1 to 1.5
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  
  // Text fade-out: opacity from 1 to 0
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Celestial object opacity
  const celestialOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.1]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden px-[5vw] md:px-10 lg:px-12">
      {/* Large Gradient Celestial Object (Planet/Black Hole) */}
      <motion.div
        style={{ scale, opacity: celestialOpacity }}
        className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full"
      >
        {/* Main gradient sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4D7CFE]/30 via-[#9D7CFE]/20 to-black border border-white/10" />
        
        {/* Accretion disk effects */}
        <div className="absolute inset-0 rounded-full border-4 border-[#4D7CFE]/15 blur-2xl" />
        <div className="absolute inset-10 rounded-full border-2 border-[#FF2D75]/10 blur-xl" />
        <div className="absolute inset-20 rounded-full border border-white/5 blur-lg" />
        
        {/* Inner glow */}
        <div className="absolute inset-32 rounded-full bg-gradient-radial from-[#4D7CFE]/10 to-transparent blur-md" />
      </motion.div>

      {/* Main Text Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 text-center px-[5vw] md:px-10 lg:px-12 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
      >
        {/* Name with reduced letter spacing, staggered animation delay 0.3s */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center w-full"
          style={{ 
            fontWeight: 100,
            letterSpacing: '0.1em',
            textAlign: 'center',
            marginBottom: '0.1rem'
          }}
        >
          RAGHAVENDRA SAINI
        </motion.h1>
        
        {/* Tagline with 0.2em letter spacing, staggered animation delay 0.6s */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.42, 0, 0.58, 1] }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/70 text-center w-full"
          style={{ 
            letterSpacing: '0.2em', 
            textAlign: 'center',
            marginBottom: '0.1rem'
          }}
        >
          Exploring Systems Beyond Code
        </motion.p>
        
        {/* Description with staggered animation delay 0.9s */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9, ease: [0.42, 0, 0.58, 1] }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/50 max-w-2xl mx-auto text-center"
          style={{ letterSpacing: '0.05em', textAlign: 'center' }}
        >
          Building scalable systems, secure APIs, and data-driven platforms
        </motion.p>
      </motion.div>

      {/* Subtle Grid Overlay at 3% Opacity */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} 
        />
      </div>
    </section>
  );
}
