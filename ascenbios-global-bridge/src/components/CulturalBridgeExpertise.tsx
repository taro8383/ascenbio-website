
const CulturalBridgeExpertise = () => {
  const culturalAspects = [
    {
      western: 'Direct Communication',
      chinese: 'Contextual Communication',
      bridge: 'Structured dialogue protocols that respect both direct efficiency and contextual relationship building',
      icon: '💬'
    },
    {
      western: 'Individual Decision Making',
      chinese: 'Consensus Building',
      bridge: 'Hybrid decision frameworks incorporating both individual accountability and group harmony',
      icon: '🤝'
    },
    {
      western: 'Contract-Focused Relationships',
      chinese: 'Trust-Based Relationships',
      bridge: 'Comprehensive agreements that honor both legal precision and relationship cultivation',
      icon: '📋'
    },
    {
      western: 'Short-Term ROI Focus',
      chinese: 'Long-Term Vision',
      bridge: 'Balanced planning that achieves immediate milestones while building sustainable partnerships',
      icon: '📈'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cultural Bridge Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigating cross-cultural business dynamics for successful international partnerships
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {culturalAspects.map((aspect, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                <span className="text-4xl">{aspect.icon}</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Western Approach</h3>
                  <p className="text-blue-700">{aspect.western}</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-red-50 rounded-lg border-2 border-dashed border-gray-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AscenBio Bridge</h3>
                  <p className="text-gray-700">{aspect.bridge}</p>
                </div>
                
                <div className="text-center p-6 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-bold text-red-900 mb-2">Chinese Approach</h3>
                  <p className="text-red-700">{aspect.chinese}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-slate-700 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Cultural Navigation Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Partnership Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-90">Years Cross-Cultural Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">140+</div>
                <div className="text-sm opacity-90">Successful Cultural Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalBridgeExpertise;
