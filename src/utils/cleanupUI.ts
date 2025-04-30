import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Removes "View Demo" buttons from the features page
 */
function removeViewDemoButtons() {
  // Find all buttons containing "View Demo" text
  const buttons = document.querySelectorAll('button, a');
  buttons.forEach(button => {
    const buttonText = button.textContent?.trim().toLowerCase();
    if (buttonText === 'view demo') {
      // Get the parent container
      const container = button.parentElement;
      
      // Remove the button
      button.remove();

      // Clean up empty containers
      if (container && !container.hasChildNodes()) {
        container.remove();
      }
      
      // Adjust spacing if needed
      if (container?.classList.contains('flex')) {
        container.classList.remove('gap-4', 'space-x-4');
        container.classList.add('justify-center');
      }
    }
  });
}

/**
 * React hook to handle View Demo button removal
 */
export function useRemoveViewDemo() {
  const location = useLocation();

  useEffect(() => {
    // Only run on the features page
    if (location.pathname === '/features') {
      // Initial cleanup
      removeViewDemoButtons();

      // Create observer for dynamically added content
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            removeViewDemoButtons();
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
      };
    }
  }, [location.pathname]);
}