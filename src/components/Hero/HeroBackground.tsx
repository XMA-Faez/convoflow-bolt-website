import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,141,0.1),transparent_70%)]" />
    </div>
  );
}