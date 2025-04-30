import React from 'react';
import { Check, X } from 'lucide-react';

const FEATURES = [
  {
    category: 'Core Features',
    items: [
      { name: 'AI Voice Agents', convoflow: true, others: false },
      { name: 'Multi-Language Support', convoflow: true, others: true },
      { name: 'Real-Time Analytics', convoflow: true, others: true },
      { name: 'Custom Voice Cloning', convoflow: true, others: false },
    ]
  },
  {
    category: 'Advanced Capabilities',
    items: [
      { name: 'Context Awareness', convoflow: true, others: false },
      { name: 'Sentiment Analysis', convoflow: true, others: false },
      { name: 'Dynamic Script Adaptation', convoflow: true, others: false },
      { name: 'Multi-Channel Integration', convoflow: true, others: true },
    ]
  },
  {
    category: 'Enterprise Features',
    items: [
      { name: 'Custom API Access', convoflow: true, others: true },
      { name: 'Advanced Security', convoflow: true, others: true },
      { name: 'Dedicated Support', convoflow: true, others: false },
      { name: 'SLA Guarantee', convoflow: true, others: false },
    ]
  }
];

function FeatureRow({ name, convoflow, others }: { name: string; convoflow: boolean; others: boolean }) {
  return (
    <tr className="border-b border-white/10">
      <td className="py-4 pl-4 pr-8 text-sm text-white">{name}</td>
      <td className="py-4 px-4 text-center">
        {convoflow ? (
          <Check className="h-5 w-5 text-[#FF4D8D] mx-auto" />
        ) : (
          <X className="h-5 w-5 text-gray-500 mx-auto" />
        )}
      </td>
      <td className="py-4 px-4 text-center">
        {others ? (
          <Check className="h-5 w-5 text-gray-400 mx-auto" />
        ) : (
          <X className="h-5 w-5 text-gray-500 mx-auto" />
        )}
      </td>
    </tr>
  );
}

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose ConvoFlow?
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            See how we compare to traditional solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-4 pl-4 pr-8 text-left text-sm font-semibold text-white">Features</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-white">ConvoFlow</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-white">Others</th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-white/[0.02]">
                      <td
                        colSpan={3}
                        className="py-3 pl-4 pr-8 text-sm font-semibold text-[#FF4D8D]"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((feature) => (
                      <FeatureRow key={feature.name} {...feature} />
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}