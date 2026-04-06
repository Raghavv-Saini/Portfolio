'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Scene5Leadership() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const roles = [
    {
      title: 'Executive Member',
      org: 'Student Activity Council (Sports)',
      achievements: [
        'Organized Twaran student sports fest(1500+ participants)',
        'Managed faculty sports meet and logistics',
        'Led Urja intra-college sports fest',
      ],
    },
    {
      title: 'Core Team Member',
      org: 'Infotsav 2025',
      achievements: [
        'Organized hackathons and contests',
        'Managed logistics and hospitality',
        'Hosted events for 800+ participants',
      ],
    },
    {
      title: 'McKinsey Forward Program',
      org: 'Global 10-week Program',
      achievements: [
        'Selected for global program',
        'Focus: problem-solving, communication, adaptability',
      ],
    },
    {
      title: 'HackerRank Certified',
      org: 'Problem Solving Certificate',
      achievements: [
        'Certified in problem-solving skills',
        'Solved 150+ DSA problems',
        'Data structures and algorithms mastery',
      ],
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 md:py-24 lg:py-32">
      <motion.div style={{ opacity, y }} className="relative z-10 max-w-7xl mx-auto px-[5vw] md:px-10 lg:px-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] text-center"
          style={{ fontWeight: 100, marginBottom: 'clamp(3rem, 6vw, 6rem)' }}
        >
          COMMAND LAYER
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
              </div>

              <div className="relative" style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
                <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  <h3 className="tracking-wider text-white" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: 'clamp(0.4rem, 0.8vw, 0.6rem)' }}>
                    {role.title}
                  </h3>
                  <p className="tracking-wide text-[#4D7CFE]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
                    {role.org}
                  </p>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                  {role.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-[#FFD6A5]" style={{ marginRight: 'clamp(0.4rem, 0.8vw, 0.6rem)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>▸</span>
                      <span className="tracking-wide text-white/70" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', lineHeight: '1.5' }}>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
