export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
}

export interface EmailTemplateParams {
  to_email: string;
  lead_name: string;
  email: string;
  phone_number: string;
  company_name: string;
  industry: string;
  submission_date: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
}