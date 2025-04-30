import React from 'react';
import { cn } from '../../utils/cn';

interface InteractiveBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function InteractiveBox({ children, className }: InteractiveBoxProps) {
  return (
    <div 
      className={cn(
        // Base styles
        "bg-white/5 rounded-xl border border-white/10",
        // Hover effects
        "transition-all duration-300 ease-in-out",
        "hover:scale-[1.02] hover:bg-white/10",
        "hover:shadow-[0_0_30px_rgba(255,77,141,0.2)]",
        // Maintain spacing
        "transform-gpu will-change-transform",
        className
      )}
    >
      {children}
    </div>
  );
}