import React from 'react';
import { Star } from 'lucide-react';
import CalendlyEmbed from '../Calendly/CalendlyEmbed';
import { CALENDLY_CONFIG } from '../../config/calendly';

export default function CalendlyFormSection() {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-[#FF4D8D] mr-2" />
            <span className="text-sm text-white">Book In a Meeting</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Schedule a personalized demo with our product experts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <CalendlyEmbed 
            url={CALENDLY_CONFIG.DEMO_URL}
            className="shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}