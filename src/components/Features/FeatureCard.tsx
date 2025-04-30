import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "group p-6 bg-white/5 rounded-xl border border-white/10",
      "transition-all duration-300 hover:scale-[1.02] hover:bg-white/10",
      "hover:shadow-[0_0_30px_rgba(255,77,141,0.2)]",
      className
    )}>
      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 
                    shadow-[0_0_15px_rgba(255,77,141,0.3)] group-hover:shadow-[0_0_25px_rgba(255,77,141,0.4)]
                    transition-shadow duration-300">
        <Icon className="h-full w-full text-white" />
      </div>
      
      <h3 className="mt-4 mb-2 text-lg font-semibold text-white">
        {title}
      </h3>
      
      <p className="text-text-body text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}