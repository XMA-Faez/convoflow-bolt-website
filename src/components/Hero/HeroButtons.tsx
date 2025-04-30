import React from 'react';
import FormButton from '../ui/FormButton';

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-slide-up animation-delay-1500">
      <FormButton 
        size="lg"
        className="min-w-[200px] font-bold tracking-wide hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}