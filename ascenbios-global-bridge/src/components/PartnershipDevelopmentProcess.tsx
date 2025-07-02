
const PartnershipDevelopmentProcess = () => {
  const processSteps = [
    {
      phase: 'Discovery & Assessment',
      duration: '2-4 weeks',
      description: 'Comprehensive evaluation of partnership potential and strategic alignment',
      activities: [
        'Initial partnership inquiry and screening',
        'Technology and market assessment',
        'Strategic fit evaluation',
        'Preliminary due diligence'
      ],
      deliverables: 'Partnership feasibility report and initial recommendations'
    },
    {
      phase: 'Deep Due Diligence',
      duration: '4-6 weeks',
      description: 'Thorough analysis of capabilities, compliance, and market opportunities',
      activities: [
        'Financial and operational assessment',
        'Quality system evaluation',
        'Regulatory compliance review',
        'Market opportunity analysis'
      ],
      deliverables: 'Comprehensive due diligence report and partnership structure proposal'
    },
    {
      phase: 'Agreement Development',
      duration: '6-8 weeks',
      description: 'Structured negotiation and agreement development process',
      activities: [
        'Terms and conditions negotiation',
        'Intellectual property arrangements',
        'Commercial structure development',
        'Risk mitigation planning'
      ],
      deliverables: 'Executed partnership agreements and implementation roadmap'
    },
    {
      phase: 'Implementation & Launch',
      duration: '8-12 weeks',
      description: 'Systematic deployment of partnership initiatives and market entry activities',
      activities: [
        'Operational setup and integration',
        'Team training and development',
        'Market entry strategy execution',
        'Performance monitoring systems'
      ],
      deliverables: 'Operational partnership with established market presence'
    },
    {
      phase: 'Growth & Optimization',
      duration: 'Ongoing',
      description: 'Continuous partnership development and performance optimization',
      activities: [
        'Performance monitoring and analysis',
        'Market expansion planning',
        'Technology development collaboration',
        'Strategic partnership evolution'
      ],
      deliverables: 'Sustained partnership growth and market leadership'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partnership Development Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Systematic approach to building successful, long-term strategic partnerships
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div>
                    <div className="flex items-center mb-4">
                      <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                        <p className="text-sm text-red-600 font-semibold">{step.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Deliverables</h4>
                    <div className="bg-gradient-to-r from-red-50 to-slate-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">{step.deliverables}</p>
                    </div>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-red-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-slate-700 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Partnership Development Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Partnership Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3-6</div>
                <div className="text-sm opacity-90">Months Average Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">140+</div>
                <div className="text-sm opacity-90">Successful Partnerships</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipDevelopmentProcess;
