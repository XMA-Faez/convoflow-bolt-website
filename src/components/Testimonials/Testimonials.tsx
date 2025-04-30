import React from 'react';
import TestimonialCard from './TestimonialCard';

interface TestimonialsProps {
  variant?: 'compact' | 'full';
}

const ALL_TESTIMONIALS = [
  {
    name: 'David Chen',
    role: 'VP of Sales',
    company: 'TechScale Solutions',
    testimonial: 'ConvoFlow has revolutionized our lead qualification process. Our sales team now focuses solely on pre-qualified leads, resulting in a 40% increase in conversion rates and 3x faster response times.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    stats: {
      label: 'Increase in Conversion',
      value: '40%'
    }
  },
  {
    name: 'Sarah Martinez',
    role: 'Director of Operations',
    company: 'GlobalTrade Inc',
    testimonial: 'The multi-language support is a game-changer. We\'ve expanded into 5 new markets without hiring additional sales staff. The AI agents handle customer inquiries 24/7 in perfect local languages.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    stats: {
      label: 'New Markets Entered',
      value: '5'
    }
  },
  {
    name: 'Michael Thompson',
    role: 'CEO',
    company: 'Startup Accelerator',
    testimonial: 'As a startup, cost efficiency is crucial. ConvoFlow reduced our customer acquisition costs by 60% while maintaining high-quality conversations. The ROI has been exceptional.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    stats: {
      label: 'Reduced CAC',
      value: '60%'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Sales Director',
    company: 'InnovateX',
    testimonial: 'The AI voice agents sound incredibly natural. Our customers often can\'t tell they\'re talking to an AI. This has helped us scale our outreach while maintaining a personal touch.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    stats: {
      label: 'Customer Satisfaction',
      value: '98%'
    }
  },
  {
    name: 'James Wilson',
    role: 'CTO',
    company: 'DataFlow Systems',
    testimonial: 'Integration with our existing CRM was seamless. The analytics and insights we get from ConvoFlow have helped us optimize our entire sales funnel.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    stats: {
      label: 'Pipeline Efficiency',
      value: '85%'
    }
  }
];

export default function Testimonials({ variant = 'full' }: TestimonialsProps) {
  const testimonials = variant === 'compact' ? ALL_TESTIMONIALS.slice(0, 3) : ALL_TESTIMONIALS;

  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF4D8D]/5 grid-cyberpunk opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            See how businesses are transforming their sales process with ConvoFlow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}