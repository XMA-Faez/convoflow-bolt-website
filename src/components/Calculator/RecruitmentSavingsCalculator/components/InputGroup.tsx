import React from 'react';
import { Info } from 'lucide-react';

interface InputGroupProps {
  label: string;
  tooltip: string;
  children: React.ReactNode;
}

export default function InputGroup({ label, tooltip, children }: InputGroupProps) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <label className="text-white text-sm font-medium">
          {label}
        </label>
        <div className="group relative">
          <Info className="w-4 h-4 text-[#FF4D8D] cursor-help" />
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-[#FF4D8D] text-white text-xs rounded-lg 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
                        shadow-lg z-10">
            {tooltip}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}