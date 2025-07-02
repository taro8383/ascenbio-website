
const ApproachPhilosophy = () => {
  const principles = [
    {
      icon: '🌉',
      title: 'Build Bridges, Not Barriers',
      description: 'Our commitment to removing obstacles in cross-border healthcare delivery through innovative solutions and strategic partnerships.'
    },
    {
      icon: '🎯',
      title: 'Technology With Purpose',
      description: 'We ensure technology transfers create sustainable value in local contexts, focusing on long-term impact over short-term gains.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Growth',
      description: 'Our model creates mutual benefit for all stakeholders in the ecosystem, fostering sustainable partnerships that drive innovation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Our Approach Philosophy</h2>
          <p className="text-primary-medium max-w-2xl mx-auto">
            Guiding principles that drive our mission to transform global healthcare access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="group">
              <div className="bg-primary-lightest p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="text-4xl mb-6 text-center">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4 text-center">{principle.title}</h3>
                <p className="text-primary-medium leading-relaxed">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachPhilosophy;
