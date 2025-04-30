import React from 'react';

interface StatItemProps {
  label: string;
  value: string;
}

export default function StatItem({ label, value }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-[#FF4D8D] font-bold text-lg md:text-xl">{value}</div>
      <div className="text-text-body text-xs md:text-sm">{label}</div>
    </div>
  );
}