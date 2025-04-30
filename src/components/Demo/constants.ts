import { DEPARTMENT_ICONS, FEATURE_ICONS } from './icons';
import type { LucideIcon } from 'lucide-react';

interface Department {
  name: string;
  icon: LucideIcon;
  roles: string[];
  position: 'top' | 'right' | 'bottom' | 'left';
}

interface Feature {
  icon: LucideIcon;
  label: string;
}

export const DEPARTMENTS: Department[] = [
  {
    name: 'Sales Operations',
    icon: DEPARTMENT_ICONS.Building2,
    roles: ['Sales Manager', 'Account Executive', 'Sales Development'],
    position: 'top'
  },
  {
    name: 'Customer Success',
    icon: DEPARTMENT_ICONS.Headphones,
    roles: ['CS Manager', 'Support Specialist', 'Account Manager'],
    position: 'right'
  },
  {
    name: 'Marketing',
    icon: DEPARTMENT_ICONS.Target,
    roles: ['Marketing Director', 'Lead Generation', 'Campaign Manager'],
    position: 'bottom'
  },
  {
    name: 'Business Development',
    icon: DEPARTMENT_ICONS.Briefcase,
    roles: ['BDR Manager', 'Business Analyst', 'Market Research'],
    position: 'left'
  }
];

export const CORE_FEATURES: Feature[] = [
  { icon: FEATURE_ICONS.Phone, label: 'Voice AI' },
  { icon: FEATURE_ICONS.Mail, label: 'Email Automation' },
  { icon: FEATURE_ICONS.Users, label: 'Team Collaboration' },
  { icon: FEATURE_ICONS.BarChart2, label: 'Analytics' },
  { icon: FEATURE_ICONS.UserCheck, label: 'Lead Scoring' }
];