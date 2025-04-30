import React from 'react';
import { Bot, MessageSquare, BarChart2, Zap, Globe, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FEATURES = [
  {
    icon: Bot,
    title: "AI Voice Agents",
    description: "Human-like conversations that understand context and handle complex interactions naturally."
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "Engage customers across voice, chat, and messaging platforms seamlessly."
  },
  {
    icon: BarChart2,
    title: "Advanced Analytics",
    description: "Real-time insights and detailed reporting on all customer interactions."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline your sales process with intelligent automation and routing."
  },
  {
    icon: Globe,
    title: "Language Support",
    description: "Communicate with customers in 20+ languages with native-level fluency."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with global security standards."
  }
];

export default function FeaturesList() {
  return (
    <section className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Comprehensive features designed to automate and optimize your entire sales process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}