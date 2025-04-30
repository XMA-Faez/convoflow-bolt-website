import { 
  MessageSquare, 
  Users, 
  Headphones, // Changed from HeadphonesMic
  Target, 
  BarChart2, 
  UserCheck, 
  Building2, 
  Briefcase, 
  Phone, 
  Mail 
} from 'lucide-react';

export const DEPARTMENT_ICONS = {
  Building2,
  Headphones,
  Target,
  Briefcase
} as const;

export const FEATURE_ICONS = {
  Phone,
  Mail,
  Users,
  BarChart2,
  UserCheck
} as const;

export const LogoIcon = MessageSquare;