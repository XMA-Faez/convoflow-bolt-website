import React from 'react';
import { Phone, MessageSquare, GitBranch } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Phone,
    title: 'AI Sales Associate',
    subtitle: 'Not Your Typical Robo-Caller',
    description: 'Your Customers Might Actually Believe this is a Human...',
    features: [
      'Outreach Sales System',
      'Multi-language support',
      'Custom voice and personality',
      'Voice Recordings on Every Booking'
    ]
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Chatbots',
    description: 'Why Stop at The Call, Follow-up is where the magic is...',
    features: [
      'Instant response times',
      'Booking Invitations and Reminders',
      'Automated follow-ups',
      'Seamless human handoff'
    ]
  },
  {
    icon: GitBranch,
    title: 'Sales Workflow Automation',
    description: 'Streamline your sales process with intelligent automation',
    features: [
      'CRM integration',
      'Lead scoring',
      'Task automation',
      'Performance tracking'
    ]
  }
];

export default function SolutionsSection() {
  return (
    <section className="pt-8 pb-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Comprehensive Sales Automation Suite
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Everything you need to automate and optimize your entire sales process
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="bg-white/5 rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 mb-6">
                <solution.icon className="h-full w-full text-white" />
              </div>
              
              <div className="mb-3">
                <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                {solution.subtitle && (
                  <p className="text-sm text-text-body mt-1">({solution.subtitle})</p>
                )}
              </div>
              
              <p className="text-text-body mb-6">{solution.description}</p>
              
              <ul className="space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-text-body">
                    <span className="h-5 w-5 rounded-full bg-[#FF4D8D]/20 flex items-center justify-center mr-3">
                      <span className="text-[#FF4D8D]">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}