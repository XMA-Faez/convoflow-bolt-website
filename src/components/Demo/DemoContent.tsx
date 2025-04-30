import React from 'react';
import DemoFeatures from './DemoFeatures';
import DemoHeader from './DemoHeader';
import DemoButton from './DemoButton';

export default function DemoContent() {
  return (
    <div>
      <DemoHeader />
      <DemoFeatures />
      <DemoButton />
    </div>
  );
}