import { useState, useMemo } from 'react';
import type { CalculatorInputs, CalculatorResults } from './types';
import { INITIAL_VALUES } from './constants';
import { calculateResults } from './utils/calculations';

const DEFAULT_RESULTS: CalculatorResults = {
  recruiterCallsPerMonth: 0,
  aiCallsPerMonth: 0,
  capacityMultiplier: 0,
  longCalls: 0,
  shortCalls: 0,
  monthlyRecruiterCost: 0,
  monthlyBotCost: 0,
  monthlySavings: 0,
  annualSavings: 0,
  additionalAgentsNeeded: 0,
  hoursSavedPerMonth: 0
};

export function useCalculator() {
  const [inputs, setInputs] = useState<Record<keyof CalculatorInputs, string>>(INITIAL_VALUES);

  const handleInputChange = (name: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [name]: value.toString()
    }));
  };

  const isValid = useMemo(() => {
    return Object.values(inputs).every(value => {
      const num = parseFloat(value);
      return !isNaN(num) && num > 0;
    });
  }, [inputs]);

  const results = useMemo((): CalculatorResults => {
    if (!isValid) return DEFAULT_RESULTS;

    const numericInputs: CalculatorInputs = {
      recruiters: parseInt(inputs.recruiters, 10),
      timePerCall: parseInt(inputs.timePerCall, 10),
      hoursPerDay: parseInt(inputs.hoursPerDay, 10),
      salary: parseInt(inputs.salary, 10),
      bots: parseInt(inputs.bots, 10)
    };

    return calculateResults(numericInputs);
  }, [inputs, isValid]);

  return {
    inputs,
    handleInputChange,
    results,
    isValid
  };
}