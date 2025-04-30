/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0B0B10',
          card: '#1A1A24',
          overlay: 'rgba(11, 11, 16, 0.8)',
        },
        brand: {
          primary: '#FF4D8D',
          secondary: '#00A9FF',
          dark: '#E7447F',
        },
        text: {
          body: '#B8B8C6',
          subtle: '#8E8E9A',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF4D8D 0%, #E7447F 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FF4D8D 0%, #00A9FF 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(255, 77, 141, 0.1) 0%, rgba(0, 169, 255, 0.1) 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 77, 141, 0.4)',
        'glow-strong': '0 0 30px rgba(255, 77, 141, 0.6)',
        'glow-blue': '0 0 30px rgba(0, 169, 255, 0.3)',
        'hover-glow': '0 10px 30px -10px rgba(255, 77, 141, 0.5)',
      },
      transitionProperty: {
        'hover': 'transform, box-shadow, background-color',
      },
      transitionTimingFunction: {
        'hover': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'hover': '300ms',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      keyframes: {
        // ... (previous keyframes remain the same)
      },
      animation: {
        // ... (previous animations remain the same)
      }
    },
  },
  plugins: [],
};