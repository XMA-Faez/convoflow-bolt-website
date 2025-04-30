import React from 'react';
import { cn } from '../../utils/cn';

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

export default function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <span className={cn(
      "inline-block bg-clip-text text-transparent py-1 px-[1px]",
      "animate-gradient bg-[length:200%_auto]",
      "bg-gradient-to-r from-white via-[#FF4D8D] to-white",
      "leading-tight",
      className
    )}>
      {text}
    </span>
  );
}