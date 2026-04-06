'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleOffset: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateHeight = () => {
      // Get the actual full scrollable height
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.clientHeight
      );
      setPageHeight(height);
      return height;
    };

    const resize = () => {
      const height = updateHeight();
      canvas.width = window.innerWidth;
      canvas.height = height;
      generateStars(canvas.width, height);
    };
    
    const generateStars = (width: number, height: number) => {
      const stars: Star[] = [];
      const isMobile = width < 768;
      const starCount = isMobile ? 1000 : 2000;

      for (let i = 0; i < starCount; i++) {
        // Varied star sizes: 70% small, 20% medium, 10% large
        const sizeRandom = Math.random();
        let size;
        if (sizeRandom < 0.7) {
          size = Math.random() * 1.2 + 0.8; // Small: 0.8-2px
        } else if (sizeRandom < 0.9) {
          size = Math.random() * 1.5 + 2; // Medium: 2-3.5px
        } else {
          size = Math.random() * 2 + 3.5; // Large: 3.5-5.5px
        }
        
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: size,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
      
      starsRef.current = stars;
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    // Update height periodically for dynamic content
    const heightInterval = setInterval(updateHeight, 2000);

    let lastTime = 0;
    const targetFPS = 15; // Limit to 20 FPS for better performance
    const frameDelay = 1000 / targetFPS;
    let animationFrameId: number;
    
    const render = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime >= frameDelay) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const time = currentTime * 0.001;
        
        // Draw stars with twinkling
        starsRef.current.forEach(star => {
          const twinkle = Math.sin(time * 1.5 + star.twinkleOffset) * 0.3 + 0.7;
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
        
        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(heightInterval);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: `${pageHeight}px` }}>
      {/* Stars canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full opacity-70"
        style={{ height: `${pageHeight}px` }}
      />

      {/* Nebulae distributed throughout using pixel positioning - stronger colors and more nebulae */}
      <div className="absolute top-0 left-0 w-full" style={{ height: `${pageHeight}px` }}>
        {/* Nebula 1 - Top */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: `${pageHeight * 0.05}px`,
            left: '10%',
            background: 'radial-gradient(circle, #4D7CFE 0%, #4D7CFE80 18%, #4D7CFE50 35%, transparent 70%)',
            filter: 'blur(55px)',
            opacity: 0.25,
          }}
        />
        
        {/* Nebula 2 */}
        <div 
          className="absolute w-[600px] h-[400px] rounded-full"
          style={{
            top: `${pageHeight * 0.08}px`,
            right: '15%',
            background: 'radial-gradient(ellipse, #9D7CFE 0%, #9D7CFE70 22%, #9D7CFE45 40%, transparent 70%)',
            filter: 'blur(55px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 3 */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full"
          style={{
            top: `${pageHeight * 0.15}px`,
            left: '60%',
            background: 'radial-gradient(circle, #4DFEEF 0%, #4DFEEF75 20%, #4DFEEF40 38%, transparent 70%)',
            filter: 'blur(52px)',
            opacity: 0.22,
          }}
        />
        
        {/* Nebula 4 */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full"
          style={{
            top: `${pageHeight * 0.18}px`,
            right: '5%',
            background: 'radial-gradient(circle, #FFD6A5 0%, #FFD6A580 20%, #FFD6A555 38%, transparent 70%)',
            filter: 'blur(55px)',
            opacity: 0.24,
          }}
        />
        
        {/* Nebula 5 */}
        <div 
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            top: `${pageHeight * 0.22}px`,
            left: '40%',
            background: 'radial-gradient(circle, #6DFE7C 0%, #6DFE7C70 21%, #6DFE7C45 40%, transparent 70%)',
            filter: 'blur(48px)',
            opacity: 0.21,
          }}
        />
        
        {/* Nebula 6 */}
        <div 
          className="absolute w-[480px] h-[480px] rounded-full"
          style={{
            top: `${pageHeight * 0.28}px`,
            left: '8%',
            background: 'radial-gradient(circle, #FF2D75 0%, #FF2D7578 19%, #FF2D7545 37%, transparent 70%)',
            filter: 'blur(49px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 7 */}
        <div 
          className="absolute w-[550px] h-[550px] rounded-full"
          style={{
            top: `${pageHeight * 0.32}px`,
            left: '20%',
            background: 'radial-gradient(circle, #FF2D75 0%, #FF2D7580 18%, #FF2D7548 36%, transparent 70%)',
            filter: 'blur(50px)',
            opacity: 0.25,
          }}
        />
        
        {/* Nebula 8 */}
        <div 
          className="absolute w-[420px] h-[420px] rounded-full"
          style={{
            top: `${pageHeight * 0.38}px`,
            right: '12%',
            background: 'radial-gradient(circle, #FEA54D 0%, #FEA54D78 20%, #FEA54D48 38%, transparent 70%)',
            filter: 'blur(58px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 9 */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: `${pageHeight * 0.42}px`,
            right: '30%',
            background: 'radial-gradient(circle, #4DFEEF 0%, #4DFEEF78 19%, #4DFEEF45 38%, transparent 70%)',
            filter: 'blur(62px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 10 */}
        <div 
          className="absolute w-[460px] h-[460px] rounded-full"
          style={{
            top: `${pageHeight * 0.48}px`,
            left: '55%',
            background: 'radial-gradient(circle, #9D7CFE 0%, #9D7CFE72 21%, #9D7CFE42 39%, transparent 70%)',
            filter: 'blur(53px)',
            opacity: 0.22,
          }}
        />
        
        {/* Nebula 11 */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            top: `${pageHeight * 0.52}px`,
            left: '50%',
            background: 'radial-gradient(circle, #FEA54D 0%, #FEA54D7A 20%, #FEA54D48 38%, transparent 70%)',
            filter: 'blur(48px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 12 */}
        <div 
          className="absolute w-[520px] h-[520px] rounded-full"
          style={{
            top: `${pageHeight * 0.58}px`,
            left: '15%',
            background: 'radial-gradient(circle, #4D7CFE 0%, #4D7CFE7C 19%, #4D7CFE48 37%, transparent 70%)',
            filter: 'blur(55px)',
            opacity: 0.24,
          }}
        />
        
        {/* Nebula 13 */}
        <div 
          className="absolute w-[480px] h-[480px] rounded-full"
          style={{
            top: `${pageHeight * 0.62}px`,
            right: '10%',
            background: 'radial-gradient(circle, #9D7CFE 0%, #9D7CFE70 21%, #9D7CFE48 40%, transparent 70%)',
            filter: 'blur(49px)',
            opacity: 0.24,
          }}
        />
        
        {/* Nebula 14 */}
        <div 
          className="absolute w-[440px] h-[440px] rounded-full"
          style={{
            top: `${pageHeight * 0.67}px`,
            left: '45%',
            background: 'radial-gradient(circle, #6DFE7C 0%, #6DFE7C75 20%, #6DFE7C45 39%, transparent 70%)',
            filter: 'blur(52px)',
            opacity: 0.22,
          }}
        />
        
        {/* Nebula 15 */}
        <div 
          className="absolute w-[520px] h-[520px] rounded-full"
          style={{
            top: `${pageHeight * 0.70}px`,
            left: '15%',
            background: 'radial-gradient(circle, #4D7CFE 0%, #4D7CFE80 18%, #4D7CFE52 36%, transparent 70%)',
            filter: 'blur(56px)',
            opacity: 0.25,
          }}
        />
        
        {/* Nebula 16 */}
        <div 
          className="absolute w-[490px] h-[490px] rounded-full"
          style={{
            top: `${pageHeight * 0.75}px`,
            right: '20%',
            background: 'radial-gradient(circle, #FFD6A5 0%, #FFD6A57C 19%, #FFD6A550 37%, transparent 70%)',
            filter: 'blur(50px)',
            opacity: 0.24,
          }}
        />
        
        {/* Nebula 17 */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full"
          style={{
            top: `${pageHeight * 0.78}px`,
            right: '25%',
            background: 'radial-gradient(circle, #FF2D75 0%, #FF2D7578 20%, #FF2D7548 38%, transparent 70%)',
            filter: 'blur(47px)',
            opacity: 0.24,
          }}
        />
        
        {/* Nebula 18 */}
        <div 
          className="absolute w-[510px] h-[510px] rounded-full"
          style={{
            top: `${pageHeight * 0.83}px`,
            left: '10%',
            background: 'radial-gradient(circle, #4DFEEF 0%, #4DFEEF7A 19%, #4DFEEF48 37%, transparent 70%)',
            filter: 'blur(49px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 19 */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            top: `${pageHeight * 0.85}px`,
            left: '35%',
            background: 'radial-gradient(circle, #4DFEEF 0%, #4DFEEF7C 19%, #4DFEEF48 38%, transparent 70%)',
            filter: 'blur(53px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 20 */}
        <div 
          className="absolute w-[470px] h-[470px] rounded-full"
          style={{
            top: `${pageHeight * 0.89}px`,
            right: '15%',
            background: 'radial-gradient(circle, #9D7CFE 0%, #9D7CFE76 20%, #9D7CFE46 38%, transparent 70%)',
            filter: 'blur(57px)',
            opacity: 0.23,
          }}
        />
        
        {/* Nebula 21 */}
        <div 
          className="absolute w-[420px] h-[420px] rounded-full"
          style={{
            top: `${pageHeight * 0.92}px`,
            right: '20%',
            background: 'radial-gradient(circle, #FFD6A5 0%, #FFD6A57E 20%, #FFD6A552 38%, transparent 70%)',
            filter: 'blur(48px)',
            opacity: 0.24,
          }}
        />
        
        {/* Nebula 22 - Bottom */}
        <div 
          className="absolute w-[550px] h-[550px] rounded-full"
          style={{
            top: `${pageHeight * 0.96}px`,
            left: '10%',
            background: 'radial-gradient(circle, #6DFE7C 0%, #6DFE7C7A 19%, #6DFE7C48 38%, transparent 70%)',
            filter: 'blur(50px)',
            opacity: 0.25,
          }}
        />
      </div>

      {/* Black holes - original settings */}
      <div className="absolute top-0 left-0 w-full" style={{ height: `${pageHeight}px` }}>
        {/* Black hole 1 */}
        <div className="absolute" style={{ top: `${pageHeight * 0.25}px`, right: '40%' }}>
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full bg-black shadow-[0_0_30px_rgba(0,0,0,0.8)]" />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #FF2D75, #FFD6A5, transparent)',
                opacity: 0.15,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Black hole 2 */}
        <div className="absolute" style={{ top: `${pageHeight * 0.65}px`, left: '60%' }}>
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-black shadow-[0_0_25px_rgba(0,0,0,0.8)]" />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #4D7CFE, #4DFEEF, transparent)',
                opacity: 0.15,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
