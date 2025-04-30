import React from 'react';
import FeaturesGrid from './FeaturesGrid';

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background-primary" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose ConvoFlow?
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Experience the future of customer engagement with our AI-powered calling solution
          </p>
        </div>
        
        <FeaturesGrid />
      </div>
    </section>
  );
}