import React from 'react';
import { VIDEO_DURATION, PROGRESS_PERCENTAGE } from '../constants';

export default function VideoProgress() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-grow h-1 bg-white/20 rounded-full">
        <div 
          className="relative h-full bg-[#FF4D8D] rounded-full"
          style={{ width: `${PROGRESS_PERCENTAGE}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2
                        w-3 h-3 bg-[#FF4D8D] rounded-full
                        ring-2 ring-white/80" />
        </div>
      </div>
      <span className="text-white/80 text-sm font-medium">{VIDEO_DURATION}</span>
    </div>
  );
}