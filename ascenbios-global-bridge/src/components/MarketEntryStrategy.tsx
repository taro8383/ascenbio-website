
const MarketEntryStrategy = () => {
  const strategies = [
    {
      step: 1,
      title: 'Market Research & Needs Assessment',
      description: 'Comprehensive analysis of healthcare market dynamics, regulatory landscape, and unmet needs',
      duration: '2-3 months',
      deliverables: ['Market size analysis', 'Competitive landscape', 'Regulatory requirements', 'Stakeholder mapping']
    },
    {
      step: 2,
      title: 'Regulatory Landscape Mapping',
      description: 'Detailed mapping of approval pathways, compliance requirements, and regulatory timeline',
      duration: '1-2 months',
      deliverables: ['Regulatory roadmap', 'Compliance checklist', 'Documentation requirements', 'Timeline projections']
    },
    {
      step: 3,
      title: 'Partner Identification & Qualification',
      description: 'Strategic identification and vetting of local partners, distributors, and key stakeholders',
      duration: '2-4 months',
      deliverables: ['Partner shortlist', 'Due diligence reports', 'Partnership proposals', 'Contract frameworks']
    },
    {
      step: 4,
      title: 'Initial Market Testing & Validation',
      description: 'Pilot implementations to validate market fit and refine approach before full deployment',
      duration: '3-6 months',
      deliverables: ['Pilot results', 'Market feedback', 'Product adaptations', 'Implementation learnings']
    },
    {
      step: 5,
      title: 'Phased Implementation Strategy',
      description: 'Structured rollout plan with defined milestones, resource allocation, and risk mitigation',
      duration: '6-12 months',
      deliverables: ['Implementation roadmap', 'Resource plan', 'Risk assessment', 'Success metrics']
    },
    {
      step: 6,
      title: 'Scaling & Sustainability Planning',
      description: 'Long-term growth strategy with local capacity building and sustainable operations model',
      duration: 'Ongoing',
      deliverables: ['Growth strategy', 'Sustainability plan', 'Local capacity building', 'Performance monitoring']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Market Entry Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach to successful healthcare market expansion, refined through 20+ market entries
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-300 to-gray-300 hidden md:block"></div>
            
            {/* Mobile timeline line */}
            <div className="absolute left-6 w-1 h-full bg-gradient-to-b from-slate-300 to-gray-300 md:hidden"></div>
            
            {strategies.map((strategy, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row md:items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot - properly connected on mobile */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-slate-600 rounded-full border-4 border-white shadow-lg z-10 -ml-3"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-10`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-8 bg-slate-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 ${index % 2 !== 0 ? 'order-2 ml-3 mr-0' : ''}`}>
                        {strategy.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 flex-1">
                        {strategy.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                    
                    <div className="text-sm">
                      <div className="text-slate-600 font-semibold mb-2">
                        Duration: {strategy.duration}
                      </div>
                      
                      <div>
                        <span className="text-slate-600 font-semibold">Key Deliverables:</span>
                        <ul className="mt-1 space-y-1">
                          {strategy.deliverables.map((deliverable, dIndex) => (
                            <li key={dIndex} className="text-gray-600 text-xs flex items-center">
                              <div className="w-1 h-1 bg-slate-400 rounded-full mr-2"></div>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">85%</div>
            <div className="text-sm text-gray-600">Market Entry Success Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">12</div>
            <div className="text-sm text-gray-600">Average Months to Market</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">40%</div>
            <div className="text-sm text-gray-600">Time Reduction vs Industry</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">95%</div>
            <div className="text-sm text-gray-600">Partner Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketEntryStrategy;
