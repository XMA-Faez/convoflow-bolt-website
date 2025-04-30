import { submitToGoogleSheets } from './sheetsService';
import { sendEmail } from './emailService';
import type { FormData, FormResponse } from '../types/form';

export async function submitForm(
  formData: FormData, 
  calculatorResults?: Record<string, any>
): Promise<FormResponse> {
  try {
    // Submit to both Google Sheets and send email in parallel
    const [sheetsResponse] = await Promise.all([
      submitToGoogleSheets(formData, calculatorResults ? 'calculator_lead' : 'direct_lead', calculatorResults),
      sendEmail(formData)
    ]);

    // Check if the submission was successful
    if (sheetsResponse.status === 0 || sheetsResponse.ok) {
      return {
        success: true,
        message: 'Form submitted successfully'
      };
    }

    throw new Error('Form submission failed');
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
}