import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-[#7A1DCB] via-[#0B0B10] to-[#0B0B10] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImdyYWQiIGN4PSIxMDAlIiBjeT0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzdBMURDQiIgc3RvcC1vcGFjaXR5PSIwLjQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwQjBCMTAiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Transform How You Efficiently<br />Manage Your Sales
          </h1>
          <p className="text-[#B8B8C6] text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            Track Conversations, Boost Sales Performance, and Empower Your Business Growth with a Seamless CRM Solution
          </p>
          <button className="bg-gradient-to-r from-[#A646FF] to-[#7A1DCB] text-white px-8 py-4 rounded-lg text-lg font-bold shadow-[0_0_15px_rgba(166,70,255,0.5)] hover:shadow-[0_0_25px_rgba(166,70,255,0.6)] transition-shadow hover:scale-105 transform duration-300">
            Get Started
          </button>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-xl shadow-[0_0_30px_rgba(122,29,203,0.3)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}