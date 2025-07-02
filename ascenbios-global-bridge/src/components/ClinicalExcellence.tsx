
const ClinicalExcellence = () => {
  const capabilities = [
    {
      title: 'Multi-Country Trials',
      description: 'Conducting validation studies across diverse markets to ensure global applicability',
      icon: '🌍'
    },
    {
      title: 'Regulatory Standards',
      description: 'Navigating international compliance frameworks to ensure certifiable solutions',
      icon: '✅'
    },
    {
      title: 'Quality Assurance',
      description: 'Implementing rigorous testing and validation protocols exceeding industry standards',
      icon: '🔬'
    },
    {
      title: 'Clinical Documentation',
      description: 'Generating comprehensive evidence packages supporting healthcare claims',
      icon: '📋'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Clinical Excellence & Validation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven clinical expertise and validation methodologies ensuring global healthcare standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{capability.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClinicalExcellence;
