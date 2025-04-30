import React from 'react';
import Button from './Button';
import { Calendar } from 'lucide-react';
import { useForm } from '../../context/FormContext';
import type { ButtonProps } from './Button';

export default function FormButton({ 
  children, 
  onClick,
  className = '',
  ...props 
}: ButtonProps) {
  const { openForm } = useForm();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openForm();
    onClick?.(e);
  };

  return (
    <Button 
      onClick={handleClick}
      className={`inline-flex items-center justify-center ${className}`}
      {...props}
    >
      <Calendar className="w-5 h-5 mr-2" />
      {children || "Schedule a Demo"}
    </Button>
  );
}