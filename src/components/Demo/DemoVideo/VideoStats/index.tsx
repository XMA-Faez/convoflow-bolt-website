import React from 'react';
import { STATS_DATA } from '../constants';
import StatItem from './StatItem';

export default function VideoStats() {
  return (
    <div className="absolute -bottom-6 left-6 right-6">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20
                    grid grid-cols-3 gap-4 shadow-[0_4px_12px_rgba(255,77,141,0.1)]">
        {STATS_DATA.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}