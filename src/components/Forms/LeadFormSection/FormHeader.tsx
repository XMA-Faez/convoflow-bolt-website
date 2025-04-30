import React from 'react';
import { Star } from 'lucide-react';

export default function FormHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
        <Star className="w-4 h-4 text-[#FF4D8D] mr-2" />
        <span className="text-sm text-white">Join 500+ Growing Companies</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Ready to Transform Your Sales Process?
      </h2>
      <p className="text-text-body text-lg max-w-2xl mx-auto">
        Get started with ConvoFlow today and see the difference AI-powered sales can make
      </p>
    </div>
  );
}