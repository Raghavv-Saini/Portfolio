// Star data structure
export interface Star {
  x: number; // X position (0 to canvas.width)
  y: number; // Y position (0 to canvas.height)
  size: number; // Radius in pixels (0.2 to 2.2)
  opacity: number; // Base opacity (0.1 to 0.9)
}

// Celestial object types
export type CelestialType = "nebula" | "blackhole" | "supernova" | "galaxy";

export interface CelestialObject {
  type: CelestialType;
  position: {
    x: string; // Percentage string (e.g., "15%")
    y: string; // Percentage string (e.g., "30%")
  };
  size: {
    width: string; // CSS size (e.g., "500px")
    height: string; // CSS size (e.g., "500px")
  };
  color: string; // Hex color code
  opacity: number; // Base opacity (0 to 1)
  blur: string; // CSS blur value (e.g., "80px")
  rotation?: {
    duration: number; // Animation duration in seconds
    direction: 1 | -1; // 1 for clockwise, -1 for counter-clockwise
  };
  pulse?: {
    scale: [number, number, number]; // Scale keyframes
    opacity: [number, number, number]; // Opacity keyframes
    duration: number; // Animation duration
  };
}

// Skill node data structure
export interface SkillNode {
  name: string; // Skill name
  orbit: 1 | 2 | 3 | 4; // Orbital ring number
  alignedAngle: number; // Angle in degrees when aligned (0-360)
  color: string; // Hex color code for category
}

// Project data structure
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  links?: {
    github?: string;
    live?: string;
  };
}

// Leadership role data structure
export interface LeadershipRole {
  title: string;
  organization: string;
  period?: string;
  description: string;
  highlights: string[];
}

// Achievement data structure
export interface Achievement {
  title: string;
  description?: string;
  date?: string;
  icon?: string;
}

// Form data structure
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormValidation {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

// Animation configuration
export interface ScrollOffset {
  start: string; // e.g., "start end", "start start"
  end: string; // e.g., "end start", "end end"
}

export interface TransformConfig {
  input: number[]; // Input range (scroll progress)
  output: number[]; // Output range (transform value)
}

export interface AnimationTiming {
  duration: number;
  delay?: number;
  ease?: string | number[];
  repeat?: number | typeof Infinity;
}
