import React from 'react';
import { Volume2, Maximize2, Settings } from 'lucide-react';
import VolumeControl from './VolumeControl';

export default function VideoControls() {
  return (
    <div className="flex items-center justify-between mb-2">
      <VolumeControl />
      
      <div className="flex items-center space-x-4">
        <Settings className="w-5 h-5 text-white/80" />
        <Maximize2 className="w-5 h-5 text-white/80" />
      </div>
    </div>
  );
}