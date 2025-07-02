
const QualityAssuranceFramework = () => {
  const qualitySteps = [
    {
      step: '1',
      title: 'Partner Qualification',
      description: 'Comprehensive assessment of manufacturing capabilities and quality systems',
      requirements: ['ISO certification verification', 'Facility audits', 'Process documentation review']
    },
    {
      step: '2',
      title: 'Quality System Integration',
      description: 'Alignment of partner quality processes with international standards',
      requirements: ['Quality manual development', 'Process standardization', 'Training implementation']
    },
    {
      step: '3',
      title: 'Continuous Monitoring',
      description: 'Ongoing quality oversight and performance measurement',
      requirements: ['Regular audits', 'Quality metrics tracking', 'Corrective action management']
    },
    {
      step: '4',
      title: 'Global Compliance',
      description: 'Ensuring adherence to international regulatory requirements',
      requirements: ['Regulatory mapping', 'Documentation maintenance', 'Compliance reporting']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Quality Assurance Framework
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Ensuring global standards across our entire partner network
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {qualitySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-b from-primary-lightest to-white p-6 rounded-lg border border-primary-very-light h-full">
                  <div className="w-12 h-12 bg-primary-medium text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{step.title}</h3>
                  <p className="text-primary-medium mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < qualitySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-very-light"></div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-lightest to-primary-very-light p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Quality Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-medium mb-2">99.5%</div>
                  <div className="text-sm text-primary-dark">Quality Compliance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-medium mb-2">48hrs</div>
                  <div className="text-sm text-primary-dark">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-medium mb-2">140+</div>
                  <div className="text-sm text-primary-dark">Certified Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-medium mb-2">24/7</div>
                  <div className="text-sm text-primary-dark">Quality Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssuranceFramework;
