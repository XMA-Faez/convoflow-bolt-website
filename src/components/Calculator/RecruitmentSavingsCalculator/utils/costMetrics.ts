import { PRICING } from '../constants/pricing';

export function calculateCostMetrics(
  timePerCall: number,
  totalCalls: number,
  recruiterSalary: number,
  recruiters: number
) {
  // Bot costs
  const totalMinutes = totalCalls * timePerCall;
  const botCost = totalMinutes * PRICING.COST_PER_MINUTE;
  
  // Human costs
  const recruiterCost = recruiterSalary * recruiters;
  
  // Savings
  const monthlySavings = recruiterCost - botCost;
  
  return {
    bot: {
      totalMinutes,
      monthlyCost: botCost,
      costPerCall: (botCost / totalCalls)
    },
    human: {
      monthlyCost: recruiterCost,
      costPerRecruiter: recruiterSalary
    },
    savings: {
      monthly: monthlySavings,
      annual: monthlySavings * 12
    }
  };
}