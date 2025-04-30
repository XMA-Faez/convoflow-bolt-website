import React from 'react';
import SalesHero from './SalesHero';
import DemoSection from '../Demo/DemoSection';
import IndustriesSection from '../Industries/IndustriesSection';
import SolutionsSection from './SolutionsSection';
import LeadFormSection from '../Forms/LeadFormSection';
import CallToAction from './CallToAction';

export default function SalesPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <SalesHero />
      <DemoSection />
      <IndustriesSection />
      <SolutionsSection />
      <LeadFormSection />
      <CallToAction />
    </div>
  );
}