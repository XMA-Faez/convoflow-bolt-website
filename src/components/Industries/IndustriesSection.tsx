import React from 'react';
import { ShoppingBag, Heart, Building2, Briefcase, UtensilsCrossed, Building } from 'lucide-react';
import IndustriesGrid from './IndustriesGrid';
import type { Industry } from '../../types/industries';

const INDUSTRIES: Industry[] = [
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Transform your online sales with AI-powered customer engagement that converts browsers into buyers.',
    benefits: [
      'Smart product recommendations based on browsing behavior',
      'Automated cart abandonment recovery',
      'Real-time inventory-aware responses'
    ],
    path: '/industries/ecommerce'
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Streamline patient communication and appointment scheduling while maintaining HIPAA compliance.',
    benefits: [
      'HIPAA-compliant patient communication',
      'Intelligent appointment prioritization',
      'Automated prescription reminders'
    ],
    path: '/industries/healthcare'
  },
  {
    icon: Building2,
    title: 'Insurance',
    description: 'Accelerate claims processing and policy inquiries with intelligent automation and quick response times.',
    benefits: [
      'Automated claims status updates',
      'Policy-specific coverage explanations',
      'Risk assessment automation'
    ],
    path: '/industries/insurance'
  },
  {
    icon: Briefcase,
    title: 'Recruitment',
    description: 'Enhance candidate screening and engagement with AI-powered interviews and automated follow-ups.',
    benefits: [
      'Skill-based candidate matching',
      'Automated interview scheduling',
      'Multi-language candidate screening'
    ],
    path: '/industries/recruitment'
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality',
    description: 'Deliver exceptional guest experiences with 24/7 booking assistance and personalized recommendations.',
    benefits: [
      'Real-time availability management',
      'Personalized guest preferences',
      'Multilingual booking assistance'
    ],
    path: '/industries/hospitality'
  },
  {
    icon: Building,
    title: 'Business Setup',
    description: 'Streamline company formation and licensing processes with AI-powered automation and expert guidance.',
    benefits: [
      'Automated license processing',
      'Multi-jurisdiction support',
      'Real-time application tracking'
    ],
    path: '/industries/business-setup'
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tailored Solutions for Your Industry
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Discover how ConvoFlow adapts to your specific industry needs
          </p>
        </div>
        
        <IndustriesGrid industries={INDUSTRIES} />
      </div>
    </section>
  );
}