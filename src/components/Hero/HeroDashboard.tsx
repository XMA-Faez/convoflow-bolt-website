import React from 'react';

export default function HeroDashboard() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-glow-strong">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="ConvoFlow Dashboard"
          className="w-full h-auto rounded-2xl"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent opacity-40" />
        
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D8D]/20 to-transparent opacity-30" />
      </div>
    </div>
  );
}