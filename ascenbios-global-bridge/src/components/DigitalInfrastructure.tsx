
const DigitalInfrastructure = () => {
  const capabilities = [
    {
      title: 'Custom Portal Development',
      description: 'Creating tailored digital interfaces for specific market needs',
      features: ['Multi-language support', 'Role-based access', 'Real-time analytics', 'Mobile optimization']
    },
    {
      title: 'Market Research Integration',
      description: 'Conducting comprehensive needs analysis to inform technical specifications',
      features: ['User behavior analysis', 'Market trend integration', 'Competitive analysis', 'Requirement gathering']
    },
    {
      title: 'Implementation Frameworks',
      description: 'Developing technical roadmaps for phased digital deployment',
      features: ['Agile methodology', 'Risk mitigation', 'Quality assurance', 'Performance monitoring']
    },
    {
      title: 'Rapid Deployment Tools',
      description: 'Utilizing accelerated implementation tools for faster market entry',
      features: ['Pre-built modules', 'Automated testing', 'Cloud infrastructure', 'Scalable architecture']
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Infrastructure Development</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare-specific digital infrastructure solutions enabling rapid deployment and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
              <p className="text-gray-600 mb-6">{capability.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {capability.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-slate-500 rounded-full mr-2"></div>
                    {feature}
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

export default DigitalInfrastructure;
