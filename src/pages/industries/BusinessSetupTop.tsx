import React from 'react';
import { Clock, Users, CheckCircle } from 'lucide-react';
import StatsCard from './components/StatsCard';

export default function BusinessSetupTop() {
  return (
    <section className="py-16 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard
            icon={Clock}
            title="Processing Time"
            value="24-48 hrs"
            description="Average time to process applications"
          />
          <StatsCard
            icon={Users}
            title="Client Satisfaction"
            value="95%"
            description="Satisfied customers and growing"
          />
          <StatsCard
            icon={CheckCircle}
            title="Success Rate"
            value="99%"
            description="Applications approved successfully"
          />
        </div>
      </div>
    </section>
  );
}