import React from 'react';
import { Volume2, Maximize2, Settings } from 'lucide-react';

export default function PlayerControls() {
  return (
    <div className="flex items-center justify-between mb-2">
      {/* Left Controls */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Volume2 className="w-5 h-5 text-white/80" />
          <div className="w-16 h-1 bg-white/20 rounded-full">
            <div className="w-3/4 h-full bg-white/80 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4">
        <Settings className="w-5 h-5 text-white/80" />
        <Maximize2 className="w-5 h-5 text-white/80" />
      </div>
    </div>
  );
}