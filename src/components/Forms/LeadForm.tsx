import React from 'react';
import { X } from 'lucide-react';
import { useForm } from '../../context/FormContext';
import FormContainer from './FormContainer';

export default function LeadForm() {
  const { isFormOpen, closeForm } = useForm();

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeForm}
      />
      
      <div className="relative w-full max-w-md">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <FormContainer onSuccess={closeForm} />
      </div>
    </div>
  );
}