import React, { useCallback } from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '../../utils/cn';
import { loadCalendlyResources } from '../../utils/calendly';
import type { CalendlyPopupConfig } from '../../types/calendly';

interface CalendlyLinkProps extends Omit<CalendlyPopupConfig, 'url'> {
  url: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyLink({ 
  url, 
  prefill,
  className, 
  children 
}: CalendlyLinkProps) {
  const handleClick = useCallback(async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    try {
      await loadCalendlyResources();
      
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url,
          prefill
        });
      }
    } catch (error) {
      console.error('Failed to initialize Calendly popup:', error);
    }
  }, [url, prefill]);

  return (
    <a
      href="#schedule"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3",
        "text-white font-semibold rounded-lg",
        "bg-gradient-to-r from-[#FF4D8D] to-[#E7447F]",
        "hover:shadow-[0_0_20px_rgba(255,77,141,0.3)]",
        "transition-shadow duration-300",
        className
      )}
    >
      <Calendar className="w-5 h-5 mr-2" />
      {children || "Schedule a Call"}
    </a>
  );
}