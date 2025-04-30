import type { FormContextType } from '../context/FormContext';

let formContext: FormContextType | null = null;

export function setFormContext(context: FormContextType): void {
  formContext = context;
}

function handleButtonClick(event: Event): void {
  event.preventDefault();
  if (formContext) {
    formContext.openForm();
  }
}

function handleKeyboardEvent(event: KeyboardEvent): void {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleButtonClick(event);
  }
}

function ensureAccessibility(element: Element): void {
  if (element instanceof HTMLElement) {
    // Ensure the element is focusable
    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex', '0');
    }
    
    // Add proper ARIA attributes
    element.setAttribute('role', 'button');
    element.setAttribute('aria-haspopup', 'dialog');
  }
}

export function initializeButtonHandlers(): void {
  try {
    const buttons = document.querySelectorAll('button:not([type="submit"]), a[href="#demo"]');
    
    buttons.forEach(button => {
      // Skip if it's inside a form or already initialized
      if (button.closest('form') || button.hasAttribute('data-form-handler')) {
        return;
      }

      // Mark as initialized
      button.setAttribute('data-form-handler', 'true');
      
      // Add click handler
      button.addEventListener('click', handleButtonClick);
      
      // Add keyboard accessibility
      button.addEventListener('keydown', handleKeyboardEvent);
      
      // Ensure proper ARIA attributes
      ensureAccessibility(button);
    });
  } catch (error) {
    console.error('Error initializing button handlers:', error);
  }
}

export function cleanupButtonHandlers(): void {
  try {
    document.querySelectorAll('[data-form-handler]').forEach(button => {
      button.removeEventListener('click', handleButtonClick);
      button.removeEventListener('keydown', handleKeyboardEvent);
      button.removeAttribute('data-form-handler');
    });
  } catch (error) {
    console.error('Error cleaning up button handlers:', error);
  }
}