import React, { useEffect } from 'react';
import { CALENDLY_CONFIG } from '../../config/calendly';
import { loadCalendlyResources } from '../../utils/calendly';
import type { CalendlyBadgeConfig } from '../../types/calendly';

type CalendlyBadgeProps = Omit<CalendlyBadgeConfig, 'url'>;

export default function CalendlyBadge({
  text = 'Schedule time with me',
  color = '#FF4D8D',
  textColor = '#FFFFFF',
  branding = false
}: Partial<CalendlyBadgeProps>) {
  useEffect(() => {
    let mounted = true;

    const initializeBadge = async () => {
      try {
        await loadCalendlyResources();
        
        if (mounted && window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: CALENDLY_CONFIG.DEMO_URL,
            text,
            color,
            textColor,
            branding
          });
        }
      } catch (error) {
        console.error('Failed to initialize Calendly badge:', error);
      }
    };

    initializeBadge();

    return () => {
      mounted = false;
    };
  }, [text, color, textColor, branding]);

  return null;
}