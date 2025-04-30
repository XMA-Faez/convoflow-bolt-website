import React from 'react';
import { Volume2 } from 'lucide-react';

export default function VolumeControl() {
  return (
    <div className="flex items-center space-x-2">
      <Volume2 className="w-5 h-5 text-white/80" />
      <div className="w-16 h-1 bg-white/20 rounded-full">
        <div className="w-3/4 h-full bg-white/80 rounded-full" />
      </div>
    </div>
  );
}