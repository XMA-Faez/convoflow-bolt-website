import React from 'react';
import VideoControls from './VideoControls';
import VideoProgress from './VideoProgress';

export default function VideoOverlay() {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-4 px-4">
      <VideoControls />
      <VideoProgress />
    </div>
  );
}