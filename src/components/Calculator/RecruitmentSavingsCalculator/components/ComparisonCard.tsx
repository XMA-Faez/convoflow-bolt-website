import React from 'react';
import type { ComparisonCardProps } from '../types';
import { cn } from '../../../../utils/cn';

export default function ComparisonCard({
  title,
  value1,
  label1,
  value2,
  label2,
  icon: Icon,
  fullWidth = false
}: ComparisonCardProps) {
  return (
    <div className={cn(
      "bg-white/5 rounded-xl p-6 border border-white/10",
      "hover:bg-white/10 transition-colors duration-300",
      fullWidth && "col-span-full"
    )}>
      <div className="flex items-center mb-6">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2 mr-3 
                      shadow-[0_0_15px_rgba(255,77,141,0.3)]">
          <Icon className="h-full w-full text-white" />
        </div>
        <h4 className="text-white font-medium">{title}</h4>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-[#FF4D8D]">{value1}</div>
          <p className="text-text-body text-sm">{label1}</p>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-white">{value2}</div>
          <p className="text-text-body text-sm">{label2}</p>
        </div>
      </div>
    </div>
  );
}