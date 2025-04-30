import { useState } from 'react';
import type { LeadLossInputs, LeadLossResults } from './types';
import { CALCULATOR_CONSTANTS } from './constants';

export function useLeadLossCalculator() {
  const [results, setResults] = useState<LeadLossResults | null>(null);
  const [isValid, setIsValid] = useState(false);

  const calculateResults = (data: LeadLossInputs) => {
    // Calculate leads lost based on daily conversion rate difference
    const currentConversions = data.leadsMonthly * (CALCULATOR_CONSTANTS.CURRENT_CONVERSION_RATE / 100);
    const optimizedConversions = data.leadsMonthly * (CALCULATOR_CONSTANTS.OPTIMIZED_CONVERSION_RATE / 100);
    const leadsLost = optimizedConversions - currentConversions;
    
    // Calculate monthly values for other metrics
    const monthlyLeads = data.leadsMonthly * CALCULATOR_CONSTANTS.WORKING_DAYS_PER_MONTH;
    const wastedAdBudget = (data.adBudget / monthlyLeads) * (leadsLost * CALCULATOR_CONSTANTS.WORKING_DAYS_PER_MONTH);
    const revenueWasted = (leadsLost * CALCULATOR_CONSTANTS.WORKING_DAYS_PER_MONTH) * data.revenuePerClient;
    const salaryWasted = data.agents * data.salaryPerAgent * CALCULATOR_CONSTANTS.QUALIFICATION_TIME_RATIO;

    // Calculate AI capacity
    const hoursPerDay = CALCULATOR_CONSTANTS.HOURS_PER_DAY;
    const dialsPerHour = CALCULATOR_CONSTANTS.DIALS_PER_HOUR;
    const conversationsPerHour = CALCULATOR_CONSTANTS.CONVERSATIONS_PER_HOUR;
    
    const aiCallsPerMonth = hoursPerDay * dialsPerHour * CALCULATOR_CONSTANTS.WORKING_DAYS_PER_MONTH;
    const recruiterCallsPerMonth = data.calls * data.agents * CALCULATOR_CONSTANTS.WORKING_DAYS_PER_MONTH;
    
    // Calculate additional agents needed
    const additionalAgentsNeeded = Math.ceil(
      (aiCallsPerMonth - recruiterCallsPerMonth) / 
      (data.calls * CALCULATOR_CONSTANTS.WORKING_DAYS_PER_MONTH)
    );
    
    // Calculate time saved
    const hoursSavedPerMonth = (aiCallsPerMonth - recruiterCallsPerMonth) * (data.timePerCall || 5 / 60);
    
    // Calculate monthly cost
    const monthlyCost = data.agents * data.salaryPerAgent;

    setResults({
      totalLeads: monthlyLeads,
      leadsLost,
      wastedAdBudget,
      revenueWasted,
      salaryWasted,
      recruiterCallsPerMonth,
      aiCallsPerMonth,
      additionalAgentsNeeded,
      hoursSavedPerMonth,
      monthlyCost,
      interestedLeads: 0,
      currentClosures: currentConversions,
      optimizedClosures: optimizedConversions
    });
    setIsValid(true);
  };

  return {
    results,
    calculateResults,
    isValid
  };
}