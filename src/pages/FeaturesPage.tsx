import React from 'react';
import FeaturesHero from '../components/Features/FeaturesHero';
import FeaturesList from '../components/Features/FeaturesList';
import TechnologyShowcase from '../components/Features/TechnologyShowcase';
import IntegrationSection from '../components/Features/IntegrationSection';
import ComparisonTable from '../components/Features/ComparisonTable';
import FeaturesCTA from '../components/Features/FeaturesCTA';

export default function FeaturesPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <FeaturesHero />
      <FeaturesList />
      <TechnologyShowcase />
      <IntegrationSection />
      <ComparisonTable />
      <FeaturesCTA />
    </div>
  );
}