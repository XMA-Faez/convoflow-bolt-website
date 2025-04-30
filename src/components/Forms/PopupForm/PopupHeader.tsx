import React from 'react';
import LogoIcon from '../../Logo/LogoIcon';

export default function PopupHeader() {
  return (
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-12 h-12 mb-4">
        <LogoIcon />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        Schedule a Demo
      </h3>
      <p className="text-text-body">
        See how ConvoFlow can revolutionize your sales process
      </p>
    </div>
  );
}