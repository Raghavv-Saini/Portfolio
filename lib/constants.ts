// Performance budgets
export const PERFORMANCE = {
  TARGET_FPS_DESKTOP: 60,
  TARGET_FPS_MOBILE: 30,
  MAX_INITIAL_LOAD_TIME: 2000, // ms
  MAX_FCP: 1500, // ms
  MAX_TTI: 3000, // ms
} as const;

// Starfield configuration
export const STARFIELD = {
  STAR_COUNT_DESKTOP: 2000,
  STAR_COUNT_MOBILE: 1000,
  PARALLAX_LAYERS: 3,
  LAYER_SPEEDS: [0.2, 0.5, 0.8],
} as const;

// Color palette
export const COLORS = {
  BACKGROUND: "#000000",
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_SECONDARY: "rgba(255, 255, 255, 0.7)",
  TEXT_TERTIARY: "rgba(255, 255, 255, 0.5)",
  ACCENT_BLUE: "#4D7CFE",
  ACCENT_WARM: "#FFD6A5",
  ACCENT_PINK: "#FF2D75",
  ACCENT_PURPLE: "#9D7CFE",
  ACCENT_CYAN: "#4DFEEF",
  ACCENT_GREEN: "#6DFE7C",
  ACCENT_AMBER: "#FEA54D",
} as const;

// Animation timing
export const TIMING = {
  SCENE_TRANSITION: 1.5,
  STAGGER_DELAY: 0.2,
  HOVER_TRANSITION: 0.3,
  PULSE_DURATION: 2,
} as const;
