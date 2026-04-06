import { motion } from 'framer-motion';

export function RealisticAstronaut() {
  return (
    <motion.div
      className="relative w-full h-full"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, 0, -3, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        {/* Tether/Safety line */}
        <motion.path
          d="M 100 30 Q 120 -20, 140 -50"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          fill="none"
          animate={{
            d: [
              "M 100 30 Q 120 -20, 140 -50",
              "M 100 30 Q 115 -15, 140 -50",
              "M 100 30 Q 120 -20, 140 -50",
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Backpack/Life Support System */}
        <rect x="75" y="95" width="50" height="60" rx="5" fill="url(#backpackGrad)" />
        <rect x="80" y="100" width="40" height="50" rx="3" fill="#1a1a1a" />
        
        {/* Backpack details */}
        <circle cx="90" cy="115" r="3" fill="#4D7CFE" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="110" cy="115" r="3" fill="#FF2D75" opacity="0.8">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <rect x="85" y="125" width="30" height="2" fill="#FFD6A5" opacity="0.6" />
        <rect x="85" y="130" width="30" height="2" fill="#FFD6A5" opacity="0.6" />
        <rect x="85" y="135" width="30" height="2" fill="#FFD6A5" opacity="0.6" />
        
        {/* Oxygen tanks */}
        <ellipse cx="85" cy="110" rx="6" ry="18" fill="url(#tankGrad)" />
        <ellipse cx="115" cy="110" rx="6" ry="18" fill="url(#tankGrad)" />

        {/* Helmet */}
        <ellipse cx="100" cy="50" rx="32" ry="35" fill="url(#helmetGrad)" />
        <ellipse cx="100" cy="50" rx="30" ry="33" fill="rgba(255,255,255,0.05)" stroke="rgba(77,124,254,0.3)" strokeWidth="2" />
        
        {/* Helmet inner ring */}
        <ellipse cx="100" cy="72" rx="32" ry="8" fill="url(#neckRingGrad)" />
        <ellipse cx="100" cy="72" rx="30" ry="6" fill="#2a2a2a" />

        {/* Visor - large and realistic */}
        <ellipse cx="100" cy="48" rx="22" ry="24" fill="url(#visorGrad)" />
        
        {/* Visor reflections */}
        <ellipse cx="95" cy="42" rx="8" ry="12" fill="rgba(255,255,255,0.4)" opacity="0.6" />
        <ellipse cx="108" cy="50" rx="4" ry="6" fill="rgba(255,255,255,0.3)" opacity="0.5" />
        <path d="M 85 55 Q 90 58, 95 56" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />

        {/* Torso/Suit Body */}
        <rect x="70" y="80" width="60" height="70" rx="8" fill="url(#suitBodyGrad)" />
        <rect x="72" y="82" width="56" height="66" rx="7" fill="url(#suitInnerGrad)" stroke="rgba(77,124,254,0.2)" strokeWidth="1" />
        
        {/* Chest control panel */}
        <rect x="80" y="95" width="40" height="35" rx="4" fill="rgba(0,0,0,0.4)" />
        <rect x="83" y="98" width="34" height="29" rx="2" fill="rgba(20,20,20,0.8)" stroke="rgba(77,124,254,0.3)" strokeWidth="1" />
        
        {/* Control panel details */}
        <rect x="86" y="102" width="10" height="6" rx="1" fill="#4D7CFE" opacity="0.7" />
        <rect x="100" y="102" width="10" height="6" rx="1" fill="#FFD6A5" opacity="0.7" />
        <rect x="86" y="112" width="6" height="3" rx="0.5" fill="#FF2D75" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
        </rect>
        <rect x="95" y="112" width="6" height="3" rx="0.5" fill="#4D7CFE" opacity="0.8" />
        <rect x="104" y="112" width="6" height="3" rx="0.5" fill="#4DFEEF" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.3s" repeatCount="indefinite" />
        </rect>
        
        {/* Display screen */}
        <rect x="86" y="118" width="28" height="6" rx="1" fill="rgba(77,124,254,0.2)" />
        <rect x="87" y="119" width="8" height="4" fill="#4D7CFE" opacity="0.6" />

        {/* Suit panels/sections */}
        <path d="M 100 80 L 100 150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <path d="M 70 115 L 130 115" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        {/* Left Arm */}
        <rect x="40" y="90" width="28" height="55" rx="14" fill="url(#armGrad)" />
        <rect x="42" y="92" width="24" height="51" rx="12" fill="url(#armInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />
        
        {/* Left arm joint/elbow */}
        <ellipse cx="54" cy="120" rx="14" ry="10" fill="rgba(40,40,40,0.8)" />
        <ellipse cx="54" cy="120" rx="11" ry="8" fill="rgba(60,60,60,0.6)" />
        
        {/* Left forearm */}
        <rect x="40" y="130" width="28" height="45" rx="14" fill="url(#armGrad)" />
        <rect x="42" y="132" width="24" height="41" rx="12" fill="url(#armInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />

        {/* Left glove */}
        <ellipse cx="54" cy="175" rx="15" ry="12" fill="url(#gloveGrad)" />
        <ellipse cx="54" cy="175" rx="13" ry="10" fill="rgba(200,200,200,0.3)" />
        
        {/* Left hand fingers */}
        <rect x="50" y="178" width="3" height="8" rx="1.5" fill="rgba(220,220,220,0.4)" />
        <rect x="54" y="180" width="3" height="9" rx="1.5" fill="rgba(220,220,220,0.4)" />
        <rect x="58" y="179" width="3" height="8" rx="1.5" fill="rgba(220,220,220,0.4)" />

        {/* Right Arm */}
        <rect x="132" y="90" width="28" height="55" rx="14" fill="url(#armGrad)" />
        <rect x="134" y="92" width="24" height="51" rx="12" fill="url(#armInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />
        
        {/* Right arm joint/elbow */}
        <ellipse cx="146" cy="120" rx="14" ry="10" fill="rgba(40,40,40,0.8)" />
        <ellipse cx="146" cy="120" rx="11" ry="8" fill="rgba(60,60,60,0.6)" />
        
        {/* Right forearm */}
        <rect x="132" y="130" width="28" height="45" rx="14" fill="url(#armGrad)" />
        <rect x="134" y="132" width="24" height="41" rx="12" fill="url(#armInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />

        {/* Right glove */}
        <ellipse cx="146" cy="175" rx="15" ry="12" fill="url(#gloveGrad)" />
        <ellipse cx="146" cy="175" rx="13" ry="10" fill="rgba(200,200,200,0.3)" />
        
        {/* Right hand fingers */}
        <rect x="139" y="178" width="3" height="8" rx="1.5" fill="rgba(220,220,220,0.4)" />
        <rect x="143" y="180" width="3" height="9" rx="1.5" fill="rgba(220,220,220,0.4)" />
        <rect x="147" y="179" width="3" height="8" rx="1.5" fill="rgba(220,220,220,0.4)" />

        {/* Left Leg */}
        <rect x="75" y="150" width="22" height="65" rx="11" fill="url(#legGrad)" />
        <rect x="77" y="152" width="18" height="61" rx="9" fill="url(#legInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />
        
        {/* Left knee joint */}
        <ellipse cx="86" cy="185" rx="11" ry="9" fill="rgba(40,40,40,0.8)" />
        <ellipse cx="86" cy="185" rx="9" ry="7" fill="rgba(60,60,60,0.6)" />

        {/* Left lower leg */}
        <rect x="75" y="195" width="22" height="50" rx="11" fill="url(#legGrad)" />
        <rect x="77" y="197" width="18" height="46" rx="9" fill="url(#legInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />

        {/* Left boot */}
        <ellipse cx="86" cy="245" rx="14" ry="10" fill="url(#bootGrad)" />
        <ellipse cx="86" cy="250" rx="16" ry="8" fill="#1a1a1a" />
        <rect x="70" y="245" width="32" height="8" rx="4" fill="#0a0a0a" />

        {/* Right Leg */}
        <rect x="103" y="150" width="22" height="65" rx="11" fill="url(#legGrad)" />
        <rect x="105" y="152" width="18" height="61" rx="9" fill="url(#legInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />
        
        {/* Right knee joint */}
        <ellipse cx="114" cy="185" rx="11" ry="9" fill="rgba(40,40,40,0.8)" />
        <ellipse cx="114" cy="185" rx="9" ry="7" fill="rgba(60,60,60,0.6)" />

        {/* Right lower leg */}
        <rect x="103" y="195" width="22" height="50" rx="11" fill="url(#legGrad)" />
        <rect x="105" y="197" width="18" height="46" rx="9" fill="url(#legInnerGrad)" stroke="rgba(77,124,254,0.15)" strokeWidth="1" />

        {/* Right boot */}
        <ellipse cx="114" cy="245" rx="14" ry="10" fill="url(#bootGrad)" />
        <ellipse cx="114" cy="250" rx="16" ry="8" fill="#1a1a1a" />
        <rect x="98" y="245" width="32" height="8" rx="4" fill="#0a0a0a" />

        {/* Belt/waist connector */}
        <rect x="70" y="145" width="60" height="12" rx="6" fill="rgba(40,40,40,0.9)" />
        <rect x="72" y="147" width="56" height="8" rx="4" fill="rgba(60,60,60,0.7)" />
        <circle cx="100" cy="151" r="4" fill="#FFD6A5" opacity="0.7" />

        {/* Gradients and Definitions */}
        <defs>
          {/* Helmet gradient */}
          <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="50%" stopColor="rgba(180,180,180,0.1)" />
            <stop offset="100%" stopColor="rgba(100,100,100,0.05)" />
          </linearGradient>
          
          {/* Visor gradient */}
          <radialGradient id="visorGrad" cx="40%" cy="40%">
            <stop offset="0%" stopColor="rgba(77,124,254,0.4)" />
            <stop offset="50%" stopColor="rgba(20,30,50,0.95)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.98)" />
          </radialGradient>
          
          {/* Neck ring gradient */}
          <linearGradient id="neckRingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(180,180,180,0.6)" />
            <stop offset="100%" stopColor="rgba(80,80,80,0.8)" />
          </linearGradient>
          
          {/* Suit body gradient */}
          <linearGradient id="suitBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(240,240,240,0.25)" />
            <stop offset="100%" stopColor="rgba(140,140,140,0.15)" />
          </linearGradient>
          
          <linearGradient id="suitInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(200,200,200,0.2)" />
            <stop offset="100%" stopColor="rgba(100,100,100,0.1)" />
          </linearGradient>
          
          {/* Arm gradients */}
          <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(220,220,220,0.2)" />
            <stop offset="100%" stopColor="rgba(120,120,120,0.15)" />
          </linearGradient>
          
          <linearGradient id="armInnerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(180,180,180,0.15)" />
            <stop offset="100%" stopColor="rgba(100,100,100,0.1)" />
          </linearGradient>
          
          {/* Leg gradients */}
          <linearGradient id="legGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(220,220,220,0.2)" />
            <stop offset="100%" stopColor="rgba(120,120,120,0.15)" />
          </linearGradient>
          
          <linearGradient id="legInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(180,180,180,0.15)" />
            <stop offset="100%" stopColor="rgba(100,100,100,0.1)" />
          </linearGradient>
          
          {/* Glove gradient */}
          <radialGradient id="gloveGrad">
            <stop offset="0%" stopColor="rgba(240,240,240,0.4)" />
            <stop offset="100%" stopColor="rgba(160,160,160,0.3)" />
          </radialGradient>
          
          {/* Boot gradient */}
          <linearGradient id="bootGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(60,60,60,0.8)" />
            <stop offset="100%" stopColor="rgba(20,20,20,0.9)" />
          </linearGradient>
          
          {/* Backpack gradient */}
          <linearGradient id="backpackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(100,100,100,0.6)" />
            <stop offset="100%" stopColor="rgba(40,40,40,0.8)" />
          </linearGradient>
          
          {/* Tank gradient */}
          <linearGradient id="tankGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(160,160,160,0.7)" />
            <stop offset="50%" stopColor="rgba(200,200,200,0.8)" />
            <stop offset="100%" stopColor="rgba(140,140,140,0.7)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
