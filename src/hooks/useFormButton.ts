import { useCallback } from 'react';
import { useForm } from '../context/FormContext';

export function useFormButton() {
  const { openForm } = useForm();
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    openForm();
  }, [openForm]);

  return handleClick;
}