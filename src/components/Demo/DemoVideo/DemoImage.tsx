import React from 'react';

export default function DemoImage() {
  return (
    <div className="aspect-video rounded-xl overflow-hidden 
                  shadow-[0_0_30px_rgba(255,77,141,0.2)]
                  hover:shadow-[0_0_40px_rgba(255,77,141,0.3)]
                  transition-shadow duration-300">
      <div className="relative w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
          alt="ConvoFlow AI Dashboard"
          className="w-full h-full object-cover"
        />
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D8D]/10 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/5 via-transparent to-transparent" />
      </div>
    </div>
  );
}