import { PhoneOutgoing, PhoneIncoming, HeadphonesIcon, Bell, Phone, Mail, Users, BarChart2, UserCheck } from 'lucide-react';
import type { Department, Feature } from './types';

export const SALES_DEPARTMENTS: Department[] = [
  {
    name: 'Inbound Sales',
    icon: PhoneIncoming,
    roles: [
      'Lead Qualification',
      'Product Demos',
      'Deal Closing'
    ],
    position: 'top'
  },
  {
    name: 'Outbound Sales',
    icon: PhoneOutgoing,
    roles: [
      'Cold Calling',
      'Email Campaigns',
      'Territory Management'
    ],
    position: 'right'
  },
  {
    name: 'Customer Service',
    icon: HeadphonesIcon,
    roles: [
      'Support Tickets',
      'Customer Onboarding',
      'Issue Resolution'
    ],
    position: 'bottom'
  },
  {
    name: 'Follow-up & Reminders',
    icon: Bell,
    roles: [
      'Meeting Scheduling',
      'Pipeline Management',
      'Customer Retention'
    ],
    position: 'left'
  }
];

export const FEATURES: Feature[] = [
  { icon: Phone, label: 'Voice AI' },
  { icon: Mail, label: 'Email Automation' },
  { icon: Users, label: 'Team Collaboration' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: UserCheck, label: 'Lead Scoring' }
];