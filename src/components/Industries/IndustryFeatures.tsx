import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IndustryFeaturesProps {
  features: Feature[];
  image: string;
}

export default function IndustryFeatures({ features, image }: IndustryFeaturesProps) {
  return (
    <section className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white/5 rounded-xl p-6 border border-white/10
                          hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5">
                    <feature.icon className="h-full w-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-text-body text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,77,141,0.3)]">
              <img
                src={image}
                alt="Industry Solution"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}