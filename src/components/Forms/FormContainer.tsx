import React from 'react';
import { Calendar } from 'lucide-react';
import Button from '../ui/Button';
import LogoIcon from '../Logo/LogoIcon';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { useFormSubmission } from '../../hooks/useFormSubmission';
import type { FormData } from '../../types/form';

interface FormContainerProps {
  onSuccess?: () => void;
  standalone?: boolean;
  calculatorResults?: Record<string, any>;
}

export default function FormContainer({ 
  onSuccess, 
  standalone = false,
  calculatorResults
}: FormContainerProps) {
  const { isSubmitting, submitForm, error } = useFormSubmission();
  const [formData, setFormData] = React.useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    industry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await submitForm(formData, calculatorResults);
    if (response.success) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        industry: ''
      });
      onSuccess?.();
    }
  };

  return (
    <div className="bg-[#1A1A24] rounded-xl border border-white/10 p-8 shadow-glow">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
          <LogoIcon />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Get Started Now</h3>
        <p className="text-text-body">Fill out the form below to get started</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id={standalone ? "standalone-fullName" : "fullName"}
          name="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />

        <FormInput
          id={standalone ? "standalone-email" : "email"}
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@company.com"
          required
        />

        <FormInput
          id={standalone ? "standalone-phone" : "phone"}
          name="phone"
          type="tel"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          required
        />

        <FormInput
          id={standalone ? "standalone-company" : "company"}
          name="company"
          label="Company Name"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your Company"
          required
        />

        <FormSelect
          id={standalone ? "standalone-industry" : "industry"}
          name="industry"
          label="Industry"
          value={formData.industry}
          onChange={handleChange}
          required
        />

        <Button 
          type="submit"
          size="lg" 
          className="w-full group"
          disabled={isSubmitting}
        >
          <span className="flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Submitting...' : 'Book In a Demo'}
          </span>
        </Button>
      </form>
    </div>
  );
}