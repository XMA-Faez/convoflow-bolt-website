import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BENEFITS = [
  '100x Your Outreach',
  'AI-powered sales automation',
  '24/7 lead qualification',
  'Seamless CRM integration',
  'Multi-language support'
];

export default function BenefitsList() {
  return (
    <div className="bg-white/5 rounded-xl border border-white/10 p-6">
      <h3 className="text-xl font-bold text-white mb-4">Why Choose ConvoFlow?</h3>
      <ul className="space-y-4">
        {BENEFITS.map((benefit) => (
          <li key={benefit} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-[#FF4D8D] mr-3 flex-shrink-0" />
            <span className="text-white">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}