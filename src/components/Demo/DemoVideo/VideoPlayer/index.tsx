import React from 'react';
import VideoFrame from './VideoFrame';
import VideoOverlay from './VideoOverlay';

export default function VideoPlayer() {
  return (
    <div className="aspect-video rounded-xl overflow-hidden relative
                    shadow-[0_0_30px_rgba(255,77,141,0.2)]
                    hover:shadow-[0_0_40px_rgba(255,77,141,0.3)]
                    transition-shadow duration-300">
      <VideoFrame />
      <VideoOverlay />
    </div>
  );
}