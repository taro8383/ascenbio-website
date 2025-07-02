
const ResearchDevelopmentCollaboration = () => {
  const collaborations = [
    {
      title: 'Joint Innovation Labs',
      description: 'Collaborative research facilities focusing on breakthrough healthcare technologies',
      achievements: ['15 joint patents filed', '8 breakthrough innovations', '25+ research projects'],
      partners: 'Leading Chinese universities and research institutes'
    },
    {
      title: 'Technology Adaptation Programs',
      description: 'Systematic approach to adapting Chinese innovations for global markets',
      achievements: ['90% adaptation success rate', '60+ technologies adapted', '20+ markets entered'],
      partners: 'Manufacturing partners and global healthcare providers'
    },
    {
      title: 'Clinical Research Initiatives',
      description: 'Multi-center clinical studies validating healthcare solutions across diverse populations',
      achievements: ['50+ clinical studies', '10,000+ patients enrolled', '12 countries involved'],
      partners: 'International clinical research organizations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-lightest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Research & Development Collaboration
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Accelerating healthcare innovation through strategic R&D partnerships
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {collaborations.map((collab, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-primary-very-light">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{collab.title}</h3>
                  <p className="text-primary-medium mb-6">{collab.description}</p>
                  <p className="text-sm text-gray-600">
                    <strong>Key Partners:</strong> {collab.partners}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary-dark mb-4">Key Achievements</h4>
                  <ul className="space-y-2">
                    {collab.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-light rounded-full mr-3"></span>
                        <span className="text-primary-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchDevelopmentCollaboration;
