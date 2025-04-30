import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
  stats: {
    label: string;
    value: string;
  };
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  image,
  stats
}: TestimonialCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-8 border border-white/10 relative group
                    hover:bg-white/10 transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(255,77,141,0.2)]">
      <Quote className="absolute top-6 right-6 h-8 w-8 text-[#FF4D8D] opacity-20" />
      
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover border-2 border-[#FF4D8D]/20"
        />
        <div className="ml-4">
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-text-body text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
      
      <blockquote className="mb-6">
        <p className="text-text-body text-sm leading-relaxed">
          "{testimonial}"
        </p>
      </blockquote>
      
      <div className="pt-6 border-t border-white/10">
        <div className="text-[#FF4D8D] text-2xl font-bold mb-1">
          {stats.value}
        </div>
        <div className="text-text-body text-sm">
          {stats.label}
        </div>
      </div>
    </div>
  );
}