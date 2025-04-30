import React from 'react';
import { cn } from '../../utils/cn';

interface NavButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function NavButton({ className = '', children }: NavButtonProps) {
  return (
    <button 
      className={cn(
        // Base styles
        "px-6 py-2 rounded-lg font-medium transition-all duration-300",
        // Default gradient
        "bg-gradient-to-r from-white to-[#7B7B7B] text-[#0B0B10]",
        // Hover gradient and text color
        "hover:bg-gradient-to-r hover:from-[#FF4D8D] hover:to-[#E7447F] hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}