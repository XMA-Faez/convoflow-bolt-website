import { TIMING } from '../constants/timing';

export function calculateHumanCapacity(
  timePerCall: number,
  hoursPerDay: number,
  recruiters: number
) {
  const callsPerHourPerHuman = TIMING.MINUTES_PER_HOUR / timePerCall;
  const callsPerDayPerHuman = callsPerHourPerHuman * hoursPerDay;
  const callsPerMonthPerHuman = callsPerDayPerHuman * TIMING.WORKING_DAYS_PER_MONTH;
  const totalHumanCallsPerMonth = callsPerMonthPerHuman * recruiters;

  return {
    callsPerHour: callsPerHourPerHuman,
    callsPerDay: callsPerDayPerHuman,
    callsPerMonth: totalHumanCallsPerMonth
  };
}

export function calculateBotCapacity(
  timePerCall: number,
  numBots: number
) {
  const callsPerHourPerBot = (TIMING.MINUTES_PER_HOUR / timePerCall) * TIMING.BOT_EFFICIENCY_MULTIPLIER;
  const callsPerDayPerBot = callsPerHourPerBot * TIMING.HOURS_PER_DAY; // Bots work 24/7
  const callsPerMonthPerBot = callsPerDayPerBot * TIMING.DAYS_PER_MONTH;
  const totalBotCallsPerMonth = callsPerMonthPerBot * numBots;

  return {
    callsPerHour: callsPerHourPerBot,
    callsPerDay: callsPerDayPerBot,
    callsPerMonth: totalBotCallsPerMonth
  };
}