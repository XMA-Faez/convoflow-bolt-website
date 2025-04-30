import React from 'react';
import Button from '../../ui/Button';
import { Calendar } from 'lucide-react';

interface FormFooterProps {
  isSubmitting: boolean;
}

export default function FormFooter({ isSubmitting }: FormFooterProps) {
  return (
    <>
      <Button 
        size="lg" 
        className="w-full mt-6 inline-flex items-center justify-center"
        disabled={isSubmitting}
      >
        <Calendar className="w-5 h-5 mr-2" />
        {isSubmitting ? 'Scheduling...' : 'Schedule a Demo'}
      </Button>

      <p className="text-center text-sm text-text-body mt-4">
        By scheduling, you agree to our Terms of Service & Privacy Policy
      </p>
    </>
  );
}