export const BOT_CAPACITY = {
  DIALS_PER_HOUR: 100,          // Total dial attempts per hour
  CONVERSATIONS_PER_HOUR: 20,    // Successful conversations per hour
  SUCCESS_RATE: 0.2             // 20% conversation success rate (20/100 dials)
} as const;