import React from 'react';

export default function PlayerTimeline() {
  return (
    <div className="flex items-center space-x-2">
      {/* Timeline Bar */}
      <div className="flex-grow h-1 bg-white/20 rounded-full">
        <div className="relative w-1/3 h-full bg-[#FF4D8D] rounded-full">
          {/* Timeline Marker */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2
                        w-3 h-3 bg-[#FF4D8D] rounded-full
                        ring-2 ring-white/80" />
        </div>
      </div>

      {/* Duration */}
      <span className="text-white/80 text-sm font-medium">2:45</span>
    </div>
  );
}