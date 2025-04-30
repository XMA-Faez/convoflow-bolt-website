import React from 'react';

const INTEGRATIONS = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zendesk', category: 'Support' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Microsoft Teams', category: 'Communication' },
  { name: 'Zapier', category: 'Automation' }
];

export default function IntegrationSection() {
  return (
    <section className="py-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Seamless Integrations
          </h2>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Connect with your favorite tools and platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INTEGRATIONS.map((integration) => (
            <div key={integration.name} 
                 className="bg-white/5 rounded-lg p-4 text-center border border-white/10
                          hover:bg-white/10 transition-colors">
              <div className="text-white font-semibold mb-1">{integration.name}</div>
              <div className="text-text-body text-sm">{integration.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}