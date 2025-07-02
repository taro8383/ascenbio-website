
const ValueProposition = () => {
  const propositions = [
    {
      title: 'Transform Healthcare Delivery in Emerging Markets',
      description: 'Strategic technology transfer programs that adapt Chinese innovations for local healthcare challenges',
      icon: '🏥'
    },
    {
      title: 'Access Leading Chinese Healthcare Technology',
      description: 'Direct partnerships with top-tier Chinese manufacturers providing cutting-edge medical solutions',
      icon: '🔬'
    },
    {
      title: 'Accelerate Market Entry with Local Expertise',
      description: 'Comprehensive market entry services backed by deep regional knowledge and regulatory expertise',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Value Proposition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging innovation gaps between Chinese healthcare technology and global market needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <div key={index} className="group relative bg-gradient-to-b from-primary-lightest to-white p-8 rounded-2xl border border-primary-very-light hover:shadow-xl transition-all duration-500 hover:-translate-y-4">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary-dark mb-4 group-hover:text-primary-medium transition-colors">
                {prop.title}
              </h3>
              
              <p className="text-primary-medium leading-relaxed">
                {prop.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-medium/5 to-primary-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
