import React from 'react';
import CalculatorHeader from './CalculatorHeader';
import CalculatorInputs from './CalculatorInputs';
import CalculatorResults from './CalculatorResults';
import CalculatorLayout, { CalculatorPanel } from './components/CalculatorLayout';
import { useCalculator } from './useCalculator';

export default function RecruitmentSavingsCalculator() {
  const {
    inputs,
    handleInputChange,
    results,
    isValid
  } = useCalculator();

  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalculatorHeader />
        
        <CalculatorLayout>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <CalculatorPanel>
              <CalculatorInputs 
                inputs={inputs}
                onChange={handleInputChange}
              />
            </CalculatorPanel>
          </div>
          
          <CalculatorPanel>
            <CalculatorResults 
              results={results}
              isValid={isValid}
            />
          </CalculatorPanel>
        </CalculatorLayout>
      </div>
    </section>
  );
}