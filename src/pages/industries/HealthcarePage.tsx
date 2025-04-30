import React from 'react';
import { Heart, Calendar, ClipboardCheck, Shield, MessageSquare } from 'lucide-react';
import BasePage from './BasePage';
import IndustryHero from '../../components/Industries/IndustryHero';
import IndustryFeatures from '../../components/Industries/IndustryFeatures';
import IndustryCTA from '../../components/Industries/IndustryCTA';

const HEALTHCARE_FEATURES = [
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Automated scheduling and reminders to reduce no-shows and optimize clinic efficiency.'
  },
  {
    icon: ClipboardCheck,
    title: 'Patient Follow-ups',
    description: 'Automated follow-up communications for better patient care and engagement.'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Secure, compliant communication channels for sensitive patient information.'
  },
  {
    icon: MessageSquare,
    title: 'Patient Support',
    description: '24/7 automated support for common patient inquiries and concerns.'
  }
];

export default function HealthcarePage() {
  return (
    <BasePage>
      <IndustryHero
        icon={Heart}
        title="Healthcare Solutions"
        description="Streamline patient communication and appointment scheduling while maintaining HIPAA compliance."
        stats={[
          { label: 'Reduced No-shows', value: '-75%' },
          { label: 'Patient Satisfaction', value: '96%' },
          { label: 'Time Saved', value: '15hrs/week' }
        ]}
      />
      <IndustryFeatures 
        features={HEALTHCARE_FEATURES}
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
      />
      <IndustryCTA 
        title="Enhance Your Patient Care"
        description="Discover how ConvoFlow can improve your healthcare practice"
      />
    </BasePage>
  );
}