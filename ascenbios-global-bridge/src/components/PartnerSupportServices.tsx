
const PartnerSupportServices = () => {
  const services = [
    {
      title: 'Market Entry Support',
      icon: '🌍',
      description: 'Comprehensive support for entering new international markets',
      features: ['Market research and analysis', 'Regulatory pathway mapping', 'Local partnership facilitation', 'Go-to-market strategy development']
    },
    {
      title: 'Regulatory Navigation',
      icon: '📋',
      description: 'Expert guidance through complex international regulatory landscapes',
      features: ['Regulatory compliance assessment', 'Documentation preparation', 'Authority liaison services', 'Certification process management']
    },
    {
      title: 'Distribution Network Development',
      icon: '🚀',
      description: 'Building and optimizing global distribution channels',
      features: ['Distributor identification and qualification', 'Logistics optimization', 'Inventory management systems', 'Performance monitoring']
    },
    {
      title: 'Training & Education Programs',
      icon: '🎓',
      description: 'Comprehensive training programs for partners and end users',
      features: ['Technical training curricula', 'Sales team development', 'Clinical education programs', 'Digital learning platforms']
    },
    {
      title: 'Technology Localization',
      icon: '⚙️',
      description: 'Adapting technologies for local market requirements',
      features: ['Cultural adaptation analysis', 'Technical specification modification', 'User interface localization', 'Clinical validation support']
    },
    {
      title: 'After-Sales Service Infrastructure',
      icon: '🔧',
      description: 'Comprehensive post-deployment support systems',
      features: ['Technical support networks', 'Maintenance and repair services', 'Spare parts management', 'Customer service training']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Partner Support Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end support ensuring partner success at every stage of global expansion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-b from-red-50 to-white p-6 rounded-2xl border border-red-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-slate-700 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Support Service Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">90%</div>
                <div className="text-sm opacity-90">Partner Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">65%</div>
                <div className="text-sm opacity-90">Faster Market Entry</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Availability</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">140+</div>
                <div className="text-sm opacity-90">Supported Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSupportServices;
