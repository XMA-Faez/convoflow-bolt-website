import React from 'react';

export default function DemoVideo() {
  return (
    <div className="relative">
      <div className="aspect-video rounded-xl overflow-hidden 
                    shadow-[0_0_30px_rgba(255,77,141,0.2)]
                    hover:shadow-[0_0_40px_rgba(255,77,141,0.3)]
                    transition-shadow duration-300">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
          alt="ConvoFlow Demo"
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D8D]/10 to-transparent opacity-30" />
      </div>

      {/* Stats Overlay */}
      <div className="absolute -bottom-6 left-6 right-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20
                      grid grid-cols-3 gap-4">
          {[
            { label: 'Conversion Rate', value: '+45%' },
            { label: 'Response Time', value: '< 1min' },
            { label: 'Customer Satisfaction', value: '98%' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-[#FF4D8D] font-bold">{stat.value}</div>
              <div className="text-text-body text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}