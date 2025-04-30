import React from 'react';
import { CheckCircle2, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import LogoIcon from '../Logo/LogoIcon';

export default function LeadFormSection() {
  return (
    <section className="py-20 bg-background-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="bg-[#1A1A24] rounded-xl border border-white/10 p-8 shadow-glow">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
                <LogoIcon />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Get Started Now</h3>
              <p className="text-text-body">Fill out the form below to get started</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button size="lg" className="w-full group">
                <span className="flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
          </div>

          {/* Benefits & Contact Section */}
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose ConvoFlow?</h3>
              <ul className="space-y-4">
                {[
                  '100x Your Outreach',
                  'AI-powered sales automation',
                  '24/7 lead qualification',
                  'Seamless CRM integration',
                  'Multi-language support'
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#FF4D8D] mr-3 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+971554960783" className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <Phone className="w-5 h-5 text-[#FF4D8D] mr-3" />
                  <span className="text-white group-hover:text-[#FF4D8D] transition-colors">055 496 0783</span>
                </a>
                <a href="mailto:ron@convoflow.in" className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <Mail className="w-5 h-5 text-[#FF4D8D] mr-3" />
                  <span className="text-white group-hover:text-[#FF4D8D] transition-colors">ron@convoflow.in</span>
                </a>
                <a href="https://maps.google.com/?q=JBC+2+-+Jumeirah+Lake+Towers+-+Dubai" target="_blank" rel="noopener noreferrer" className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors">
                  <MapPin className="w-5 h-5 text-[#FF4D8D] mr-3" />
                  <span className="text-white group-hover:text-[#FF4D8D] transition-colors">JBC 2 - Jumeirah Lake Towers - Dubai</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}