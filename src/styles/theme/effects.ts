export const effects = {
  shadows: {
    sm: '0 2px 4px rgba(255, 77, 141, 0.1)',
    md: '0 4px 8px rgba(255, 77, 141, 0.15)',
    lg: '0 8px 16px rgba(255, 77, 141, 0.2)',
    glow: '0 0 20px rgba(255, 77, 141, 0.4)',
  },
  
  glowEffects: {
    primary: 'box-shadow: 0 0 20px rgba(255, 77, 141, 0.4)',
    secondary: 'box-shadow: 0 0 20px rgba(0, 169, 255, 0.4)',
    subtle: 'box-shadow: 0 0 30px rgba(255, 77, 141, 0.15)',
  },
  
  gradientOverlays: {
    primary: 'background: linear-gradient(to right, rgba(255, 77, 141, 0.1), transparent)',
    radial: 'background: radial-gradient(circle at center, rgba(255, 77, 141, 0.1) 0%, transparent 70%)',
    mesh: `
      background-image: 
        linear-gradient(to right, rgba(255, 77, 141, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 77, 141, 0.05) 1px, transparent 1px)
    `,
  },
} as const;