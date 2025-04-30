import { TIMING } from './constants/timing';
import { BOT_CAPACITY } from './constants/botCapacity';

export const INPUT_FIELDS = [
  {
    name: 'recruiters',
    label: 'Number of Recruiters',
    tooltip: 'Current number of recruiters in your team',
    min: 1,
    max: 100
  },
  {
    name: 'timePerCall',
    label: 'Average Time per Call (minutes)',
    tooltip: 'Average duration of screening calls',
    min: 1,
    max: 60
  },
  {
    name: 'hoursPerDay',
    label: 'Hours Spent Calling per Day',
    tooltip: 'Average hours spent on calls per recruiter',
    min: 1,
    max: 12
  },
  {
    name: 'salary',
    label: 'Monthly Salary per Recruiter',
    tooltip: 'Average monthly salary including benefits',
    min: 1000,
    max: 100000
  },
  {
    name: 'bots',
    label: 'Number of ConvoFlow Bots',
    tooltip: 'Number of AI agents you want to deploy',
    min: 1,
    max: 50
  }
] as const;

export const INITIAL_VALUES = {
  recruiters: '',
  timePerCall: '',
  hoursPerDay: '',
  salary: '',
  bots: ''
} as const;

export { TIMING, BOT_CAPACITY };