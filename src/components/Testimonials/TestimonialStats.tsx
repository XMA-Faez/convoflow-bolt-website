import React from 'react';
import { Users, TrendingUp, Clock, Globe } from 'lucide-react';

const STATS = [
  {
    icon: Users,
    value: '500+',
    label: 'Active Customers'
  },
  {
    icon: TrendingUp,
    value: '3x',
    label: 'Average Revenue Growth'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Customer Support'
  },
  {
    icon: Globe,
    value: '20+',
    label: 'Countries Served'
  }
];

export default function TestimonialStats() {
  return (
    <section className="py-16 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-text-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}