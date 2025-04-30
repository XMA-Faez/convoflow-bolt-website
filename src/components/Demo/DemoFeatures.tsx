import React from 'react';

const FEATURES = [
  'Watch real AI conversations in action',
  'See advanced analytics and reporting',
  'Learn about seamless CRM integration',
  'Discover multi-language capabilities'
];

export default function DemoFeatures() {
  return (
    <div className="space-y-6 mb-8">
      {FEATURES.map((feature) => (
        <div key={feature} className="flex items-center">
          <span className="h-5 w-5 rounded-full bg-[#FF4D8D]/20 flex items-center justify-center mr-3">
            <span className="text-[#FF4D8D]">✓</span>
          </span>
          <span className="text-white">{feature}</span>
        </div>
      ))}
    </div>
  );
}