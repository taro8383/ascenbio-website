
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

        {/* Regulatory Approval Pathway Visualization */}
        <div className="bg-gradient-to-r from-slate-700 to-gray-700 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Regulatory Approval Pathway</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { phase: 'Pre-submission', duration: '2-4 weeks', description: 'Initial consultation and documentation' },
              { phase: 'Application', duration: '4-6 weeks', description: 'Formal submission and review' },
              { phase: 'Technical Review', duration: '8-12 weeks', description: 'Detailed technical assessment' },
              { phase: 'Approval', duration: '2-4 weeks', description: 'Final approval and certification' },
              { phase: 'Market Entry', duration: '1-2 weeks', description: 'Commercial launch clearance' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold mb-2">{step.phase}</h4>
                <div className="text-sm text-slate-300 mb-2">{step.duration}</div>
                <p className="text-xs text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-slate-600 px-6 py-3 rounded-lg">
              <div className="text-sm">
                <span className="font-semibold">Average Time Reduction:</span> 40% faster than industry standard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentRelations;
