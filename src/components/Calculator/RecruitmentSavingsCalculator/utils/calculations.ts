import { calculateBotMetrics } from './botMetrics';
import { calculateHumanMetrics } from './humanMetrics';
import type { CalculatorInputs, CalculatorResults } from '../types';

export function calculateResults(inputs: CalculatorInputs): CalculatorResults {
  // Calculate bot and human capacities
  const botMetrics = calculateBotMetrics(inputs.bots);
  const humanMetrics = calculateHumanMetrics(
    inputs.recruiters,
    inputs.timePerCall,
    inputs.hoursPerDay
  );

  // Calculate call distribution
  const totalCalls = botMetrics.total.monthly;
  const longCalls = Math.round(totalCalls * 0.8); // 80% are long calls
  const shortCalls = Math.round(totalCalls * 0.2); // 20% are short calls

  // Calculate additional agents needed
  const additionalAgentsNeeded = Math.ceil(
    (botMetrics.total.monthly - humanMetrics.total.monthly) / 
    humanMetrics.perRecruiter.monthly
  );

  // Calculate time savings
  const hoursSavedPerMonth = (botMetrics.total.monthly - humanMetrics.total.monthly) * 
                            (inputs.timePerCall / 60);

  // Calculate monthly cost
  const monthlyCost = inputs.recruiters * inputs.salary;

  return {
    recruiterCallsPerMonth: Math.round(humanMetrics.total.monthly),
    aiCallsPerMonth: Math.round(botMetrics.total.monthly),
    capacityMultiplier: Math.round(botMetrics.total.monthly / humanMetrics.total.monthly),
    longCalls,
    shortCalls,
    additionalAgentsNeeded,
    hoursSavedPerMonth: Math.round(hoursSavedPerMonth),
    monthlyCost
  };
}