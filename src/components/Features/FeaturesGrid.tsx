import React from 'react';
import { Phone, Link2, BarChart2, MessageSquare } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FEATURES = [
  {
    icon: Phone,
    title: "24/7 AI Calling Agents",
    description: "Automated calling agents that work round the clock to engage with your leads and customers efficiently."
  },
  {
    icon: Link2,
    title: "Seamless CRM Integration",
    description: "Integrate with your existing CRM system to maintain a unified view of all customer interactions."
  },
  {
    icon: BarChart2,
    title: "Real-Time Insights",
    description: "Get detailed analytics and insights about your calls, conversions, and customer engagement metrics."
  },
  {
    icon: MessageSquare,
    title: "Human-Like Conversations",
    description: "Advanced AI technology that creates natural, context-aware conversations with your customers."
  }
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {FEATURES.map((feature) => (
        <FeatureCard
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}