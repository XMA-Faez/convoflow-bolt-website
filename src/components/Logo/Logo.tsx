import React from 'react';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center space-x-0 ${className}`}>
      <div className="h-8 w-8">
        <LogoIcon />
      </div>
      <LogoText />
    </div>
  );
}