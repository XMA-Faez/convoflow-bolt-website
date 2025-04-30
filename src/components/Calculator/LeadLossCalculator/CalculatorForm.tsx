import React, { useState } from 'react';
import Button from '../../ui/Button';
import type { LeadLossInputs } from './types';
import { FORM_FIELDS } from './constants';

interface CalculatorFormProps {
  onCalculate: (data: LeadLossInputs) => void;
}

export default function CalculatorForm({ onCalculate }: CalculatorFormProps) {
  const [formData, setFormData] = useState<Partial<LeadLossInputs>>({
    revenuePerClient: 5000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      onCalculate(formData as LeadLossInputs);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const isFormValid = () => {
    return FORM_FIELDS.every(field => 
      formData[field.id as keyof LeadLossInputs] !== undefined && 
      formData[field.id as keyof LeadLossInputs]! >= (field.min || 0)
    );
  };

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {FORM_FIELDS.map(field => (
          <div key={field.id}>
            <label className="block text-sm font-medium text-white mb-2">
              {field.label}
            </label>
            <input
              type="number"
              name={field.id}
              value={formData[field.id as keyof LeadLossInputs] || ''}
              onChange={handleChange}
              min={field.min}
              required={field.required}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder={field.placeholder}
            />
          </div>
        ))}

        <Button type="submit" size="lg" className="w-full">
          Calculate Impact
        </Button>
      </form>
    </div>
  );
}