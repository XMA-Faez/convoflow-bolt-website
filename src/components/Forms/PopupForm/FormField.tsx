import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'select';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: Array<{ value: string; label: string; }>;
  required?: boolean;
}

export default function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  options,
  required = true
}: FormFieldProps) {
  const baseClassName = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white mb-1">
        {label}
      </label>
      {type === 'select' ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClassName} placeholder-white/50`}
        >
          <option value="" className="bg-[#1A1A24]">Select your industry</option>
          {options?.map(option => (
            <option 
              key={option.value} 
              value={option.value} 
              className="bg-[#1A1A24]"
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${baseClassName} placeholder-white/50`}
        />
      )}
    </div>
  );
}