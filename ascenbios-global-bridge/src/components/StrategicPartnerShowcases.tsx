
const StrategicPartnerShowcases = () => {
  const partners = [
    {
      name: 'Beijing Medical Tech Solutions',
      category: 'IVD Manufacturing',
      description: 'Leading manufacturer of rapid diagnostic tests with ISO 13485 certification',
      achievements: ['50M+ tests annually', 'FDA approved portfolio', '15+ countries served'],
      partnership_since: '2019'
    },
    {
      name: 'Shanghai Healthcare Innovations',
      category: 'Digital Health',
      description: 'Pioneer in AI-powered diagnostic imaging and telemedicine platforms',
      achievements: ['2M+ diagnoses processed', 'Cloud-based infrastructure', '99.7% uptime'],
      partnership_since: '2020'
    },
    {
      name: 'Guangzhou Biotech Alliance',
      category: 'Biotechnology',
      description: 'Advanced molecular diagnostics and personalized medicine solutions',
      achievements: ['Patent portfolio: 200+', 'Research partnerships: 25+', 'Clinical trials: 40+'],
      partnership_since: '2018'
    }
  ];

  return (
    <section className="py-20 bg-primary-lightest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Strategic Partner Showcases
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Highlighting key partnerships that exemplify our collaborative approach to global healthcare innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary-very-light">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-primary-lightest text-primary-dark px-3 py-1 rounded-full font-medium">
                    {partner.category}
                  </span>
                  <span className="text-xs text-primary-medium">
                    Since {partner.partnership_since}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{partner.name}</h3>
                <p className="text-primary-medium leading-relaxed">{partner.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary-dark">Key Achievements:</h4>
                {partner.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-center text-sm text-primary-medium">
                    <div className="w-2 h-2 bg-primary-light rounded-full mr-3 flex-shrink-0"></div>
                    {achievement}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary-very-light">
                <button className="text-primary-medium hover:text-primary-dark font-medium text-sm transition-colors">
                  View Partnership Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-medium to-primary-dark text-white p-8 rounded-2xl">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Partner Excellence Standards</h3>
            <p className="text-lg opacity-90 mb-6">
              Every partner in our network meets rigorous quality, innovation, and compliance standards
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">140+</div>
                <div className="text-sm opacity-80">Verified Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-80">Quality Compliance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-80">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerShowcases;
