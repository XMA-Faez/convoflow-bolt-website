import React from 'react';
import { cn } from '../../utils/cn';
import type { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function AnimatedIcon({ icon: Icon, className }: AnimatedIconProps) {
  return (
    <div className={cn(
      "h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5",
      "transition-all duration-300 group-hover:scale-110",
      "shadow-[0_0_15px_rgba(255,77,141,0.3)]",
      "group-hover:shadow-[0_0_25px_rgba(255,77,141,0.4)]",
      className
    )}>
      <Icon className="h-full w-full text-white" />
    </div>
  );
}