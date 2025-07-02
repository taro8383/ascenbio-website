const GlobalSupplyChain = () => {
  const hubs = [];

  const capabilities = [
    {
      title: 'Strategic Hub Development',
      description: 'Optimized distribution centers in key regional locations for maximum efficiency',
      features: ['Location analysis', 'Infrastructure planning', 'Regional optimization']
    },
    {
      title: 'Tax-Optimized Operations',
      description: 'Fiscal efficiency designed into logistics operations for cost optimization',
      features: ['Tax planning', 'Duty optimization', 'Compliance management']
    },
    {
      title: 'Supply Chain Architecture',
      description: 'Backup inventory and rapid response distribution models for reliability',
      features: ['Redundancy planning', 'Risk mitigation', 'Emergency protocols']
    },
    {
      title: 'Regional Coverage Planning',
      description: 'Continental logistics networks designed for maximum market reach',
      features: ['Coverage optimization', 'Network design', 'Scalability planning']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global Supply Chain Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless healthcare supply chain management with strategic distribution hubs worldwide
          </p>
        </div>

        {/* Supply Chain Flow Visualization */}
        <div className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              End-to-End Supply Chain Flow
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
              {/* Manufacturing */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🏭</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Manufacturing</h4>
                <p className="text-sm text-gray-600">Chinese partner facilities with quality oversight</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-slate-400 text-2xl">→</div>

              {/* Quality Control */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Quality Control</h4>
                <p className="text-sm text-gray-600">Comprehensive testing and certification</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-slate-400 text-2xl">→</div>

              {/* Regional Hubs */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Regional Hubs</h4>
                <p className="text-sm text-gray-600">Strategic distribution centers worldwide</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block text-slate-400 text-2xl">→</div>

              {/* Last Mile */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Final Delivery</h4>
                <p className="text-sm text-gray-600">Healthcare facilities and end users</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {hubs.map((hub, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{hub.name}</h3>
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                  {hub.region}
                </span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Core Capabilities:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {hub.capabilities.map((capability, capIndex) => (
                      <span key={capIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Coverage Area:</span>
                  <p className="text-gray-600 mt-1">{hub.coverage}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Specialties:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {hub.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {capability.description}
              </p>
              <ul className="space-y-2">
                {capability.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSupplyChain;
