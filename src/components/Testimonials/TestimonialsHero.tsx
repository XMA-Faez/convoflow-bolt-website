import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-[#FF4D8D] mr-2" />
            <span className="text-sm text-white">500+ Happy Customers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Customer Success Stories
          </h1>
          <p className="text-text-body text-lg md:text-xl mb-8">
            See how businesses are transforming their sales operations with ConvoFlow
          </p>
        </div>
      </div>
    </section>
  );
}