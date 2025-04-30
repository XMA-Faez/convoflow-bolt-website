import React from 'react';
import Button from './Button';
import { Calendar } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
}

export default function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/30 via-background-primary to-background-primary" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-text-body text-lg mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg"
            className="inline-flex items-center justify-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}