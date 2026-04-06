'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Scene2About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);

  // Abstract but visible, vertically stretched constellation
  const nodes = [
    { x: 50, y: 10, delay: 0 },   // top center
    { x: 25, y: 30, delay: 0.1 }, // left upper
    { x: 75, y: 30, delay: 0.2 }, // right upper
    { x: 50, y: 50, delay: 0.3 }, // center
    { x: 15, y: 75, delay: 0.4 }, // bottom left
    { x: 85, y: 75, delay: 0.5 }, // bottom right
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 md:py-28 lg:py-36 px-[5vw]"
    >
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-5xl mx-auto px-[5vw] md:px-10 lg:px-12"
      >

        {/* Constellation */}
        <div className="relative w-full h-60 sm:h-72 md:h-80 mb-8 sm:mb-10 md:mb-12">
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((conn, i) => {
              const from = nodes[conn.from];
              const to = nodes[conn.to];

              return (
                <motion.line
                  key={i}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke="#4D7CFE"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: node.delay }}
              viewport={{ once: true }}
              className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_16px_rgba(77,124,254,0.6)]"
              style={{
                left: `calc(${node.x}% - 8px)`,
                top: `calc(${node.y}% - 8px)`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="text-center flex flex-col items-center justify-center gap-5">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-[0.18em]"
            style={{ fontWeight: 200 }}
          >
            IDENTITY SIGNAL
          </motion.h2>

          {/* About Block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-3xl mx-auto flex flex-col items-center gap-5"
          >

            {/* Name */}
            <p className="text-lg sm:text-xl md:text-2xl tracking-wider text-white">
              Raghavendra Saini
            </p>

            {/* Education */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/60">
              Dual Degree Student (B.Tech + M.Tech) in Information Technology<br />
              IIIT Gwalior · CGPA 8.29
            </p>

            {/* Divider */}
            <div className="h-px w-20 sm:w-24 md:w-28 bg-white/20" />

            {/* Paragraphs */}
            <div className="flex flex-col gap-1">

              <p className="text-base sm:text-lg md:text-xl leading-loose">
                I'm a developer drawn to systems that work quietly, scale seamlessly, and solve real problems.
                I spend most of my time building backend systems and understanding how complex architectures behave under pressure.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-loose text-white/80">
                I'm particularly interested in designing systems that are not just functional, but resilient and thoughtfully engineered.
                What drives me is curiosity — understanding how things work beneath the surface and how they can be improved.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-loose text-white/70">
                Every project I take on is an attempt to push further, learn deeper, and build something more meaningful than the last.
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-loose text-white/50 italic">
                I'm still early in the journey — but I intend to make it count.
              </p>

            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
