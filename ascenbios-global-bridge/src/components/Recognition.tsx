
const Recognition = () => {
  const awards = [
    { name: 'Global Healthcare Innovation Award', year: '2023', org: 'Healthcare Technology Association' },
    { name: 'Cross-Border Excellence Award', year: '2022', org: 'International Trade Council' },
    { name: 'Sustainability Leadership Award', year: '2021', org: 'Global Health Initiative' }
  ];

  const certifications = [
    'ISO 13485 Quality Management',
    'ISO 14001 Environmental Management',
    'OHSAS 18001 Occupational Health',
    'Good Distribution Practice (GDP)'
  ];

  const memberships = [
    'International Federation of Medical Device Manufacturers',
    'Global Healthcare Supply Chain Council',
    'China-Latin America Healthcare Alliance',
    'Asian Healthcare Technology Association'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Recognition & Certifications</h2>
          <p className="text-primary-medium max-w-2xl mx-auto">
            Industry recognition and certifications that validate our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Awards */}
          <div>
            <h3 className="text-xl font-semibold text-primary-dark mb-6 flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              Awards & Recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="bg-primary-lightest p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-dark">{award.name}</h4>
                  <p className="text-sm text-primary-medium">{award.org}</p>
                  <p className="text-xs text-gray-600">{award.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-primary-dark mb-6 flex items-center">
              <span className="text-2xl mr-2">📋</span>
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                  <span className="text-primary-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Memberships */}
          <div>
            <h3 className="text-xl font-semibold text-primary-dark mb-6 flex items-center">
              <span className="text-2xl mr-2">🤝</span>
              Memberships
            </h3>
            <div className="space-y-3">
              {memberships.map((membership, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                  <span className="text-primary-medium text-sm">{membership}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
