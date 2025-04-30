import React from 'react';
import FormContainer from './FormContainer';
import ContactInfo from './ContactInfo';
import BenefitsList from './BenefitsList';
import FormHeader from './FormHeader';

export default function CallbackFormSection() {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FormHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <FormContainer standalone={true} />
          <div className="space-y-8">
            <BenefitsList />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}