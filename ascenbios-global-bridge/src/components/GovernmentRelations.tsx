
const GovernmentRelations = () => {
  const capabilities = [
    {
      title: 'Government Partnership Models',
      description: 'Structuring effective public-private collaborations for healthcare initiatives',
      icon: '🤝',
      approaches: ['Joint ventures', 'Service contracts', 'Technology licensing', 'Build-operate-transfer']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Navigating complex approval processes across diverse jurisdictions',
      icon: '📋',
      approaches: ['Regulatory mapping', 'Compliance strategy', 'Documentation support', 'Approval tracking']
    },
    {
      title: 'Policy Engagement',
      description: 'Contributing to healthcare policy development through evidence-based advocacy',
      icon: '📊',
      approaches: ['Policy analysis', 'Stakeholder engagement', 'Evidence compilation', 'Advocacy campaigns']
    },
    {
      title: 'Public Procurement',
      description: 'Managing tender processes and government contracting requirements',
      icon: '📄',
      approaches: ['Tender preparation', 'Proposal development', 'Contract negotiation', 'Performance management']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Government Relations & Regulatory Navigation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Public sector partnership and compliance expertise for seamless healthcare implementation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{capability.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {capability.approaches.map((approach, approachIndex) => (
                  <div key={approachIndex} className="bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-sm text-gray-700">{approach}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GovernmentRelations;
