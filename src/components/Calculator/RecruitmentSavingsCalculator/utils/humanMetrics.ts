import { TIMING } from '../constants/timing';

export function calculateHumanMetrics(
  recruiters: number,
  timePerCall: number,
  hoursPerDay: number
) {
  const callsPerHour = TIMING.MINUTES_PER_HOUR / timePerCall;
  const callsPerDay = callsPerHour * hoursPerDay;
  const callsPerMonth = callsPerDay * TIMING.WORKING_DAYS_PER_MONTH;
  
  return {
    perRecruiter: {
      hourly: callsPerHour,
      daily: callsPerDay,
      monthly: callsPerMonth
    },
    total: {
      hourly: callsPerHour * recruiters,
      daily: callsPerDay * recruiters,
      monthly: callsPerMonth * recruiters
    }
  };
}