'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Scene6Achievements() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const achievements = [
    {
      title: '',
      detail: '',
      color: '#4D7CFE', // Blue
      shadowColor: 'rgba(77, 124, 254, 0.6)',
    },
    {
      title: '',
      detail: '',
      color: '#FF6B9D', // Pink
      shadowColor: 'rgba(255, 107, 157, 0.6)',
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 md:py-24 lg:py-32">
      <motion.div style={{ opacity, y }} className="relative z-10 max-w-6xl mx-auto px-[5vw] md:px-10 lg:px-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] text-center"
          style={{ fontWeight: 100, marginBottom: 'clamp(3rem, 6vw, 6rem)' }}
        >
          EXPEDITION HIGHLIGHTS
        </motion.h2>

        {/* Achievement pulses */}
        <div className="flex flex-col md:flex-row items-center justify-center" style={{ gap: 'clamp(4rem, 8vw, 8rem)' }}>
          {achievements.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="relative text-center"
              style={{ maxWidth: '28rem' }}
            >
              {/* Pulsing signal */}
              <div className="relative mx-auto" style={{ width: '8rem', height: '8rem', marginBottom: '2rem' }}>
                {/* Outer pulse ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.6, 1.6],
                    opacity: [0.6, 0, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 rounded-full border-2"
                  style={{ 
                    borderColor: achievement.color,
                    boxShadow: `0 0 20px ${achievement.shadowColor}`,
                  }}
                />
                
                {/* Inner pulse ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1.3],
                    opacity: [0.7, 0, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: 0.8,
                  }}
                  className="absolute inset-0 rounded-full border-2"
                  style={{ 
                    borderColor: achievement.color,
                    boxShadow: `0 0 15px ${achievement.shadowColor}`,
                  }}
                />
                
                {/* Core circle with glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full" 
                  style={{ 
                    backgroundColor: achievement.color,
                    boxShadow: `0 0 40px ${achievement.shadowColor}, inset 0 0 20px rgba(255, 255, 255, 0.2)`,
                  }} 
                />
              </div>

              {/* Text */}
              <h3 className="tracking-wider" style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.25rem)', marginBottom: '0.75rem' }}>
                {achievement.title}
              </h3>
              <p className="tracking-wide text-white/60" style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1rem)' }}>
                {achievement.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
