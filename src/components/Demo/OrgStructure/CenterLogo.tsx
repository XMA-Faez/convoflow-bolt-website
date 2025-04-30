import React from 'react';
import { Building } from 'lucide-react';

export default function CenterLogo() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-32 h-32 bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] rounded-2xl
                  flex flex-col items-center justify-center gap-2
                  shadow-[0_0_30px_rgba(255,77,141,0.4)]">
      <Building className="w-12 h-12 text-white" />
      <span className="text-white font-bold text-sm">Sales Hub</span>
    </div>
  );
}