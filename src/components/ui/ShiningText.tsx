import React from 'react';
import { cn } from '../../utils/cn';

interface ShiningTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShiningText({ children, className }: ShiningTextProps) {
  return (
    <span className={cn(
      "inline-block animate-throb transform-gpu",
      className
    )}>
      {children}
    </span>
  );
}