import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoStats from './VideoStats';

export default function VideoContainer() {
  return (
    <div className="relative">
      <VideoPlayer />
      <VideoStats />
    </div>
  );
}