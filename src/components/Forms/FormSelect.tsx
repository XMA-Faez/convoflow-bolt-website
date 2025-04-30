import React from 'react';

const INDUSTRY_OPTIONS = [
  { value: 'Business Setup Consultant', label: 'Business Setup Consultant' },
  { value: 'Real-Estate', label: 'Real-Estate' },
  { value: 'Recruitment', label: 'Recruitment' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Insurance', label: 'Insurance' },
  { value: 'Hospitality', label: 'Hospitality' },
  { value: 'Other', label: 'Other' }
];

interface FormSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

export default function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  required = false
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
      >
        <option value="" className="bg-[#1A1A24]">Select your industry</option>
        {INDUSTRY_OPTIONS.map(option => (
          <option 
            key={option.value} 
            value={option.value} 
            className="bg-[#1A1A24]"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}