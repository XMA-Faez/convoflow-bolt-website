import React from 'react';
import PlayerFrame from './PlayerFrame';
import DemoStats from './DemoStats';

export default function DemoVideo() {
  return (
    <div className="relative">
      <PlayerFrame />
      <DemoStats />
    </div>
  );
}