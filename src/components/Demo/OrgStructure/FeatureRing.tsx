import React from 'react';
import { FEATURES } from './constants';
import { calculatePosition } from './utils';

export default function FeatureRing() {
  return (
    <div className="absolute inset-0 animate-spin-slow">
      {FEATURES.map((feature, index) => {
        const { x, y } = calculatePosition(index, FEATURES.length, 120);
        const Icon = feature.icon;

        return (
          <div
            key={feature.label}
            className="absolute bg-white/5 rounded-full p-3 border border-white/10
                     hover:bg-white/10 transition-colors transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Icon className="w-6 h-6 text-[#FF4D8D]" />
          </div>
        );
      })}
    </div>
  );
}