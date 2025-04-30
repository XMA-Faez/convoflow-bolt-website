import { useState } from 'react';
import type { FormData, FormResponse } from '../types/form';
import { submitForm } from '../utils/formSubmission';

interface UseFormSubmissionReturn {
  isSubmitting: boolean;
  submitForm: (formData: FormData, calculatorResults?: Record<string, any>) => Promise<FormResponse>;
  error: string | null;
}

export function useFormSubmission(): UseFormSubmissionReturn {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    formData: FormData, 
    calculatorResults?: Record<string, any>
  ): Promise<FormResponse> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await submitForm(formData, calculatorResults);
      if (!response.success) {
        setError(response.message);
      }
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitForm: handleSubmit, error };
}