
const ChineseNetworkCapabilities = () => {
  const capabilities = [
    {
      title: 'Founding Partnerships',
      description: 'Leveraging our origins in Chinese IVD company development for preferential access',
      icon: '🏢',
      metric: '20+ Years',
      detail: 'Average partnership duration'
    },
    {
      title: 'Quality Standards Alignment',
      description: 'Ensuring Chinese manufacturer compliance with international quality requirements',
      icon: '🏆',
      metric: '99.5%',
      detail: 'Compliance success rate'
    },
    {
      title: 'Cost Optimization',
      description: 'Securing competitive solution access through strategic negotiation and volume planning',
      icon: '💰',
      metric: '35%',
      detail: 'Average cost reduction'
    },
    {
      title: 'Cultural Navigation',
      description: 'Bridging business culture differences to create seamless partnerships',
      icon: '🤝',
      metric: '140+',
      detail: 'Active partnerships'
    }
  ];

  const regions = [
    { name: 'Beijing & Northern China', partners: 45, specialties: ['IVD Equipment', 'Medical Imaging'] },
    { name: 'Shanghai & Eastern China', partners: 38, specialties: ['Biotechnology', 'Digital Health'] },
    { name: 'Guangzhou & Southern China', partners: 32, specialties: ['Medical Devices', 'Laboratory Equipment'] },
    { name: 'Chengdu & Western China', partners: 25, specialties: ['Pharmaceuticals', 'Surgical Instruments'] }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Chinese Network Access & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct Chinese manufacturer relationships and expertise built on founding partnerships
          </p>
        </div>

        {/* Key Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{capability.description}</p>
              <div className="border-t pt-4">
                <div className="text-2xl font-bold text-slate-600">{capability.metric}</div>
                <div className="text-xs text-gray-500">{capability.detail}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChineseNetworkCapabilities;
