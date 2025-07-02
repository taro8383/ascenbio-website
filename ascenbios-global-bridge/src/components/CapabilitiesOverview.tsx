
const CapabilitiesOverview = () => {
  const capabilities = [
    { id: 1, title: 'Clinical Excellence', category: 'clinical', maturity: 95 },
    { id: 2, title: 'Strategic Partnerships', category: 'business', maturity: 90 },
    { id: 3, title: 'Chinese Network', category: 'network', maturity: 98 },
    { id: 4, title: 'Logistics Architecture', category: 'logistics', maturity: 88 },
    { id: 5, title: 'Digital Infrastructure', category: 'technology', maturity: 85 },
    { id: 6, title: 'Government Relations', category: 'regulatory', maturity: 92 },
    { id: 7, title: 'Human Resources', category: 'people', maturity: 87 },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      clinical: 'from-primary-medium to-primary-light',
      business: 'from-primary-light to-primary-very-light',
      network: 'from-primary-dark to-primary-medium',
      logistics: 'from-primary-medium to-primary-light',
      technology: 'from-primary-light to-primary-very-light',
      regulatory: 'from-primary-dark to-primary-medium',
      people: 'from-primary-medium to-primary-light',
    };
    return colors[category as keyof typeof colors] || 'from-primary-medium to-primary-light';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Capabilities Overview Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Overview of our comprehensive healthcare solution capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="group relative bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${getCategoryColor(capability.category)} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-white font-bold">{capability.id}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-medium transition-colors">
                {capability.title}
              </h3>
              
              <span className="inline-block px-2 py-1 bg-primary-lightest text-primary-dark text-xs rounded-full capitalize mt-4">
                {capability.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesOverview;
