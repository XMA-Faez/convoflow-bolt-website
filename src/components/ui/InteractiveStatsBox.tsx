import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useForm } from '../../context/FormContext';

interface InteractiveStatsBoxProps {
  icon: LucideIcon;
  stat: string;
  text: string;
  color?: string;
  className?: string;
}

export default function InteractiveStatsBox({
  icon: Icon,
  stat,
  text,
  color = 'from-[#FF4D8D] to-[#E7447F]',
  className
}: InteractiveStatsBoxProps) {
  const { openForm } = useForm();

  return (
    <button
      onClick={openForm}
      className={cn(
        // Base styles
        "w-full text-left",
        "bg-white/5 rounded-xl border border-white/10 p-6",
        // Interactive effects
        "transition-all duration-300 ease-in-out",
        "hover:scale-105 hover:bg-white/10",
        "hover:shadow-[0_10px_30px_-10px_rgba(255,77,141,0.5)]",
        "focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50",
        // Accessibility
        "cursor-pointer",
        className
      )}
      // Accessibility attributes
      role="button"
      tabIndex={0}
      aria-label={`${text}: ${stat}`}
    >
      <div
        className={cn(
          "h-12 w-12 rounded-lg bg-gradient-to-r p-2.5 mb-4",
          "transition-all duration-300",
          "group-hover:shadow-[0_0_20px_rgba(255,77,141,0.4)]",
          color
        )}
      >
        <Icon className="h-full w-full text-white" />
      </div>
      
      <div className="transition-colors duration-300">
        <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#FF4D8D]">
          {stat}
        </div>
        <div className="text-white group-hover:text-[#FF4D8D]">
          {text}
        </div>
      </div>
    </button>
  );
}