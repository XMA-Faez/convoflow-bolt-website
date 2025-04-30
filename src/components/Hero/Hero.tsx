import React from 'react';
import HeroBackground from './HeroBackground';
import HeroTitle from './HeroTitle';
import HeroButtons from './HeroButtons';
import HeroDashboard from './HeroDashboard';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 pb-16 px-4 overflow-hidden">
      <HeroBackground />
      
      <div className="relative max-w-7xl mx-auto">
        <HeroTitle />
        <HeroButtons />
        <HeroDashboard />
      </div>
    </section>
  );
}