export interface CalculatorInputs {
  recruiters: number;
  timePerCall: number;
  hoursPerDay: number;
  salary: number;  // Added salary field
  bots: number;
}

export interface CalculatorResults {
  // Capacity Metrics
  recruiterCallsPerMonth: number;
  aiCallsPerMonth: number;
  capacityMultiplier: number;
  
  // Call Distribution
  longCalls: number;
  shortCalls: number;
  
  // Team Impact
  additionalAgentsNeeded: number;
  hoursSavedPerMonth: number;
  
  // Cost Impact
  monthlyCost: number;
}