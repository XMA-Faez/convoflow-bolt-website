import React from 'react';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';
import { useLeadLossCalculator } from './useLeadLossCalculator';

export default function LeadLossCalculator() {
  const { results, calculateResults, isValid } = useLeadLossCalculator();

  return (
    <section className="py-16 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Find Out How Much Your <span className="text-[#FF4D8D]">Team</span> is Costing You
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Calculate your potential savings with AI-powered automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalculatorForm onCalculate={calculateResults} />
          <CalculatorResults results={results} isValid={isValid} />
        </div>
      </div>
    </section>
  );
}