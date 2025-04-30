import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function FeaturesHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#FF4D8D] mr-2" />
            <span className="text-sm text-white">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-glow">
            Features That Drive Results
          </h1>
          <p className="text-text-body text-lg md:text-xl mb-8">
            Discover how ConvoFlow's AI-powered features transform your sales process and boost revenue
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button variant="secondary" size="lg">View Demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}