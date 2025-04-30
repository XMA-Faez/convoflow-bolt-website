import React from 'react';

export default function LogoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* Message Bubble with Tail */}
      <path
        d="M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v9c0 1.38-1.12 2.5-2.5 2.5H13l-3 3-3-3H6.5C5.12 16 4 14.88 4 13.5v-9z"
        fill="#FF4D8D"
      />
      
      {/* Two People Icons */}
      <g transform="translate(7.5, 6)">
        {/* First Person */}
        <circle cx="2.5" cy="2" r="1.25" fill="white" />
        <rect x="1.75" y="3.5" width="1.5" height="3" rx="0.75" fill="white" />
        
        {/* Second Person */}
        <circle cx="6.5" cy="2" r="1.25" fill="white" />
        <rect x="5.75" y="3.5" width="1.5" height="3" rx="0.75" fill="white" />
      </g>
    </svg>
  );
}