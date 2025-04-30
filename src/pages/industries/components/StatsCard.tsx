import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description: string;
}

export default function StatsCard({ icon: Icon, title, value, description }: StatsCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 mb-4">
        <Icon className="h-full w-full text-white" />
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <div className="text-2xl font-bold text-[#FF4D8D] mb-2">{value}</div>
      <p className="text-text-body text-sm">{description}</p>
    </div>
  );
}