import React from 'react';
import { Briefcase, Search, UserCheck, BarChart2, Calendar } from 'lucide-react';
import IndustryHero from '../../components/Industries/IndustryHero';
import IndustryFeatures from '../../components/Industries/IndustryFeatures';
import IndustryCTA from '../../components/Industries/IndustryCTA';
import RecruitmentSavingsCalculator from '../../components/Calculator/RecruitmentSavingsCalculator';

const RECRUITMENT_FEATURES = [
  {
    icon: Search,
    title: 'Candidate Screening',
    description: 'AI-powered initial screening and qualification of candidates.'
  },
  {
    icon: Calendar,
    title: 'Interview Scheduling',
    description: 'Automated interview scheduling and candidate coordination.'
  },
  {
    icon: UserCheck,
    title: 'Skill Assessment',
    description: 'Automated skill-based candidate matching and assessment.'
  },
  {
    icon: BarChart2,
    title: 'Recruitment Analytics',
    description: 'Detailed insights into your recruitment pipeline and metrics.'
  }
];

export default function RecruitmentPage() {
  return (
    <div className="bg-background-primary min-h-screen">
      <IndustryHero
        icon={Briefcase}
        title="Recruitment Solutions"
        description="Enhance candidate screening and engagement with AI-powered interviews and automated follow-ups."
        stats={[
          { label: 'Time-to-Hire', value: '-40%' },
          { label: 'Candidate Experience', value: '92%' },
          { label: 'Screening Accuracy', value: '95%' }
        ]}
      />
      <IndustryFeatures 
        features={RECRUITMENT_FEATURES}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
      />
      <RecruitmentSavingsCalculator />
      <IndustryCTA 
        title="Transform Your Recruitment Process"
        description="See how ConvoFlow can streamline your hiring pipeline"
      />
    </div>
  );
}