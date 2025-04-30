import React from 'react';
import { cn } from '../../utils/cn';
import type { CalendlyEmbedProps } from '../../types/calendly';
import { CALENDLY_CONFIG } from '../../config/calendly';
import { loadCalendlyResources } from '../../utils/calendly';

export default function CalendlyEmbed({ 
  url, 
  preferences = CALENDLY_CONFIG.SETTINGS,
  className 
}: CalendlyEmbedProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let isMounted = true;

    const initializeWidget = async () => {
      try {
        await loadCalendlyResources();
        
        if (isMounted && window.Calendly && containerRef.current) {
          // Construct URL with preferences
          const calendlyUrl = new URL(url);
          Object.entries(preferences).forEach(([key, value]) => {
            calendlyUrl.searchParams.append(key, String(value));
          });

          window.Calendly.initInlineWidget({
            url: calendlyUrl.toString(),
            parentElement: containerRef.current
          });
        }
      } catch (error) {
        console.error('Failed to initialize Calendly widget:', error);
      }
    };

    initializeWidget();

    return () => {
      isMounted = false;
    };
  }, [url, preferences]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "w-full min-h-[650px] bg-white/5 rounded-xl overflow-hidden",
        className
      )}
    />
  );
}