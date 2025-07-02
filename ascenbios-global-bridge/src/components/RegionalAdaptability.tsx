
const RegionalAdaptability = () => {
  const adaptations = [
    {
      region: 'Tropical Climates',
      challenge: 'High humidity and temperature variations',
      solution: 'Enhanced environmental protection and climate-resistant packaging',
      example: 'Modified diagnostic equipment housing for Southeast Asian markets',
      image: '🌴'
    },
    {
      region: 'Rural Infrastructure',
      challenge: 'Limited power supply and connectivity',
      solution: 'Solar-powered alternatives and offline-capable systems',
      example: 'Battery-operated portable diagnostic units for remote African clinics',
      image: '🏔️'
    },
    {
      region: 'Regulatory Frameworks',
      challenge: 'Diverse approval processes and standards',
      solution: 'Modular compliance approach with region-specific configurations',
      example: 'Adaptable software interfaces meeting local data privacy requirements',
      image: '📋'
    },
    {
      region: 'Cultural Healthcare Practices',
      challenge: 'Integration with traditional medicine approaches',
      solution: 'Hybrid systems respecting local healthcare customs',
      example: 'Diagnostic systems with traditional medicine integration protocols',
      image: '🏛️'
    },
    {
      region: 'Language & Interface',
      challenge: 'Multiple languages and literacy levels',
      solution: 'Intuitive interfaces with multilingual and visual guidance',
      example: 'Icon-based medical device interfaces with voice guidance in local languages',
      image: '🗣️'
    },
    {
      region: 'Economic Conditions',
      challenge: 'Varying healthcare budgets and payment models',
      solution: 'Flexible pricing and financing options adapted to local economics',
      example: 'Tiered pricing structures and leasing options for equipment access',
      image: '💰'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Regional Adaptability Showcase
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Demonstrating how Chinese healthcare technologies are successfully adapted for diverse global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adaptations.map((adaptation, index) => (
            <div key={index} className="bg-primary-lightest p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{adaptation.image}</div>
                <h3 className="text-lg font-bold text-primary-dark">{adaptation.region}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-primary-medium text-sm">Challenge:</span>
                  <p className="text-primary-medium text-sm mt-1">{adaptation.challenge}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-primary-light text-sm">Solution:</span>
                  <p className="text-primary-medium text-sm mt-1">{adaptation.solution}</p>
                </div>
                
                <div className="border-t border-primary-very-light pt-4">
                  <span className="font-semibold text-gray-600 text-sm">Example:</span>
                  <p className="text-primary-dark text-sm mt-1 italic">{adaptation.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gradient-to-r from-primary-lightest to-primary-very-light p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
            Adaptation Success Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-medium mb-2">95%</div>
              <div className="text-sm text-primary-dark">Successful Local Adaptation Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-medium mb-2">45</div>
              <div className="text-sm text-primary-dark">Regional Configurations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-medium mb-2">12</div>
              <div className="text-sm text-primary-dark">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-medium mb-2">30%</div>
              <div className="text-sm text-primary-dark">Cost Reduction Through Adaptation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalAdaptability;
