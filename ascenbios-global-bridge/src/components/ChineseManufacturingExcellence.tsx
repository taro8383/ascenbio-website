
const ChineseManufacturingExcellence = () => {
  const capabilities = [
    {
      title: 'Advanced Manufacturing Facilities',
      description: 'State-of-the-art production facilities with automated systems',
      metric: '95% automation rate',
      icon: '🏭'
    },
    {
      title: 'Quality Control Systems',
      description: 'Comprehensive quality management with real-time monitoring',
      metric: '99.8% quality compliance',
      icon: '✅'
    },
    {
      title: 'Production Scale',
      description: 'Massive production capacity serving global demand',
      metric: '10M+ units annually',
      icon: '📈'
    },
    {
      title: 'Innovation Centers',
      description: 'Dedicated R&D facilities for continuous improvement',
      metric: '50+ patents yearly',
      icon: '💡'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            World-Class Manufacturing Excellence
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Partnering with China's most advanced healthcare manufacturing facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-b from-primary-lightest to-white rounded-lg border border-primary-very-light">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{capability.title}</h3>
              <p className="text-primary-medium mb-4">{capability.description}</p>
              <div className="text-2xl font-bold text-primary-light">{capability.metric}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-medium to-primary-dark text-white p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Manufacturing Partnership Standards</h3>
            <p className="text-lg opacity-90 mb-6">
              Every manufacturing partner in our network meets stringent quality, capacity, and innovation requirements
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">ISO 13485</div>
                <div className="text-sm opacity-80">Medical Device Quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">FDA Compliant</div>
                <div className="text-sm opacity-80">US Market Ready</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">CE Certified</div>
                <div className="text-sm opacity-80">European Standards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChineseManufacturingExcellence;
