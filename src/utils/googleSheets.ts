import { API_CONFIG } from '../config/api';
import type { FormData } from '../types/form';

export async function sendToGoogleSheets(formData: FormData): Promise<Response> {
  try {
    const response = await fetch(API_CONFIG.GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...formData
      })
    });

    if (!response.ok && response.status !== 0) { // Status 0 is expected with no-cors
      throw new Error(`Failed to send data to Google Sheets: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    throw error;
  }
}