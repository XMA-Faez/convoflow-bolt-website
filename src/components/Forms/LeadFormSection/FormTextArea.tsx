import React from 'react';

interface FormTextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
}

export default function FormTextArea({ id, label, placeholder, rows = 4 }: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
        placeholder={placeholder}
      />
    </div>
  );
}