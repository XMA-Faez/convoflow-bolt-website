import React from 'react';
import { Phone, Clock, Users, DollarSign } from 'lucide-react';
import type { CalculatorResults as Results } from './types';
import ResultCard from './components/ResultCard';
import ComparisonCard from './components/ComparisonCard';
import MetricGroup from './components/MetricGroup';
import { PanelTitle } from './components/CalculatorLayout';
import { formatCurrency } from './utils/formatting';

interface ResultsDisplayProps {
  results: Results;
  isValid: boolean;
}

export default function ResultsDisplay({ results, isValid }: ResultsDisplayProps) {
  if (!isValid) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-text-body text-center text-lg">
          Enter your values above to see potential savings
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <PanelTitle>Call Volume Analysis</PanelTitle>
        <div className="space-y-6">
          <ComparisonCard
            icon={Phone}
            title="Monthly Calls"
            value1={results.recruiterCallsPerMonth.toLocaleString()}
            label1="Current Team"
            value2={results.aiCallsPerMonth.toLocaleString()}
            label2="With ConvoFlow"
          />
          
          <MetricGroup
            title="Call Distribution"
            metrics={[
              {
                label: "Long Calls (>3 min)",
                value: results.longCalls.toLocaleString()
              },
              {
                label: "Short Calls (≤3 min)",
                value: results.shortCalls.toLocaleString()
              }
            ]}
          />
        </div>
      </div>

      <div>
        <PanelTitle>Operational Impact</PanelTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResultCard
            icon={Users}
            title="Additional Agents Required"
            value={results.additionalAgentsNeeded.toString()}
            subtitle="To match ConvoFlow capacity"
          />
          <ResultCard
            icon={Clock}
            title="Time Saved"
            value={`${Math.round(results.hoursSavedPerMonth / 8)} days`}
            subtitle="Per month"
          />
          <ResultCard
            icon={DollarSign}
            title="Monthly Cost"
            value={formatCurrency(results.monthlyCost)}
            subtitle="Current team expenses"
          />
        </div>
      </div>
    </div>
  );
}