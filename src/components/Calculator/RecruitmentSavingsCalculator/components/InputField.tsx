import React from 'react';
import type { CalculatorInputs } from '../types';
import InputGroup from './InputGroup';
import NumberInput from './NumberInput';

interface InputFieldProps {
  name: keyof CalculatorInputs;
  label: string;
  tooltip: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
}

export default function InputField({ 
  name, 
  label, 
  tooltip, 
  value, 
  onChange,
  min,
  max 
}: InputFieldProps) {
  const getUnit = () => {
    switch (name) {
      case 'salary': return 'AED';
      case 'timePerCall': return 'min';
      case 'hoursPerDay': return 'hrs';
      default: return undefined;
    }
  };

  return (
    <div className="bg-white/[0.02] rounded-lg p-4 hover:bg-white/[0.04] transition-colors">
      <InputGroup label={label} tooltip={tooltip}>
        <NumberInput
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          unit={getUnit()}
        />
      </InputGroup>
    </div>
  );
}