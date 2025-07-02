
const CrossCulturalExcellence = () => {
  const capabilities = [
    {
      title: 'Cultural Adaptation Expertise',
      description: 'Deep understanding of healthcare practices across diverse cultural contexts',
      examples: [
        'Traditional medicine integration protocols',
        'Cultural sensitivity in healthcare technology design',
        'Adaptation of user interfaces for local preferences'
      ]
    },
    {
      title: 'Multilingual Business Operations',
      description: 'Comprehensive language support for seamless international collaboration',
      examples: [
        'Contract negotiation in 12+ languages',
        'Technical documentation translation',
        'Regulatory submission preparation'
      ]
    },
    {
      title: 'Local Business Custom Navigation',
      description: 'Expert guidance through diverse business practices and relationship building',
      examples: [
        'Gift-giving and hospitality protocols',
        'Meeting and negotiation customs',
        'Long-term relationship development strategies'
      ]
    },
    {
      title: 'Regulatory Communication Protocols',
      description: 'Specialized communication strategies for diverse regulatory environments',
      examples: [
        'Government liaison protocols',
        'Regulatory submission formatting',
        'Compliance verification processes'
      ]
    }
  ];

  const testimonials = [];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cross-Cultural Business Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging cultural gaps for successful healthcare partnerships across diverse global markets
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {capability.description}
              </p>
              <ul className="space-y-2">
                {capability.examples.map((example, exIndex) => (
                  <li key={exIndex} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cultural Adaptation Examples */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Regional Business Adaptation Examples
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Latin America */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌎</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Latin America</h4>
              <p className="text-sm text-gray-600">
                Relationship-first approach with extended negotiation timelines and family business considerations
              </p>
            </div>

            {/* Africa */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Africa</h4>
              <p className="text-sm text-gray-600">
                Community consultation processes and traditional authority engagement in healthcare decisions
              </p>
            </div>

            {/* Asia */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌏</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Southeast Asia</h4>
              <p className="text-sm text-gray-600">
                Hierarchical decision-making respect and face-saving negotiation strategies
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CrossCulturalExcellence;
