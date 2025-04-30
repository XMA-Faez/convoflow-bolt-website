import React from 'react';
import PlayerControls from './PlayerControls';
import PlayerTimeline from './PlayerTimeline';

export default function PlayerFrame() {
  return (
    <div className="aspect-video rounded-xl overflow-hidden relative
                    shadow-[0_0_30px_rgba(255,77,141,0.2)]
                    hover:shadow-[0_0_40px_rgba(255,77,141,0.3)]
                    transition-shadow duration-300">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
          alt="ConvoFlow AI Dashboard"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D8D]/10 to-transparent opacity-30" />
      </div>

      {/* Controls Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-4 px-4">
        <PlayerControls />
        <PlayerTimeline />
      </div>
    </div>
  );
}