import React from 'react';

interface NumberInputProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  unit?: string;
}

export default function NumberInput({ 
  name, 
  value, 
  onChange, 
  min, 
  max,
  unit 
}: NumberInputProps) {
  return (
    <div className="relative">
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50
                 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {unit && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-text-body text-sm">
          {unit}
        </div>
      )}
    </div>
  );
}