
const FutureChineseHealthcareInnovation = () => {
  const innovations = [
    {
      category: 'Artificial Intelligence & Machine Learning',
      trends: ['AI-powered diagnostic imaging', 'Predictive healthcare analytics', 'Automated clinical decision support'],
      timeline: '2024-2026',
      impact: 'Revolutionary diagnostic accuracy and speed',
      partners: '15+ AI-focused partnerships'
    },
    {
      category: 'Digital Health Platforms',
      trends: ['Integrated telemedicine ecosystems', 'Blockchain health records', 'IoT patient monitoring'],
      timeline: '2024-2025',
      impact: 'Universal healthcare accessibility',
      partners: '25+ digital health collaborations'
    },
    {
      category: 'Precision Medicine',
      trends: ['Genomic medicine advancement', 'Personalized treatment protocols', 'Pharmacogenomics applications'],
      timeline: '2025-2027',
      impact: 'Tailored healthcare for individual patients',
      partners: '20+ precision medicine initiatives'
    },
    {
      category: 'Biotechnology Innovation',
      trends: ['Advanced therapeutics development', 'Regenerative medicine solutions', 'Novel drug delivery systems'],
      timeline: '2025-2028',
      impact: 'Next-generation treatment modalities',
      partners: '30+ biotech collaborations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Future of Chinese Healthcare Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Positioning at the forefront of tomorrow's healthcare breakthroughs
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {innovations.map((innovation, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{innovation.category}</h3>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Emerging Trends</h4>
                    <ul className="space-y-2">
                      {innovation.trends.map((trend, trendIndex) => (
                        <li key={trendIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{trend}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-slate-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Expected Impact</h4>
                    <p className="text-gray-700">{innovation.impact}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-500 mb-1">Timeline</div>
                      <div className="font-semibold text-red-600">{innovation.timeline}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-500 mb-1">Active Partnerships</div>
                      <div className="font-semibold text-slate-600">{innovation.partners}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-slate-700 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Innovation Investment Commitment</h3>
            <p className="text-lg opacity-90 mb-8">
              Dedicated resources ensuring our partners stay at the cutting edge of healthcare innovation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-sm opacity-80">Annual R&D Investment</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Innovation Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-80">Technology Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureChineseHealthcareInnovation;
