export const colors = {
  // Base Colors
  background: {
    primary: '#0B0B10',    // Deep black base
    card: '#1A1A24',       // Slightly lighter for cards/surfaces
    overlay: 'rgba(11, 11, 16, 0.8)',
  },
  
  // Brand Colors
  brand: {
    primary: '#FF4D8D',    // Main brand color (pink)
    secondary: '#00A9FF',  // Electric blue for accents
    dark: '#E7447F',       // Darker pink for gradients/hover
  },
  
  // Text Colors
  text: {
    primary: '#FFFFFF',    // Pure white for headlines
    body: '#B8B8C6',       // Light gray for body text
    subtle: '#8E8E9A',     // Muted text for less emphasis
  },
  
  // Status Colors
  status: {
    success: '#4CAF50',
    warning: '#FFC107',
    error: '#FF5252',
    info: '#00A9FF',
  },
  
  // Gradient Definitions
  gradients: {
    primary: 'linear-gradient(135deg, #FF4D8D 0%, #E7447F 100%)',
    accent: 'linear-gradient(135deg, #FF4D8D 0%, #00A9FF 100%)',
    overlay: 'linear-gradient(180deg, rgba(255, 77, 141, 0.1) 0%, rgba(0, 169, 255, 0.1) 100%)',
  },
} as const;

// Opacity variants for UI elements
export const alphaColors = {
  hover: 'rgba(255, 77, 141, 0.1)',
  active: 'rgba(255, 77, 141, 0.2)',
  disabled: 'rgba(255, 255, 255, 0.3)',
  overlay: 'rgba(11, 11, 16, 0.8)',
} as const;

// Color combinations for specific UI patterns
export const colorPatterns = {
  card: {
    background: colors.background.card,
    border: 'rgba(255, 77, 141, 0.1)',
    hoverBg: 'rgba(255, 77, 141, 0.05)',
  },
  button: {
    primary: {
      background: colors.brand.primary,
      hover: colors.brand.dark,
      text: colors.text.primary,
    },
    secondary: {
      background: 'transparent',
      border: colors.brand.primary,
      text: colors.text.primary,
      hover: alphaColors.hover,
    },
  },
} as const;