import React from 'react';
import { Bot, Zap, DollarSign } from 'lucide-react';
import InteractiveStatsBox from '../ui/InteractiveStatsBox';

const STATS = [
  {
    icon: Bot,
    stat: '90%',
    text: 'Inbound Sales',
    color: 'from-[#FF4D8D] to-[#E7447F]'
  },
  {
    icon: Zap,
    stat: '24/7',
    text: 'Automated Sales Coverage',
    color: 'from-[#FF4D8D] to-[#E7447F]'
  },
  {
    icon: DollarSign,
    stat: '100%',
    text: 'Lead Qualification Rate',
    color: 'from-[#FF4D8D] to-[#E7447F]'
  }
];

export default function DemoStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {STATS.map((item, index) => (
        <div
          key={item.text}
          className="opacity-0 animate-fade-slide-up"
          style={{ animationDelay: `${2000 + index * 200}ms` }}
        >
          <InteractiveStatsBox
            icon={item.icon}
            stat={item.stat}
            text={item.text}
            color={item.color}
          />
        </div>
      ))}
    </div>
  );
}