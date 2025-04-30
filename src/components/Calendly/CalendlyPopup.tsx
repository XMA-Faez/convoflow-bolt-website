import React from 'react';
import { X } from 'lucide-react';
import CalendlyEmbed from './CalendlyEmbed';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function CalendlyPopup({ isOpen, onClose, url }: CalendlyPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-[#1A1A24] rounded-xl border border-white/10 p-6 shadow-glow animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <CalendlyEmbed url={url} />
      </div>
    </div>
  );
}