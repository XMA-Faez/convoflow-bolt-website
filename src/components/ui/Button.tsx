import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300',
        
        // Variants
        variant === 'primary' && [
          'bg-gradient-to-r from-[#FF4D8D] to-[#E7447F]',
          'text-white',
          'shadow-[0_0_20px_rgba(255,77,141,0.2)]',
          'hover:shadow-[0_0_30px_rgba(255,77,141,0.4)]',
          'hover:scale-[1.02]',
          'active:scale-[0.98]'
        ],
        variant === 'secondary' && [
          'bg-transparent',
          'text-white',
          'border-2 border-[#FF4D8D]',
          'hover:bg-[#FF4D8D]/10',
          'hover:shadow-[0_0_20px_rgba(255,77,141,0.2)]'
        ],
        
        // Sizes
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        
        // Full width
        fullWidth && 'w-full',
        
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}