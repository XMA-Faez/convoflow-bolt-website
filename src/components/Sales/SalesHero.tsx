import React from 'react';
import { Bot, Zap, DollarSign } from 'lucide-react';
import FormButton from '../ui/FormButton';
import AnimatedGradientText from '../ui/AnimatedGradientText';
import ShiningText from '../ui/ShiningText';

export default function SalesHero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#FF4D8D]/20 via-background-primary to-background-primary" />
        <div className="absolute inset-0 grid-cyberpunk opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-glow flex flex-col items-center">
            <span>
              <AnimatedGradientText text="SuperCharge" />
              <span className="text-white"> Your Sales</span>
            </span>
            <span className="whitespace-nowrap mt-2">With AI-Powered Automation</span>
          </h1>
          <p className="text-text-body text-lg md:text-xl mb-8">
            <ShiningText>
              Boost Revenue by 3x with an AI Army that Generates, Qualifies, & Closes Deals 24/7
            </ShiningText>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <FormButton size="lg" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Bot,
              stat: '90%',
              text: 'Inbound Sales'
            },
            {
              icon: Zap,
              stat: '24/7',
              text: 'Automated Sales Coverage'
            },
            {
              icon: DollarSign,
              stat: '100%',
              text: 'Lead Qualification Rate'
            }
          ].map((item) => (
            <div key={item.text} className="bg-white/5 rounded-xl p-6 text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] p-2.5">
                <item.icon className="h-full w-full text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
              <div className="text-white">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}