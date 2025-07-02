
const GlobalPartnerNetwork = () => {
  const partnerCategories = [
    {
      category: 'Healthcare Providers',
      count: 120,
      partners: [
        { name: 'Hospital Nacional de Colombia', type: 'Major Hospital Network', region: 'Latin America' },
        { name: 'Singapore General Hospital', type: 'Leading Medical Center', region: 'Southeast Asia' },
        { name: 'University of Cape Town Medical', type: 'Academic Medical Center', region: 'Africa' },
        { name: 'King Fahd Medical City', type: 'Specialized Medical Complex', region: 'Middle East' }
      ]
    },
    {
      category: 'Technology Developers',
      count: 85,
      partners: [
        { name: 'Mindray Medical', type: 'Medical Device Manufacturer', region: 'China' },
        { name: 'BGI Genomics', type: 'Genomics Technology', region: 'China' },
        { name: 'Neusoft Medical', type: 'Medical Imaging Solutions', region: 'China' },
        { name: 'Lepu Medical', type: 'Cardiovascular Devices', region: 'China' }
      ]
    },
    {
      category: 'Distribution Partners',
      count: 95,
      partners: [
        { name: 'Bioproductos Latam', type: 'Regional Distribution Hub', region: 'Latin America' },
        { name: 'MedTech Africa', type: 'Medical Equipment Distribution', region: 'Africa' },
        { name: 'Asia Pacific Healthcare', type: 'Regional Healthcare Distributor', region: 'Southeast Asia' },
        { name: 'Gulf Medical Supplies', type: 'Medical Equipment Supplier', region: 'Middle East' }
      ]
    },
    {
      category: 'Government Agencies',
      count: 35,
      partners: [
        { name: 'Ministry of Health Colombia', type: 'National Health Authority', region: 'Latin America' },
        { name: 'Health Sciences Authority Singapore', type: 'Regulatory Authority', region: 'Southeast Asia' },
        { name: 'South African Health Products Authority', type: 'Medical Device Regulator', region: 'Africa' },
        { name: 'Saudi FDA', type: 'Food and Drug Authority', region: 'Middle East' }
      ]
    },
    {
      category: 'Academic Institutions',
      count: 45,
      partners: [
        { name: 'Universidad de los Andes', type: 'Research University', region: 'Latin America' },
        { name: 'National University of Singapore', type: 'Medical Research Center', region: 'Southeast Asia' },
        { name: 'University of Witwatersrand', type: 'Medical School', region: 'Africa' },
        { name: 'King Saud University', type: 'Health Sciences University', region: 'Middle East' }
      ]
    },
    {
      category: 'Industry Associations',
      count: 25,
      partners: [
        { name: 'ALACCSA', type: 'Latin American Clinical Equipment Association', region: 'Latin America' },
        { name: 'ASEAN Medical Device Association', type: 'Regional Industry Association', region: 'Southeast Asia' },
        { name: 'African Medical Devices Forum', type: 'Continental Healthcare Network', region: 'Africa' },
        { name: 'GCC Health Tech Alliance', type: 'Regional Technology Consortium', region: 'Middle East' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global Partner Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic alliances spanning the complete healthcare ecosystem across all operational regions
          </p>
        </div>

        {/* Network Overview */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Partnership Network Overview
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partnerCategories.map((category, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-slate-700 mb-2">
                    {category.count}+
                  </div>
                  <div className="text-sm text-gray-600">
                    {category.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Categories */}
        <div className="space-y-12">
          {partnerCategories.map((category, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count}+ Partners
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {partner.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {partner.type}
                        </p>
                        <span className="text-xs bg-white text-gray-700 px-2 py-1 rounded">
                          {partner.region}
                        </span>
                      </div>
                      <div className="text-slate-400 text-lg ml-4">
                        🤝
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Impact Metrics */}
        <div className="mt-16 bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Partnership Impact & Growth
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700 mb-2">405+</div>
              <div className="text-sm text-gray-600">Total Strategic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700 mb-2">95%</div>
              <div className="text-sm text-gray-600">Partnership Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700 mb-2">3.2x</div>
              <div className="text-sm text-gray-600">Network Growth (5 Years)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700 mb-2">85%</div>
              <div className="text-sm text-gray-600">Partnership Renewal Rate</div>
            </div>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Partnership Development Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Identification</h4>
              <p className="text-sm text-gray-600">Strategic partner assessment and qualification</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Engagement</h4>
              <p className="text-sm text-gray-600">Initial discussions and capability alignment</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integration</h4>
              <p className="text-sm text-gray-600">Partnership agreement and operational setup</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                4
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Growth</h4>
              <p className="text-sm text-gray-600">Ongoing collaboration and expansion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnerNetwork;
