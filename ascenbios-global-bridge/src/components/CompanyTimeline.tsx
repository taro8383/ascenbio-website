
const CompanyTimeline = () => {
  const milestones = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'AscenBio established with founding partnerships in Chinese IVD sector'
    },
    {
      year: '2016',
      title: 'First Major Project',
      description: 'Launched comprehensive technology transfer program in Latin America'
    },
    {
      year: '2018',
      title: 'Geographic Expansion',
      description: 'Extended operations to Southeast Asia and Eastern Europe'
    },
    {
      year: '2019',
      title: 'Bioproductos Latam',
      description: 'Launched flagship biotechnology park initiative'
    },
    {
      year: '2021',
      title: 'Digital Innovation',
      description: 'Implemented AI-driven supply chain optimization platform'
    },
    {
      year: '2023',
      title: 'Sustainability Focus',
      description: 'Launched green healthcare technology transfer program'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Expanding into precision medicine and digital health solutions'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A decade of building bridges between Chinese healthcare innovation and global markets
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Mobile: Year and Title stacked */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} mb-4 md:mb-0`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center md:block">
                      <div className="text-2xl font-bold text-slate-600 mb-2 px-4 py-2 bg-slate-50 rounded-lg md:bg-transparent md:p-0">
                        {milestone.year}
                      </div>
                      <div className="w-full border-t-2 border-slate-300 my-3 md:hidden"></div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 px-4 py-2 bg-primary-50 rounded-lg md:bg-transparent md:p-0">
                        {milestone.title}
                      </h3>
                      <div className="w-full border-t-2 border-slate-300 my-3"></div>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot - Mobile and Desktop */}
                <div className="relative md:absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg my-4 md:my-0"></div>
                
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
