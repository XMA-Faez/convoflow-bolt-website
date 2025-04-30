import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
}

interface IndustryHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: Stat[];
}

export default function IndustryHero({ icon: Icon, title, description, stats }: IndustryHeroProps) {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-4 mb-6">
            <Icon className="w-full h-full text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            {title}
          </h1>
          <p className="text-text-body text-lg md:text-xl mb-8">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-[#FF4D8D] mb-2">{stat.value}</div>
              <div className="text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}