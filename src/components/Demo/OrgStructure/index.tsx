import React from 'react';
import CenterLogo from './CenterLogo';
import FeatureRing from './FeatureRing';
import DepartmentSection from './DepartmentSection';
import ConnectionLines from './ConnectionLines';

export default function OrgStructure() {
  return (
    <div className="aspect-square relative bg-[#1A1A24] rounded-xl border border-white/10 p-8
                    shadow-[0_0_30px_rgba(255,77,141,0.2)]
                    hover:shadow-[0_0_40px_rgba(255,77,141,0.3)]
                    transition-shadow duration-300">
      {/* Connection Lines */}
      <ConnectionLines />
      
      {/* Core Components */}
      <CenterLogo />
      <FeatureRing />
      <DepartmentSection />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/10 via-transparent to-transparent rounded-xl" />
      <div className="absolute inset-0 grid-cyberpunk opacity-20 rounded-xl" />
    </div>
  );
}