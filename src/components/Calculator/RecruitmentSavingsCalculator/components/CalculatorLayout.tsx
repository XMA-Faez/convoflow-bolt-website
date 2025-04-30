import React from 'react';
import type { CalculatorInputs, CalculatorResults } from '../types';

interface CalculatorLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function CalculatorLayout({ children, className = '' }: CalculatorLayoutProps) {
  return (
    <div className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 ${className}`}>
      {children}
    </div>
  );
}

export function CalculatorPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6 p-8 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
      {children}
    </div>
  );
}

export function PanelTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-semibold text-white mb-6">
      {children}
    </h3>
  );
}