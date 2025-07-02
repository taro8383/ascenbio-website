
const PartnershipSuccessStories = () => {
  const stories = [
    {
      title: 'Global Diagnostic Network Expansion',
      partner: 'Leading Chinese IVD Manufacturer',
      challenge: 'Entering 15 new international markets with regulatory compliance',
      solution: 'Comprehensive market entry strategy with regulatory navigation support',
      results: ['Successfully entered 15 markets in 18 months', '200% revenue growth', '95% regulatory approval rate'],
      timeline: '18 months',
      markets: 'Latin America, Southeast Asia, Africa'
    },
    {
      title: 'Medical Device Localization Success',
      partner: 'Chinese Medical Equipment Producer',
      challenge: 'Adapting monitoring systems for diverse healthcare environments',
      solution: 'Localization program with clinical validation and training',
      results: ['Deployed in 8 countries', '50,000+ patients monitored', '99.2% system reliability'],
      timeline: '24 months',
      markets: 'Middle East, Central Asia'
    },
    {
      title: 'Digital Health Platform Launch',
      partner: 'Chinese Healthcare IT Company',
      challenge: 'Scaling telemedicine platform for rural healthcare access',
      solution: 'Infrastructure development and healthcare provider training',
      results: ['Connected 500+ rural clinics', '1M+ patient consultations', '85% patient satisfaction'],
      timeline: '12 months',
      markets: 'Sub-Saharan Africa'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Partnership Success Stories
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Real-world examples of successful Chinese healthcare technology implementations
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <div key={index} className="bg-gradient-to-r from-primary-lightest to-primary-very-light p-8 rounded-2xl border border-primary-very-light">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{story.title}</h3>
                  <div className="mb-4">
                    <span className="text-sm text-gray-600 font-semibold">Partner: </span>
                    <span className="text-primary-medium">{story.partner}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-dark mb-2">Challenge</h4>
                    <p className="text-primary-medium">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark mb-2">Solution</h4>
                    <p className="text-primary-medium">{story.solution}</p>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-dark mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary-light rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-primary-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Timeline</div>
                      <div className="font-semibold text-primary-medium">{story.timeline}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Markets</div>
                      <div className="font-semibold text-primary-medium">{story.markets}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSuccessStories;
