import type { LucideIcon } from 'lucide-react';

export interface Department {
  name: string;
  icon: LucideIcon;
  roles: string[];
  position: 'top' | 'right' | 'bottom' | 'left';
}

export interface Feature {
  icon: LucideIcon;
  label: string;
}

export interface ConnectionPoint {
  x: number;
  y: number;
  angle: number;
}