// Track loading state
let isLoading = false;
let isLoaded = false;
let loadError: Error | null = null;

export const loadCalendlyResources = (): Promise<void> => {
  // Return existing state if already loaded
  if (isLoaded) return Promise.resolve();
  if (loadError) return Promise.reject(loadError);
  if (isLoading) {
    return new Promise((resolve, reject) => {
      const check = () => {
        if (isLoaded) resolve();
        if (loadError) reject(loadError);
        if (isLoading) setTimeout(check, 100);
      };
      check();
    });
  }

  isLoading = true;

  return new Promise((resolve, reject) => {
    // Add CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add Script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    script.onload = () => {
      // Ensure Calendly is actually loaded
      const checkCalendly = () => {
        if (window.Calendly) {
          isLoaded = true;
          isLoading = false;
          resolve();
        } else {
          setTimeout(checkCalendly, 100);
        }
      };
      checkCalendly();
    };

    script.onerror = (e) => {
      loadError = new Error('Failed to load Calendly widget');
      isLoading = false;
      reject(loadError);
      console.error('Calendly script loading error:', e);
    };

    document.body.appendChild(script);
  });
};