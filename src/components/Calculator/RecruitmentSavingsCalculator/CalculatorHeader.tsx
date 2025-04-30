import React from 'react';
import { Calculator } from 'lucide-react';
import LogoIcon from '../../Logo/LogoIcon';

export default function CalculatorHeader() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
        <LogoIcon />
      </div>
      
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
        <Calculator className="w-4 h-4 text-[#FF4D8D] mr-2" />
        <span className="text-sm text-white">ROI Calculator</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Calculate Your Recruitment Savings
      </h2>
      <p className="text-text-body text-lg max-w-2xl mx-auto">
        See how much you can save by automating your recruitment process with ConvoFlow
      </p>
    </div>
  );
}