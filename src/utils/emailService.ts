import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/email';
import type { FormData, EmailTemplateParams } from '../types/form';

function createEmailTemplateParams(formData: FormData): EmailTemplateParams {
  return {
    to_email: EMAIL_CONFIG.TO_EMAIL,
    lead_name: formData.fullName,
    email: formData.email,
    phone_number: formData.phone,
    company_name: formData.company,
    industry: formData.industry,
    submission_date: new Date().toLocaleString()
  };
}

export async function sendEmail(formData: FormData): Promise<emailjs.EmailJSResponseStatus> {
  try {
    const templateParams = createEmailTemplateParams(formData);
    
    return await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}