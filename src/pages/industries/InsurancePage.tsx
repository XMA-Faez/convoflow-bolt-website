import React from 'react';
import { Building2, FileText, Clock, PieChart, MessageCircle } from 'lucide-react';
import IndustryHero from '../../components/Industries/IndustryHero';
import IndustryFeatures from '../../components/Industries/IndustryFeatures';
import IndustryCTA from '../../components/Industries/IndustryCTA';

const INSURANCE_FEATURES = [
  {
    icon: FileText,
    title: 'Claims Processing',
    description: 'Automated claims status updates and processing assistance.'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Instant responses to policy inquiries and coverage questions.'
  },
  {
    icon: PieChart,
    title: 'Risk Assessment',
    description: 'AI-powered risk assessment and policy recommendations.'
  },
  {
    icon: MessageCircle,
    title: 'Policy Support',
    description: '24/7 automated support for policy-related questions.'
  }
];

export default function InsurancePage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <IndustryHero
        icon={Building2}
        title="Insurance Solutions"
        description="Accelerate claims processing and policy inquiries with intelligent automation and quick response times."
        stats={[
          { label: 'Claims Processing', value: '65% Faster' },
          { label: 'Customer Satisfaction', value: '94%' },
          { label: 'Response Time', value: '< 1min' }
        ]}
      />
      <IndustryFeatures 
        features={INSURANCE_FEATURES}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
      />
      <IndustryCTA 
        title="Modernize Your Insurance Operations"
        description="See how ConvoFlow can streamline your insurance processes"
      />
    </div>
  );
}