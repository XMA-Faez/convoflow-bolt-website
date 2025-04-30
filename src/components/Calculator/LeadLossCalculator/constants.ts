export const CALCULATOR_CONSTANTS = {
  CURRENT_CONVERSION_RATE: 20, // % of leads that currently convert
  OPTIMIZED_CONVERSION_RATE: 70, // % of leads that could convert with optimization
  QUALIFICATION_TIME_RATIO: 3/8, // 3 hours out of 8-hour workday
  DEFAULT_REVENUE_PER_CLIENT: 5000, // Default revenue per client in AED
  WORKING_DAYS_PER_MONTH: 22, // Standard working days
  HOURS_PER_DAY: 13, // 9am to 10pm
  DIALS_PER_HOUR: 100, // Dials per hour for AI
  CONVERSATIONS_PER_HOUR: 20 // Successful conversations per hour for AI
} as const;

export const FORM_FIELDS = [
  {
    id: 'agents',
    label: 'Number of Agents',
    placeholder: 'Enter number of agents',
    min: 1,
    required: true
  },
  {
    id: 'salaryPerAgent',
    label: 'Salary Per Agent (AED)',
    placeholder: 'Enter salary per agent',
    min: 0,
    required: true
  },
  {
    id: 'calls',
    label: 'Calls Per Agent Per Day',
    placeholder: 'Enter number of calls per agent per day',
    min: 1,
    required: true
  },
  {
    id: 'adBudget',
    label: 'Monthly Ad Budget (AED)',
    placeholder: 'Enter ad budget (AED)',
    min: 0,
    required: true
  },
  {
    id: 'leadsMonthly',
    label: 'Average Leads Daily',
    placeholder: 'Enter average daily leads',
    min: 0,
    required: true
  },
  {
    id: 'revenuePerClient',
    label: 'Revenue Per Client (AED)',
    placeholder: 'Enter revenue per client (AED)',
    min: 0,
    required: true,
    defaultValue: CALCULATOR_CONSTANTS.DEFAULT_REVENUE_PER_CLIENT
  }
] as const;