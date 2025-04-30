import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ResultCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
}

export default function ResultCard({ icon: Icon, title, value, subtitle }: ResultCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
      <div className="flex items-start">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2 mr-4">
          <Icon className="h-full w-full text-white" />
        </div>
        <div>
          <h4 className="text-white font-medium mb-1">{title}</h4>
          <div className="text-2xl font-bold text-[#FF4D8D] mb-1">{value}</div>
          <p className="text-text-body text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}