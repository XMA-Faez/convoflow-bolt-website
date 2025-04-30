import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';
import LogoIcon from '../Logo/LogoIcon';
import { sendEmail } from '../../utils/emailService';

export default function DelayedPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        fullName: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        industry: formData.industry
      });
      setIsVisible(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      <div className="relative w-full max-w-md bg-[#1A1A24] rounded-xl border border-white/10 p-6 shadow-glow animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
            <LogoIcon />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Get a Call Back in 30 Seconds</h3>
          <p className="text-text-body">Our AI pricing specialist will call you right away</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="popup-name" className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="popup-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="popup-email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="popup-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="popup-phone" className="block text-sm font-medium text-white mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="popup-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="popup-company" className="block text-sm font-medium text-white mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="popup-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="popup-industry" className="block text-sm font-medium text-white mb-1">
              Industry
            </label>
            <select
              id="popup-industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4D8D]/50"
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
            className="w-full mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get an Instant Call Back'}
          </Button>
        </form>
      </div>
    </div>
  );
}