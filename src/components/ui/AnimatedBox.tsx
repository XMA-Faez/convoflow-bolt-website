import React from 'react';
import { cn } from '../../utils/cn';

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedBox({ children, className, onClick }: AnimatedBoxProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        // Base styles
        "bg-white/5 rounded-xl border border-white/10 p-6",
        // Hover animations
        "transition-all duration-300 ease-in-out",
        "hover:-translate-y-2",
        "hover:shadow-[0_10px_20px_rgba(255,77,141,0.15)]",
        "hover:bg-white/10",
        // Cursor
        onClick && "cursor-pointer",
        // Additional classes
        className
      )}
    >
      {children}
    </div>
  );
}