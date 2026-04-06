'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { COLORS } from '@/lib/constants';

interface SkillNode {
  name: string;
  orbit: 1 | 2 | 3 | 4;
  alignedAngle: number;
  color: string;
}

const skills: SkillNode[] = [
  // Orbit 1: 4 skills, 90° spacing
  { name: 'C', orbit: 1, alignedAngle: 0, color: COLORS.ACCENT_BLUE },
  { name: 'C++', orbit: 1, alignedAngle: 90, color: COLORS.ACCENT_BLUE },
  { name: 'JavaScript', orbit: 1, alignedAngle: 180, color: COLORS.ACCENT_BLUE },
  { name: 'Go', orbit: 1, alignedAngle: 270, color: COLORS.ACCENT_BLUE },
  
  // Orbit 2: 6 skills, 60° spacing
  { name: 'Python', orbit: 2, alignedAngle: 0, color: COLORS.ACCENT_BLUE },
  { name: 'Node.js', orbit: 2, alignedAngle: 60, color: COLORS.ACCENT_PURPLE },
  { name: 'Express.js', orbit: 2, alignedAngle: 120, color: COLORS.ACCENT_PURPLE },
  { name: 'Next.js', orbit: 2, alignedAngle: 180, color: COLORS.ACCENT_PURPLE },
  { name: 'React.js', orbit: 2, alignedAngle: 240, color: COLORS.ACCENT_PURPLE },
  { name: 'REST APIs', orbit: 2, alignedAngle: 300, color: COLORS.ACCENT_CYAN },
  
  // Orbit 3: 3 skills, 120° spacing
  { name: 'SQL', orbit: 3, alignedAngle: 0, color: COLORS.ACCENT_CYAN },
  { name: 'MongoDB', orbit: 3, alignedAngle: 120, color: COLORS.ACCENT_CYAN },
  { name: 'PostgreSQL', orbit: 3, alignedAngle: 240, color: COLORS.ACCENT_CYAN },
  
  // Orbit 4: 5 skills, 72° spacing
  { name: 'Git', orbit: 4, alignedAngle: 0, color: COLORS.ACCENT_AMBER },
  { name: 'Linux', orbit: 4, alignedAngle: 72, color: COLORS.ACCENT_AMBER },
  { name: 'VS Code', orbit: 4, alignedAngle: 144, color: COLORS.ACCENT_AMBER },
  { name: 'Arduino IDE', orbit: 4, alignedAngle: 216, color: COLORS.ACCENT_AMBER },
  { name: 'Cisco Packet Tracer', orbit: 4, alignedAngle: 288, color: COLORS.ACCENT_AMBER },
];

export function Scene3Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [isAligned, setIsAligned] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-[5vw] py-20 md:py-24 lg:py-28">
      <motion.div
        style={{ opacity, y }}
        className="w-full max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          style={{ fontWeight: 100, letterSpacing: '0.2em' }}
        >
          ORBITAL SYSTEMS
        </motion.h2>

        {/* Orbital Container */}
        <div className="flex justify-center items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-[5vw]">
          <div 
            className="relative w-full max-w-xl md:max-w-2xl aspect-square cursor-pointer mx-auto"
            style={{ maxWidth: 'min(90vw, 50rem)' }}
            onMouseEnter={() => setIsAligned(true)}
            onMouseLeave={() => setIsAligned(false)}
            onClick={() => setIsAligned(!isAligned)}
          >
            {/* Center Star */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20" />

            {/* Orbital Rings */}
            {[1, 2, 3, 4].map((orbit) => (
              <div
                key={`ring-${orbit}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                style={{
                  width: `${orbit * 22}%`,
                  height: `${orbit * 22}%`,
                }}
              />
            ))}

            {/* Orbiting Skills */}
            {skills.map((skill, i) => {
              const radius = skill.orbit * 11;
              
              return (
                <motion.div
                  key={skill.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: `${radius * 2}%`,
                    height: `${radius * 2}%`,
                    marginLeft: `-${radius}%`,
                    marginTop: `-${radius}%`,
                  }}
                  initial={{ rotate: skill.alignedAngle }}
                  animate={{ 
                    rotate: isAligned ? skill.alignedAngle : skill.alignedAngle + 360
                  }}
                  transition={{
                    duration: isAligned ? 0.8 : 30,
                    repeat: isAligned ? 0 : Infinity,
                    ease: isAligned ? "easeOut" : "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    {/* Planet */}
                    <div className="relative">
                      <div 
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                        style={{
                          backgroundColor: skill.color,
                          boxShadow: `0 0 15px ${skill.color}`,
                        }}
                      />
                    </div>

                    {/* Label */}
                    <motion.div
                      animate={{
                        opacity: isAligned ? 1 : 0,
                        scale: isAligned ? 1 : 0.8,
                        rotate: -skill.alignedAngle,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 pointer-events-none z-10"
                    >
                      <div 
                        className="px-3 py-1.5 rounded bg-black/90 border whitespace-nowrap"
                        style={{
                          borderColor: skill.color,
                          minWidth: 'max-content',
                        }}
                      >
                        <p className="text-xs md:text-sm text-white" style={{ letterSpacing: '0.05em' }}>
                          {skill.name}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs sm:text-sm px-[5vw]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: COLORS.ACCENT_BLUE, boxShadow: `0 0 8px ${COLORS.ACCENT_BLUE}` }} />
            <span className="text-white/70" style={{ letterSpacing: '0.05em' }}>Programming</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: COLORS.ACCENT_PURPLE, boxShadow: `0 0 8px ${COLORS.ACCENT_PURPLE}` }} />
            <span className="text-white/70" style={{ letterSpacing: '0.05em' }}>Frameworks</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: COLORS.ACCENT_CYAN, boxShadow: `0 0 8px ${COLORS.ACCENT_CYAN}` }} />
            <span className="text-white/70" style={{ letterSpacing: '0.05em' }}>Databases</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: COLORS.ACCENT_AMBER, boxShadow: `0 0 8px ${COLORS.ACCENT_AMBER}` }} />
            <span className="text-white/70" style={{ letterSpacing: '0.05em' }}>Tools</span>
          </div>
        </div>

        {/* Instruction */}
        <p className="text-center text-white/40 mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm" style={{ letterSpacing: '0.05em' }}>
          Hover or click to align and reveal all skills
        </p>
      </motion.div>
    </section>
  );
}
