import React from 'react';
import { SALES_DEPARTMENTS } from './constants';
import { calculatePosition, getGradientId } from './utils';

export default function ConnectionLines() {
  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full">
        <defs>
          {SALES_DEPARTMENTS.map((dept) => (
            <linearGradient
              key={dept.name}
              id={getGradientId(dept.name)}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#FF4D8D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E7447F" stopOpacity="0.4" />
            </linearGradient>
          ))}
        </defs>

        {SALES_DEPARTMENTS.map((dept, index) => {
          const { x: endX, y: endY } = calculatePosition(
            index,
            SALES_DEPARTMENTS.length,
            180
          );
          
          return (
            <g key={dept.name} className="connection-line">
              <line
                x1="50%"
                y1="50%"
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke={`url(#${getGradientId(dept.name)})`}
                strokeWidth="2"
                className="animate-pulse"
              />
              
              <circle
                cx={`${(endX + 50) / 2}%`}
                cy={`${(endY + 50) / 2}%`}
                r="4"
                fill="#FF4D8D"
                className="animate-ping"
              />
              
              <text
                x={`${endX}%`}
                y={`${endY}%`}
                dy="-20"
                textAnchor="middle"
                fill="white"
                className="text-sm font-medium"
              >
                {dept.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}