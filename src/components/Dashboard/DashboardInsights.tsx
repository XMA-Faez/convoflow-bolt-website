import React from 'react';

export default function DashboardInsights() {
  return (
    <section className="py-20 bg-[#0B0B10]" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Powerful Dashboard Insights
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Get a comprehensive view of your business performance with our intuitive dashboard. Track key metrics, analyze trends, and make data-driven decisions.
            </p>
            <ul className="space-y-4">
              {[
                'Real-time sales tracking and forecasting',
                'Customer engagement metrics',
                'Team performance analytics',
                'Revenue and growth insights'
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-gradient-to-r from-[#FF4D8D] to-[#E7447F] flex-shrink-0 flex items-center justify-center text-white text-sm">✓</span>
                  <span className="ml-3 text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,77,141,0.3)]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Dashboard Analytics"
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}