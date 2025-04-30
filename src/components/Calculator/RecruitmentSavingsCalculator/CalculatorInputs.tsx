import React from 'react';
import type { CalculatorInputs as Inputs } from './types';
import InputField from './components/InputField';
import { PanelTitle } from './components/CalculatorLayout';

const INPUT_FIELDS = [
  {
    name: 'recruiters',
    label: 'Number of Recruiters',
    tooltip: 'Current number of recruiters in your team',
    min: 1,
    max: 100
  },
  {
    name: 'timePerCall',
    label: 'Average Time per Call',
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
    tooltip: 'Monthly salary including benefits',
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

interface InputsProps {
  inputs: Inputs;
  onChange: (name: string, value: number) => void;
}

export default function InputsSection({ inputs, onChange }: InputsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    onChange(e.target.name, value);
  };

  return (
    <div>
      <PanelTitle>Input Parameters</PanelTitle>
      <div className="space-y-8">
        {INPUT_FIELDS.map((field) => (
          <InputField
            key={field.name}
            name={field.name}
            label={field.label}
            tooltip={field.tooltip}
            value={inputs[field.name as keyof Inputs]}
            onChange={handleChange}
            min={field.min}
            max={field.max}
          />
        ))}
      </div>
    </div>
  );
}