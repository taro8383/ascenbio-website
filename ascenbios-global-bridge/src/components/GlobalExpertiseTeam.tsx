
const GlobalExpertiseTeam = () => {
  const teamMembers = [
    {
      name: 'Dr. Wei Chen',
      position: 'Regional Director - Asia Pacific',
      location: 'Beijing, China',
      expertise: ['Chinese Healthcare Market', 'Regulatory Affairs', 'Manufacturer Relations'],
      languages: ['Mandarin', 'English', 'Japanese'],
      experience: '15 years in medical device export',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Maria Rodriguez',
      position: 'Regional Director - Latin America',
      location: 'Montevideo, Uruguay',
      expertise: ['Latin American Markets', 'Public Health Policy', 'Biotechnology'],
      languages: ['Spanish', 'Portuguese', 'English'],
      experience: '12 years in healthcare development',
      image: '👩‍💼'
    },
    {
      name: 'Dr. James Okoye',
      position: 'Regional Director - Africa',
      location: 'Cape Town, South Africa',
      expertise: ['African Healthcare Systems', 'Rural Health Technology', 'Capacity Building'],
      languages: ['English', 'French', 'Swahili'],
      experience: '18 years in global health',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Regional Director - Southeast Asia',
      location: 'Singapore',
      expertise: ['ASEAN Regulations', 'Digital Health', 'Technology Integration'],
      languages: ['English', 'Mandarin', 'Hindi', 'Malay'],
      experience: '14 years in health technology',
      image: '👩‍💼'
    },
    {
      name: 'Dr. Ahmed Al-Rashid',
      position: 'Regional Director - Middle East',
      location: 'Dubai, UAE',
      expertise: ['GCC Healthcare Markets', 'Medical Tourism', 'Infrastructure Development'],
      languages: ['Arabic', 'English', 'Persian'],
      experience: '16 years in healthcare consulting',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Elena Kowalski',
      position: 'Regional Director - Eastern Europe',
      location: 'Warsaw, Poland',
      expertise: ['EU Medical Device Regulation', 'Health System Reform', 'Technology Assessment'],
      languages: ['Polish', 'English', 'German', 'Russian'],
      experience: '13 years in regulatory affairs',
      image: '👩‍💼'
    }
  ];

  const expertise = [
    {
      area: 'Regulatory Affairs',
      specialists: 12,
      certifications: ['RAC', 'RAPS', 'EU MDR']
    },
    {
      area: 'Clinical Research',
      specialists: 8,
      certifications: ['GCP', 'ACRP', 'SoCRA']
    },
    {
      area: 'Quality Assurance',
      specialists: 15,
      certifications: ['ASQ', 'ISO 13485', 'FDA QSR']
    },
    {
      area: 'Business Development',
      specialists: 10,
      certifications: ['MBA', 'PMP', 'International Trade']
    },
    {
      area: 'Technical Engineering',
      specialists: 18,
      certifications: ['PE', 'Biomedical Engineering', 'Software Development']
    },
    {
      area: 'Cultural Liaison',
      specialists: 6,
      certifications: ['Translation Services', 'Cultural Training', 'Diplomatic Relations']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global Expertise Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            International specialists with deep regional knowledge and diverse cultural expertise
          </p>
        </div>

        {/* Team Overview */}
        <div className="mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Global Team Composition
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              {expertise.map((area, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-slate-700 mb-2">
                    {area.specialists}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    {area.area}
                  </div>
                  <div className="text-xs text-gray-500">
                    {area.certifications.length} Certifications
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-700 mb-2">69</div>
              <div className="text-gray-600">Total Global Team Members</div>
            </div>
          </div>
        </div>

        {/* Regional Directors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Regional Leadership Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{member.image}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-1">
                    {member.position}
                  </p>
                  <p className="text-xs text-gray-500">
                    📍 {member.location}
                  </p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Expertise:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-700">Languages:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {member.languages.map((lang, langIndex) => (
                        <span key={langIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-700">Experience:</span>
                    <p className="text-gray-600 mt-1">{member.experience}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <button className="text-slate-600 hover:text-slate-800 text-sm font-semibold">
                    Contact Regional Director
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {area.area}
              </h4>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Specialists:</span>
                <span className="font-semibold text-slate-700">{area.specialists}</span>
              </div>
              
              <div>
                <span className="text-sm text-gray-600 block mb-2">Key Certifications:</span>
                <div className="space-y-1">
                  {area.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Regional Contact Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Asia Pacific Inquiries</h4>
              <p className="text-sm text-gray-600">beijing@ascen-bio.com</p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Latin America Inquiries</h4>
              <p className="text-sm text-gray-600">latam@ascen-bio.com</p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Africa & Middle East</h4>
              <p className="text-sm text-gray-600">africa@ascen-bio.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExpertiseTeam;
