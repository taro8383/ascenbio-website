
import { useState } from 'react';

const InteractivePartnershipExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 140 },
    { id: 'ivd', name: 'In Vitro Diagnostics', count: 45 },
    { id: 'devices', name: 'Medical Devices', count: 38 },
    { id: 'pharma', name: 'Pharmaceuticals', count: 32 },
    { id: 'biotech', name: 'Biotechnology', count: 25 }
  ];

  const partners = [
    {
      id: 1,
      name: 'Mindray Medical International',
      category: 'devices',
      location: 'Shenzhen',
      size: 'large',
      specialties: ['Patient Monitoring', 'Medical Imaging', 'IVD'],
      partnership: '15 years',
      certifications: ['ISO 13485', 'CE Mark', 'FDA'],
      description: 'Leading medical technology company with global presence'
    },
    {
      id: 2,
      name: 'BGI Genomics',
      category: 'biotech',
      location: 'Shenzhen',
      size: 'large',
      specialties: ['Genomic Sequencing', 'Precision Medicine', 'Diagnostics'],
      partnership: '8 years',
      certifications: ['ISO 15189', 'CAP', 'CLIA'],
      description: 'World-leading genomics organization and precision medicine pioneer'
    },
    {
      id: 3,
      name: 'Lepu Medical Technology',
      category: 'devices',
      location: 'Beijing',
      size: 'medium',
      specialties: ['Cardiovascular', 'Imaging', 'Surgical'],
      partnership: '12 years',
      certifications: ['ISO 13485', 'FDA', 'CE Mark'],
      description: 'Innovative cardiovascular and imaging solutions provider'
    },
    {
      id: 4,
      name: 'Autobio Diagnostics',
      category: 'ivd',
      location: 'Zhengzhou',
      size: 'medium',
      specialties: ['Clinical Chemistry', 'Immunoassay', 'Molecular Diagnostics'],
      partnership: '10 years',
      certifications: ['ISO 13485', 'CE Mark', 'FDA'],
      description: 'Comprehensive IVD solutions for clinical laboratories'
    },
    {
      id: 5,
      name: 'Wondfo Biotech',
      category: 'ivd',
      location: 'Guangzhou',
      size: 'medium',
      specialties: ['Point-of-Care Testing', 'Rapid Diagnostics', 'Digital Health'],
      partnership: '7 years',
      certifications: ['ISO 13485', 'CE Mark', 'WHO PQ'],
      description: 'Rapid diagnostic test and digital health solutions leader'
    },
    {
      id: 6,
      name: 'Innovate Medical',
      category: 'pharma',
      location: 'Shanghai',
      size: 'small',
      specialties: ['API Manufacturing', 'Biosimilars', 'Traditional Medicine'],
      partnership: '5 years',
      certifications: ['GMP', 'FDA', 'EMA'],
      description: 'Specialized pharmaceutical manufacturing and development'
    }
  ];

  const filteredPartners = partners.filter(partner => {
    return (selectedCategory === 'all' || partner.category === selectedCategory) &&
           (selectedSize === 'all' || partner.size === selectedSize) &&
           (selectedLocation === 'all' || partner.location.toLowerCase().includes(selectedLocation.toLowerCase()));
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Partnership Explorer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive network of Chinese healthcare manufacturing partners
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Additional Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="all">All Company Sizes</option>
            <option value="large">Large Enterprise</option>
            <option value="medium">Medium Enterprise</option>
            <option value="small">Small Enterprise</option>
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="all">All Locations</option>
            <option value="beijing">Beijing</option>
            <option value="shanghai">Shanghai</option>
            <option value="shenzhen">Shenzhen</option>
            <option value="guangzhou">Guangzhou</option>
            <option value="zhengzhou">Zhengzhou</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-red-600">{filteredPartners.length}</span> partners
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPartners.map((partner) => (
            <div key={partner.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  {partner.partnership}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {partner.specialties.map((specialty, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Certifications:</h4>
                <div className="flex flex-wrap gap-2">
                  {partner.certifications.map((cert, index) => (
                    <span key={index} className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>📍 {partner.location}</span>
                <span className="capitalize">{partner.size} enterprise</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractivePartnershipExplorer;
