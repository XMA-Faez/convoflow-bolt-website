import { PRICING } from '../constants/pricing';
import { TIMING } from '../constants/timing';

export function calculateCosts(
  timePerCall: number,
  totalCalls: number,
) {
  // Calculate total minutes per month
  const totalMinutesPerMonth = totalCalls * timePerCall;
  
  // Calculate cost based on per-minute pricing
  const totalCost = totalMinutesPerMonth * PRICING.COST_PER_MINUTE;

  return totalCost;
}

export function calculateMonthlyCosts(
  recruiters: number,
  salary: number,
  botCallsPerMonth: number,
  timePerCall: number
) {
  const monthlyRecruiterCost = recruiters * salary;
  const monthlyBotCost = calculateCosts(timePerCall, botCallsPerMonth);
  const monthlySavings = monthlyRecruiterCost - monthlyBotCost;

  return {
    monthlyRecruiterCost,
    monthlyBotCost,
    monthlySavings,
    annualSavings: monthlySavings * 12
  };
}