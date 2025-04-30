import { BOT_CAPACITY } from '../constants/botCapacity';
import { TIMING } from '../constants/timing';

export function calculateBotMetrics(numBots: number) {
  const conversationsPerHour = BOT_CAPACITY.CONVERSATIONS_PER_HOUR;
  const conversationsPerDay = conversationsPerHour * TIMING.HOURS_PER_DAY;
  const conversationsPerMonth = conversationsPerDay * TIMING.WORKING_DAYS_PER_MONTH;
  
  return {
    perBot: {
      hourly: conversationsPerHour,
      daily: conversationsPerDay,
      monthly: conversationsPerMonth
    },
    total: {
      hourly: conversationsPerHour * numBots,
      daily: conversationsPerDay * numBots,
      monthly: conversationsPerMonth * numBots
    }
  };
}