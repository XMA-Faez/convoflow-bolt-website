import React from 'react';
import FormField from './FormField';
import FormFooter from './FormFooter';
import type { FormData } from '../../../types/form';

const INDUSTRY_OPTIONS = [
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Insurance', label: 'Insurance' },
  { value: 'Recruitment', label: 'Recruitment' },
  { value: 'Hospitality', label: 'Hospitality' },
  { value: 'Other', label: 'Other' }
];

interface PopupFormFieldsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export default function PopupFormFields({
  formData,
  onChange,
  onSubmit,
  isSubmitting
}: PopupFormFieldsProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormField
        id="fullName"
        label="Full Name"
        value={formData.fullName}
        onChange={onChange}
        placeholder="John Doe"
      />

      <FormField
        id="email"
        label="Work Email"
        type="email"
        value={formData.email}
        onChange={onChange}
        placeholder="john@company.com"
      />

      <FormField
        id="phone"
        label="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={onChange}
        placeholder="+1 (555) 000-0000"
      />

      <FormField
        id="company"
        label="Company Name"
        value={formData.company}
        onChange={onChange}
        placeholder="Your Company"
      />

      <FormField
        id="industry"
        label="Industry"
        type="select"
        value={formData.industry}
        onChange={onChange}
        options={INDUSTRY_OPTIONS}
      />

      <FormFooter isSubmitting={isSubmitting} />
    </form>
  );
}