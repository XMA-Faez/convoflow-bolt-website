import { SHEETS_CONFIG } from '../config/sheets';
import type { FormData } from '../types/form';

interface SheetSubmission extends FormData {
  timestamp: string;
  formType: string;
  calculatorResults?: string;
}

export async function submitToGoogleSheets(
  formData: FormData, 
  formType: string,
  calculatorResults?: Record<string, any>
): Promise<Response> {
  try {
    const submission: SheetSubmission = {
      ...formData,
      timestamp: new Date().toISOString(),
      formType,
      calculatorResults: calculatorResults ? JSON.stringify(calculatorResults) : undefined
    };

    const response = await fetch(SHEETS_CONFIG.DEPLOYMENT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission)
    });

    // With no-cors, we expect status 0
    if (response.status !== 0) {
      throw new Error(`Failed to submit to Google Sheets: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
}