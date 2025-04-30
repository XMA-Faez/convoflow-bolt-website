import React from 'react';

const STATS = [
  { label: 'Lead Conversion', value: '+75%' },
  { label: 'Response Time', value: '< 30s' },
  { label: 'Customer Satisfaction', value: '99%' }
];

export default function DemoStats() {
  return (
    <div className="absolute -bottom-6 left-6 right-6">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20
                    grid grid-cols-3 gap-4 shadow-[0_4px_12px_rgba(255,77,141,0.1)]">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-[#FF4D8D] font-bold text-lg md:text-xl">{stat.value}</div>
            <div className="text-text-body text-xs md:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}