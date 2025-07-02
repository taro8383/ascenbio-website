
const LogisticsArchitecture = () => {
  const capabilities = [
    {
      title: 'Strategic Hub Development',
      description: 'Creating optimized distribution centers in key regional locations',
      features: ['Multi-modal transport access', 'Cold chain capabilities', 'Regulatory compliance zones'],
      savings: '40% reduction in delivery time'
    },
    {
      title: 'Tax-Optimized Operations',
      description: 'Designing fiscal efficiency into logistics operations',
      features: ['Free trade zone utilization', 'Duty optimization', 'Transfer pricing compliance'],
      savings: '25% reduction in total costs'
    },
    {
      title: 'Supply Chain Architecture',
      description: 'Building backup inventory and rapid response distribution models',
      features: ['Redundant inventory systems', '24/7 monitoring', 'Emergency response protocols'],
      savings: '99.8% uptime guarantee'
    },
    {
      title: 'Regional Coverage Planning',
      description: 'Developing continental logistics networks for maximum market reach',
      features: ['Last-mile delivery', 'Regional partnerships', 'Cross-border efficiency'],
      savings: '95% population coverage'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Logistics & Distribution Architecture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global logistics and distribution network design optimized for healthcare delivery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
              <p className="text-gray-600 mb-6">{capability.description}</p>
              
              <div className="space-y-3 mb-6">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-slate-500">
                <div className="text-sm text-gray-600">Key Benefit:</div>
                <div className="font-semibold text-slate-700">{capability.savings}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsArchitecture;
