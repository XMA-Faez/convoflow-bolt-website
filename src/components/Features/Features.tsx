import React from 'react';
import { BarChart3, MessageSquare, Users, Target, Clock, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your sales performance with real-time analytics and customizable dashboards.'
  },
  {
    icon: MessageSquare,
    title: 'Smart Communication',
    description: 'Keep all your customer conversations organized and accessible in one centralized platform.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members, share insights, and track progress together.'
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set and monitor sales targets with intuitive visualization tools and progress indicators.'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Optimize your workflow with automated scheduling and task management features.'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security ensuring your data is protected with advanced encryption.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-[#0B0B10]" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Key Features To Boost Your Sales Performance
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful tools and features designed to help you manage and grow your business effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              Icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}