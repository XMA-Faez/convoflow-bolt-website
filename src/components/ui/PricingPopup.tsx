import React from 'react';
import { X, Calendar } from 'lucide-react';
import Button from './Button';
import LogoIcon from '../Logo/LogoIcon';

interface PricingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingPopup({ isOpen, onClose }: PricingPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative w-full max-w-md bg-[#1A1A24] rounded-xl border border-white/10 p-6 shadow-glow">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <LogoIcon />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Book In a Demo Call With Our Team</h3>
          <p className="text-text-body">Let our experts show you how ConvoFlow can transform your sales process</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="john@company.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="Your Company"
              required
            />
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-white mb-1">
              Industry
            </label>
            <select
              id="industry"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              required
            >
              <option value="" className="bg-[#1A1A24]">Select your industry</option>
              <option value="E-commerce" className="bg-[#1A1A24]">E-commerce</option>
              <option value="Healthcare" className="bg-[#1A1A24]">Healthcare</option>
              <option value="Insurance" className="bg-[#1A1A24]">Insurance</option>
              <option value="Recruitment" className="bg-[#1A1A24]">Recruitment</option>
              <option value="Hospitality" className="bg-[#1A1A24]">Hospitality</option>
              <option value="Other" className="bg-[#1A1A24]">Other</option>
            </select>
          </div>

          <Button 
            size="lg" 
            className="w-full mt-6 inline-flex items-center justify-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Demo Call
          </Button>

          <p className="text-center text-sm text-text-body mt-4">
            By scheduling, you agree to our Terms of Service & Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}