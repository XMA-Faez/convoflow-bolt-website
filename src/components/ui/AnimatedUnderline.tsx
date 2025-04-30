import React from 'react';
import { cn } from '../../utils/cn';

interface AnimatedUnderlineProps {
  className?: string;
}

export default function AnimatedUnderline({ className }: AnimatedUnderlineProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
      <div className={cn(
        "absolute bottom-0 left-0 w-full h-full",
        "bg-[#FF4D8D] animate-underline",
        className
      )} />
    </div>
  );
}