
import React, { useState } from 'react';
import { MapPin, User, Mail, Phone, Globe, Filter } from 'lucide-react';

const RegionalRepFinder = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');

  const representatives = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      region: 'Latin America & Caribbean',
      countries: ['Mexico', 'Colombia', 'Brazil', 'Argentina', 'Chile'],
      technologies: ['Medical Devices', 'In Vitro Diagnostics', 'Healthcare IT'],
      languages: ['Spanish', 'Portuguese', 'English'],
      email: 'maria.rodriguez@ascen-bio.com',
      photo: '/placeholder.svg',
      bio: 'Maria has over 15 years of experience in Latin American healthcare markets, specializing in medical device distribution and regulatory compliance.',
      location: 'Mexico City, Mexico'
    },
    {
      id: 2,
      name: 'Dr. James Thompson',
      region: 'North America',
      countries: ['United States', 'Canada'],
      technologies: ['Pharmaceuticals', 'Medical Devices', 'Healthcare IT'],
      languages: ['English', 'French'],
      email: 'james.thompson@ascen-bio.com',
      photo: '/placeholder.svg',
      bio: 'James brings expertise in FDA regulatory processes and North American healthcare system integration.',
      location: 'Chicago, USA'
    },
    {
      id: 3,
      name: 'Dr. Priya Patel',
      region: 'Asia Pacific',
      countries: ['India', 'Australia', 'Thailand', 'Malaysia', 'Philippines'],
      technologies: ['In Vitro Diagnostics', 'Medical Supplies', 'Healthcare IT'],
      languages: ['English', 'Hindi', 'Tamil'],
      email: 'priya.patel@ascen-bio.com',
      photo: '/placeholder.svg',
      bio: 'Priya specializes in APAC market entry strategies and has extensive experience with diverse regulatory environments.',
      location: 'Singapore'
    },
    {
      id: 4,
      name: 'Ahmed Hassan',
      region: 'Middle East & Africa',
      countries: ['UAE', 'Saudi Arabia', 'Egypt', 'South Africa', 'Nigeria'],
      technologies: ['Medical Devices', 'Pharmaceuticals', 'Medical Supplies'],
      languages: ['Arabic', 'English', 'French'],
      email: 'ahmed.hassan@ascen-bio.com',
      photo: '/placeholder.svg',
      bio: 'Ahmed has deep knowledge of Middle Eastern and African healthcare markets with focus on government relations.',
      location: 'Dubai, UAE'
    },
    {
      id: 5,
      name: 'Sophie Müller',
      region: 'Europe',
      countries: ['Germany', 'France', 'UK', 'Netherlands', 'Switzerland'],
      technologies: ['Medical Devices', 'In Vitro Diagnostics', 'Pharmaceuticals'],
      languages: ['German', 'English', 'French'],
      email: 'sophie.muller@ascen-bio.com',
      photo: '/placeholder.svg',
      bio: 'Sophie is an expert in EU MDR compliance and European market access strategies.',
      location: 'Berlin, Germany'
    },
    {
      id: 6,
      name: 'Li Wei',
      region: 'Asia Pacific',
      countries: ['China', 'Hong Kong', 'Taiwan', 'South Korea', 'Japan'],
      technologies: ['All Technologies', 'Manufacturing', 'Supply Chain'],
      languages: ['Chinese (Mandarin)', 'English', 'Korean'],
      email: 'li.wei@ascen-bio.com',
      photo: '/placeholder.svg',
      bio: 'Li Wei leads our China operations and has extensive experience in Asian manufacturing and supply chain management.',
      location: 'Beijing, China'
    }
  ];

  const regions = [
    'All Regions',
    'Latin America & Caribbean',
    'North America',
    'Europe',
    'Middle East & Africa',
    'Asia Pacific'
  ];

  const technologies = [
    'All Technologies',
    'Medical Devices',
    'In Vitro Diagnostics',
    'Pharmaceuticals',
    'Healthcare IT',
    'Medical Supplies',
    'Manufacturing',
    'Supply Chain'
  ];

  const filteredReps = representatives.filter(rep => {
    const regionMatch = !selectedRegion || selectedRegion === 'All Regions' || rep.region === selectedRegion;
    const technologyMatch = !selectedTechnology || selectedTechnology === 'All Technologies' || 
      rep.technologies.includes(selectedTechnology) || rep.technologies.includes('All Technologies');
    
    return regionMatch && technologyMatch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-primary-lightest to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Find Your Regional Representative</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your local AscenBio representative for personalized assistance
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-primary-very-light/30">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-primary-medium mr-2" />
              <h3 className="text-lg font-semibold text-primary-dark">Filter Representatives</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  <Globe className="h-4 w-4 inline mr-1" />
                  Region
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Technology Focus
                </label>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                >
                  {technologies.map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Representatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReps.map((rep) => (
              <div key={rep.id} className="bg-white rounded-xl shadow-lg p-6 border border-primary-very-light/30 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-medium to-primary-light rounded-full mx-auto mb-3 flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark">{rep.name}</h3>
                  <p className="text-primary-medium font-semibold text-sm">{rep.region}</p>
                  <div className="flex items-center justify-center text-gray-600 text-xs mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {rep.location}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-primary-dark mb-1">Countries:</p>
                    <div className="flex flex-wrap gap-1">
                      {rep.countries.slice(0, 3).map((country) => (
                        <span key={country} className="inline-block bg-primary-lightest text-primary-dark text-xs px-2 py-1 rounded">
                          {country}
                        </span>
                      ))}
                      {rep.countries.length > 3 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{rep.countries.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-primary-dark mb-1">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {rep.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="inline-block bg-primary-very-light text-primary-dark text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {rep.technologies.length > 2 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{rep.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-primary-dark mb-1">Languages:</p>
                    <p className="text-xs text-gray-600">{rep.languages.join(', ')}</p>
                  </div>

                  <div className="bg-primary-lightest/50 rounded-lg p-3">
                    <p className="text-xs text-gray-700">{rep.bio}</p>
                  </div>

                  <div className="flex">
                    <a
                      href={`mailto:${rep.email}`}
                      className="w-full flex items-center justify-center bg-primary-medium text-white px-3 py-2 rounded text-xs hover:bg-primary-light transition-colors"
                    >
                      <Mail className="h-3 w-3 mr-1" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReps.length === 0 && (
            <div className="text-center py-8">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No representatives found matching your criteria. Please adjust your filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegionalRepFinder;
