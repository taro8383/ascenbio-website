
import PartnershipModelDiagrams from "./PartnershipModelDiagrams";

const StrategicPartnerships = () => {
  const capabilities = [
    {
      title: 'Joint Ventures',
      description: 'Structuring strategic local market partnerships that maximize mutual benefits',
      process: ['Market Analysis', 'Partner Identification', 'Due Diligence', 'Structure Design', 'Implementation']
    },
    {
      title: 'OEM Relationships',
      description: 'Facilitating original equipment manufacturer arrangements optimized for market conditions',
      process: ['Technical Assessment', 'Quality Alignment', 'Contract Negotiation', 'Integration', 'Quality Control']
    },
    {
      title: 'Technology Transfer',
      description: 'Implementing knowledge sharing programs ensuring sustainable capability development',
      process: ['Knowledge Audit', 'Transfer Planning', 'Training Design', 'Implementation', 'Validation']
    },
    {
      title: 'Market Entry Support',
      description: 'Providing complete business planning and negotiation services for new market access',
      process: ['Market Research', 'Strategy Development', 'Stakeholder Mapping', 'Entry Execution', 'Optimization']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Strategic Partnerships & Business Development</h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Comprehensive business development architecture enabling sustainable market expansion
          </p>
        </div>

        <div className="space-y-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-primary-lightest rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{capability.title}</h3>
                  <p className="text-primary-medium mb-6">{capability.description}</p>
                  
                  {/* Process Flow */}
                  <div className="flex flex-wrap gap-2">
                    {capability.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <span className="bg-primary-medium text-white text-xs px-3 py-1 rounded-full">
                          {stepIndex + 1}. {step}
                        </span>
                        {stepIndex < capability.process.length - 1 && (
                          <span className="mx-2 text-primary-light">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <PartnershipModelDiagrams type={capability.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Partnership Formation Process */}
        <div className="mt-16 bg-gradient-to-r from-primary-dark to-primary-medium rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Partnership Formation Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Initial Contact', 'Assessment', 'Negotiation', 'Agreement', 'Implementation'].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold mb-2">{phase}</h4>
                <div className="text-sm text-primary-lightest">
                  {index === 0 && '2-4 weeks'}
                  {index === 1 && '4-6 weeks'}
                  {index === 2 && '6-8 weeks'}
                  {index === 3 && '2-3 weeks'}
                  {index === 4 && '12-16 weeks'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerships;
