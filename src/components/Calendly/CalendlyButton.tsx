import React, { useCallback } from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '../../utils/cn';
import { loadCalendlyResources } from '../../utils/calendly';
import { CALENDLY_CONFIG } from '../../config/calendly';

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({ className, children }: CalendlyButtonProps) {
  const handleClick = useCallback(async () => {
    try {
      await loadCalendlyResources();
      
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: CALENDLY_CONFIG.DEMO_URL
        });
      } else {
        console.error('Calendly not loaded properly');
        // Fallback to direct link
        window.open(CALENDLY_CONFIG.DEMO_URL, '_blank');
      }
    } catch (error) {
      console.error('Failed to load Calendly:', error);
      // Fallback to direct link
      window.open(CALENDLY_CONFIG.DEMO_URL, '_blank');
    }
  }, []);

  return (
    <button
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
      {children || "Schedule a Demo"}
    </button>
  );
}