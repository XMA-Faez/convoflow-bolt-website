import React from 'react';
import AnimatedGradientText from '../ui/AnimatedGradientText';
import AnimatedUnderline from '../ui/AnimatedUnderline';

export default function HeroTitle() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-glow">
        <div className="flex flex-col items-center">
          {/* First Line - SuperCharge Your Sales */}
          <div className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-4 opacity-0 animate-fade-slide-up">
            <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-3">
              <div className="relative">
                <AnimatedGradientText text="SuperCharge" />
                <AnimatedUnderline />
              </div>
              <div className="relative">
                <span className="whitespace-nowrap">Your Sales</span>
                <AnimatedUnderline className="animation-delay-1000" />
              </div>
            </div>
          </div>
          
          {/* Second Line - With AI-Powered Automation */}
          <div className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl mt-1 sm:mt-2 opacity-0 animate-fade-slide-up animation-delay-500">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <span className="relative">
                <span>With</span>
                <AnimatedUnderline className="animation-delay-1500" />
              </span>
              <span className="relative">
                <span className="whitespace-nowrap">AI-Powered</span>
                <AnimatedUnderline className="animation-delay-2000" />
              </span>
              <span className="relative">
                <span className="whitespace-nowrap">Automation</span>
                <AnimatedUnderline className="animation-delay-2500" />
              </span>
            </div>
          </div>
        </div>
      </h1>
      
      <p className="text-text-body text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 px-4 opacity-0 animate-fade-slide-up animation-delay-1000">
        Convoflow simplifies how you connect, qualify, and convert leads with human-like AI calling agents that work 24/7
      </p>
    </div>
  );
}