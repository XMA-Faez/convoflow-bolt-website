import { useEffect } from 'react';
import { useForm } from '../context/FormContext';
import { initializeButtonHandlers, setFormContext, cleanupButtonHandlers } from '../utils/buttonHandler';

export function useButtonHandler(): void {
  const formContext = useForm();

  useEffect(() => {
    // Set form context for the utility functions
    setFormContext(formContext);
    
    // Initial setup
    initializeButtonHandlers();

    // Setup mutation observer to handle dynamically added buttons
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          initializeButtonHandlers();
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => {
      observer.disconnect();
      cleanupButtonHandlers();
    };
  }, [formContext]);
}