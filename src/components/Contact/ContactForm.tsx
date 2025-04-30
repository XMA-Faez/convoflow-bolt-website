import React from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  return (
    <div className="bg-white/5 rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
      
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
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
            placeholder="How can we help you?"
          />
        </div>

        <Button size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}