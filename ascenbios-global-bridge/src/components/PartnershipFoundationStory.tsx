
const PartnershipFoundationStory = () => {
  const milestones = [
    {
      year: '2005',
      title: 'Foundation Partnership',
      description: 'Established initial collaboration with leading Chinese IVD manufacturer',
      achievement: 'First technology transfer project'
    },
    {
      year: '2008',
      title: 'Network Expansion',
      description: 'Expanded partnership network to 12 strategic Chinese manufacturers',
      achievement: 'Multi-regional market entry'
    },
    {
      year: '2012',
      title: 'Strategic Integration',
      description: 'Developed comprehensive partnership framework and quality protocols',
      achievement: 'ISO certification alignment'
    },
    {
      year: '2016',
      title: 'Global Scaling',
      description: 'Scaled partnership network to 85+ manufacturers across all categories',
      achievement: 'Continental distribution network'
    },
    {
      year: '2020',
      title: 'Innovation Leadership',
      description: 'Launched joint R&D initiatives and technology innovation programs',
      achievement: 'Digital health platform development'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Achieved 140+ partner network with comprehensive global coverage',
      achievement: 'Industry-leading partnership satisfaction'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary-lightest to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Built on Founding Partnerships
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Two decades of trust, collaboration, and shared vision with China's healthcare innovation leaders
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-light via-primary-medium to-primary-dark"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-primary-very-light">
                      <div className="text-2xl font-bold text-primary-medium mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-primary-dark mb-3">{milestone.title}</h3>
                      <p className="text-primary-medium mb-4">{milestone.description}</p>
                      <div className="text-sm text-gray-600 bg-primary-lightest px-3 py-1 rounded-full inline-block">
                        {milestone.achievement}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-primary-light to-primary-medium rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipFoundationStory;
