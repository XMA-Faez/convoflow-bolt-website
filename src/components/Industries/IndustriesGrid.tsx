import React from 'react';
import IndustryCardLink from './IndustryCardLink';
import type { Industry } from '../../types/industries';

interface IndustriesGridProps {
  industries: Industry[];
}

export default function IndustriesGrid({ industries }: IndustriesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry) => (
        <IndustryCardLink
          key={industry.title}
          {...industry}
        />
      ))}
    </div>
  );
}