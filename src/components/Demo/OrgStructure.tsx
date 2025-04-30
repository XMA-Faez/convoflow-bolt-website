import React from 'react';
import { MessageSquare, Users, Headphones, Target, BarChart2, UserCheck, Building2, Briefcase, Phone, Mail } from 'lucide-react';

const DEPARTMENTS = [
  {
    name: 'Sales Operations',
    icon: Building2,
    roles: ['Sales Manager', 'Account Executive', 'Sales Development'],
    position: 'top'
  },
  {
    name: 'Customer Success',
    icon: Headphones, // Fixed from HeadphonesMic
    roles: ['CS Manager', 'Support Specialist', 'Account Manager'],
    position: 'right'
  },
  {
    name: 'Marketing',
    icon: Target,
    roles: ['Marketing Director', 'Lead Generation', 'Campaign Manager'],
    position: 'bottom'
  },
  {
    name: 'Business Development',
    icon: Briefcase,
    roles: ['BDR Manager', 'Business Analyst', 'Market Research'],
    position: 'left'
  }
];

const CORE_FEATURES = [
  { icon: Phone, label: 'Voice AI' },
  { icon: Mail, label: 'Email Automation' },
  { icon: Users, label: 'Team Collaboration' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: UserCheck, label: 'Lead Scoring' }
];

// Rest of the component remains the same...