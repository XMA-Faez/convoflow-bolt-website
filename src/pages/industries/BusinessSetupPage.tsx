import React from 'react';
import { Building, FileCheck, Users, BarChart2, Globe } from 'lucide-react';
import BasePage from './BasePage';
import IndustryHero from '../../components/Industries/IndustryHero';
import IndustryFeatures from '../../components/Industries/IndustryFeatures';
import IndustryCTA from '../../components/Industries/IndustryCTA';
import LeadLossCalculator from '../../components/Calculator/LeadLossCalculator/LeadLossCalculator';

const BUSINESS_SETUP_FEATURES = [
  {
    icon: FileCheck,
    title: 'License Processing',
    description: 'Automated business license application and renewal processing.'
  },
  {
    icon: Users,
    title: 'Stakeholder Management',
    description: 'Streamlined communication with partners, authorities, and clients.'
  },
  {
    icon: Globe,
    title: 'Multi-jurisdiction Support',
    description: 'Handle business setup across multiple regions and jurisdictions.'
  },
  {
    icon: BarChart2,
    title: 'Progress Tracking',
    description: 'Real-time tracking of application status and requirements.'
  }
];

export default function BusinessSetupPage() {
  return (
    <BasePage>
      <IndustryHero
        icon={Building}
        title="Business Setup Solutions"
        description="Streamline company formation and licensing processes with AI-powered automation and expert guidance."
        stats={[
          { label: 'Processing Time', value: '-60%' },
          { label: 'Client Satisfaction', value: '95%' },
          { label: 'Success Rate', value: '99%' }
        ]}
      />
      <LeadLossCalculator />
      <IndustryFeatures 
        features={BUSINESS_SETUP_FEATURES}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
      />
      <IndustryCTA 
        title="Ready to Start Your Business?"
        description="See how ConvoFlow can streamline your business setup process"
      />
    </BasePage>
  );
}