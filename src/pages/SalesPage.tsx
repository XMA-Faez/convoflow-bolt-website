import React from 'react';
import SalesHero from '../components/Sales/SalesHero';
import DemoSection from '../components/Demo/DemoSection';
import IndustriesSection from '../components/Industries/IndustriesSection';
import SolutionsSection from '../components/Sales/SolutionsSection';
import CallbackFormSection from '../components/Forms/CallbackFormSection';
import CallToAction from '../components/Sales/CallToAction';

export default function SalesPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <SalesHero />
      <DemoSection />
      <IndustriesSection />
      <SolutionsSection />
      <CallbackFormSection />
      <CallToAction />
    </div>
  );
}