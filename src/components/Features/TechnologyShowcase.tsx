import React from 'react';
import { Cpu, Network, Fingerprint } from 'lucide-react';

export default function TechnologyShowcase() {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FF4D8D]/5 grid-cyberpunk opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cutting-Edge Technology
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Built with the latest advancements in AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Cpu,
              title: "Advanced NLP",
              description: "State-of-the-art natural language processing for human-like conversations"
            },
            {
              icon: Network,
              title: "Neural Networks",
              description: "Deep learning models that understand context and improve over time"
            },
            {
              icon: Fingerprint,
              title: "Voice Recognition",
              description: "Biometric voice analysis for enhanced security and personalization"
            }
          ].map((tech) => (
            <div key={tech.title} className="bg-white/5 rounded-xl p-8 border border-white/10">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5 mb-6">
                <tech.icon className="h-full w-full text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
              <p className="text-text-body">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}