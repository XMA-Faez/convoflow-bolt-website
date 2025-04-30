import React from 'react';
import { Play } from 'lucide-react';
import Button from '../ui/Button';

export default function VideoShowcase() {
  return (
    <section className="relative py-20 bg-background-primary overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See ConvoFlow in Action
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Watch how our AI agents handle real customer conversations
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden 
                        shadow-[0_0_30px_rgba(255,77,141,0.2)]
                        hover:shadow-[0_0_40px_rgba(255,77,141,0.3)]
                        transition-shadow duration-300">
            {/* Video Placeholder - Replace src with actual video thumbnail */}
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="ConvoFlow Demo"
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40
                          hover:bg-black/30 transition-colors cursor-pointer group">
              <Button
                size="lg"
                className="!rounded-full !p-6 transform group-hover:scale-110 transition-transform"
              >
                <Play className="w-8 h-8" />
              </Button>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Natural Conversations', desc: 'AI-powered natural language processing' },
              { title: 'Real-Time Analytics', desc: 'Track performance and insights live' },
              { title: 'Multi-Channel Support', desc: 'Voice, chat, and messaging integration' }
            ].map((feature) => (
              <div key={feature.title} 
                   className="bg-white/5 rounded-lg p-6 border border-white/10
                            hover:bg-white/10 transition-colors">
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-body text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}