import React from 'react';
import { UtensilsCrossed, Calendar, Star, Globe, MessageSquare } from 'lucide-react';
import IndustryHero from '../../components/Industries/IndustryHero';
import IndustryFeatures from '../../components/Industries/IndustryFeatures';
import IndustryCTA from '../../components/Industries/IndustryCTA';

const HOSPITALITY_FEATURES = [
  {
    icon: Calendar,
    title: 'Booking Management',
    description: 'Automated reservation handling and real-time availability updates.'
  },
  {
    icon: Star,
    title: 'Guest Experience',
    description: 'Personalized guest communications and preference management.'
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Communicate with guests in their preferred language.'
  },
  {
    icon: MessageSquare,
    title: '24/7 Guest Support',
    description: 'Round-the-clock automated assistance for guest inquiries.'
  }
];

export default function HospitalityPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <IndustryHero
        icon={UtensilsCrossed}
        title="Hospitality Solutions"
        description="Deliver exceptional guest experiences with 24/7 booking assistance and personalized recommendations."
        stats={[
          { label: 'Booking Rate', value: '+55%' },
          { label: 'Guest Satisfaction', value: '97%' },
          { label: 'Response Time', value: '< 30s' }
        ]}
      />
      <IndustryFeatures 
        features={HOSPITALITY_FEATURES}
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
      />
      <IndustryCTA 
        title="Elevate Your Guest Experience"
        description="Discover how ConvoFlow can transform your hospitality business"
      />
    </div>
  );
}