import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export default function FormInput({ id, label, type = 'text', placeholder }: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
        placeholder={placeholder}
      />
    </div>
  );
}