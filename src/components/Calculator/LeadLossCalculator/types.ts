export interface LeadLossInputs {
  agents: number;
  salaryPerAgent: number;
  calls: number;
  adBudget: number;
  leadsMonthly: number;
  revenuePerClient: number;
  timePerCall?: number;
}

export interface LeadLossResults {
  totalLeads: number;
  interestedLeads: number;
  currentClosures: number;
  optimizedClosures: number;
  leadsLost: number;
  revenueWasted: number;
  salaryWasted: number;
  wastedAdBudget: number;
  recruiterCallsPerMonth: number;
  aiCallsPerMonth: number;
  additionalAgentsNeeded: number;
  hoursSavedPerMonth: number;
  monthlyCost: number;
}