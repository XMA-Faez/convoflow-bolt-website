import React from 'react';
import { ShoppingBag, ShoppingCart, TrendingUp, Users, BarChart2 } from 'lucide-react';
import BasePage from './BasePage';
import IndustryHero from '../../components/Industries/IndustryHero';
import IndustryFeatures from '../../components/Industries/IndustryFeatures';
import IndustryCTA from '../../components/Industries/IndustryCTA';

const ECOMMERCE_FEATURES = [
  {
    icon: ShoppingCart,
    title: 'Smart Cart Recovery',
    description: 'Automated cart abandonment recovery with personalized messaging.'
  },
  {
    icon: TrendingUp,
    title: 'Sales Optimization',
    description: 'AI-driven product recommendations and upsell opportunities.'
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Personalized customer interactions across multiple channels.'
  },
  {
    icon: BarChart2,
    title: 'Performance Analytics',
    description: 'Real-time insights into sales performance and customer behavior.'
  }
];

export default function EcommercePage() {
  return (
    <BasePage>
      <IndustryHero
        icon={ShoppingBag}
        title="E-commerce Solutions"
        description="Transform your online sales with AI-powered customer engagement that converts browsers into buyers."
        stats={[
          { label: 'Cart Recovery Rate', value: '45%' },
          { label: 'Conversion Increase', value: '3x' },
          { label: 'Customer Satisfaction', value: '98%' }
        ]}
      />
      <IndustryFeatures 
        features={ECOMMERCE_FEATURES}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      />
      <IndustryCTA 
        title="Ready to Boost Your E-commerce Sales?"
        description="See how ConvoFlow can transform your online store's performance"
      />
    </BasePage>
  );
}