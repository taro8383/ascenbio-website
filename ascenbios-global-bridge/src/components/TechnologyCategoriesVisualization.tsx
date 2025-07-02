
const TechnologyCategoriesVisualization = () => {
  const categories = [
    {
      title: 'In-Vitro Diagnostics (IVD)',
      description: 'Comprehensive diagnostic testing solutions for clinical laboratories',
      technologies: ['Rapid Test Kits', 'Immunoassays', 'Molecular Diagnostics', 'Point-of-Care Testing'],
      market_impact: '$2.1B',
      icon: '🔬'
    },
    {
      title: 'Medical Imaging',
      description: 'Advanced imaging technologies for accurate medical diagnosis',
      technologies: ['Digital X-Ray', 'Ultrasound Systems', 'CT Scanners', 'MRI Equipment'],
      market_impact: '$1.8B',
      icon: '📊'
    },
    {
      title: 'Digital Health',
      description: 'Technology-enabled healthcare solutions and platforms',
      technologies: ['Telemedicine', 'Health Apps', 'AI Diagnostics', 'Remote Monitoring'],
      market_impact: '$950M',
      icon: '💻'
    },
    {
      title: 'Laboratory Equipment',
      description: 'Essential laboratory instruments and automation systems',
      technologies: ['Analyzers', 'Centrifuges', 'Microscopes', 'Automation Systems'],
      market_impact: '$750M',
      icon: '⚗️'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Technology Categories & Market Impact
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Comprehensive portfolio spanning critical healthcare technology sectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="group bg-gradient-to-br from-primary-lightest to-white p-8 rounded-2xl border border-primary-very-light hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-dark">{category.market_impact}</div>
                  <div className="text-sm text-primary-medium">Market Impact</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary-dark mb-4">{category.title}</h3>
              <p className="text-primary-medium mb-6 leading-relaxed">{category.description}</p>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary-dark">Key Technologies:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center text-sm text-primary-medium">
                      <div className="w-2 h-2 bg-primary-light rounded-full mr-2 flex-shrink-0"></div>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-dark via-primary-medium to-primary-light text-white p-8 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Comprehensive Technology Portfolio</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-80">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">140+</div>
                <div className="text-sm opacity-80">Manufacturing Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-80">Technology Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$5.6B</div>
                <div className="text-sm opacity-80">Total Market Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCategoriesVisualization;
