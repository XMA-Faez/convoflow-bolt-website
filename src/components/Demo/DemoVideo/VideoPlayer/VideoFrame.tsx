import React from 'react';

export default function VideoFrame() {
  return (
    <div className="relative w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
        alt="ConvoFlow AI Dashboard"
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D8D]/10 to-transparent opacity-30" />
    </div>
  );
}