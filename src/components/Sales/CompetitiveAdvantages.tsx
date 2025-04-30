import React from 'react';
import { Clock, Globe, Link, PiggyBank } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a lead with round-the-clock automated engagement'
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Engage customers in 20+ languages with native-level fluency'
  },
  {
    icon: Link,
    title: 'Seamless Integration',
    description: 'Works with popular CRM tools including Salesforce, HubSpot & more'
  },
  {
    icon: PiggyBank,
    title: 'Cost Efficiency',
    description: '60% lower cost compared to traditional sales development teams'
  }
];

export default function CompetitiveAdvantages() {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF4D8D]/5 grid-cyberpunk opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Companies Choose ConvoFlow
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Industry-leading features that set us apart from traditional solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((advantage) => (
            <div key={advantage.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 mb-4">
                <advantage.icon className="h-full w-full text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{advantage.title}</h3>
              <p className="text-text-body text-sm">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}