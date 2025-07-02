
const GlobalStandards = () => {
  const standards = [
    {
      category: 'Quality Management',
      certifications: ['ISO 13485', 'ISO 9001', 'FDA QSR'],
      description: 'Comprehensive quality management systems for medical devices'
    },
    {
      category: 'Information Security',
      certifications: ['ISO 27001', 'HIPAA', 'GDPR Compliance'],
      description: 'Data security and privacy protection across all regions'
    },
    {
      category: 'Healthcare Standards',
      certifications: ['HL7 FHIR', 'IHE Profiles', 'DICOM'],
      description: 'Healthcare interoperability and data exchange standards'
    },
    {
      category: 'Regional Compliance',
      certifications: ['CE Marking', 'Health Canada', 'TGA Australia'],
      description: 'Regional regulatory compliance and market access'
    },
    {
      category: 'Environmental Standards',
      certifications: ['ISO 14001', 'RoHS', 'WEEE'],
      description: 'Environmental management and sustainability compliance'
    },
    {
      category: 'Financial Transparency',
      certifications: ['SOX Compliance', 'IFRS', 'Local GAAP'],
      description: 'Financial reporting and transparency standards'
    }
  ];

  const regionalCompliance = [
    {
      region: 'European Union',
      requirements: ['CE Marking', 'MDR Compliance', 'GDPR', 'ISO 13485'],
      status: 'Fully Compliant'
    },
    {
      region: 'United States',
      requirements: ['FDA 510(k)', 'HIPAA', 'SOX', 'FCC Part 15'],
      status: 'Fully Compliant'
    },
    {
      region: 'Latin America',
      requirements: ['ANVISA', 'COFEPRIS', 'ISO 13485', 'Local Pharmacopeias'],
      status: 'Fully Compliant'
    },
    {
      region: 'Asia Pacific',
      requirements: ['TGA', 'PMDA', 'NMPA', 'HSA Singapore'],
      status: 'Fully Compliant'
    },
    {
      region: 'Africa',
      requirements: ['SAHPRA', 'Local MOH', 'WHO PQ', 'ISO Standards'],
      status: 'Actively Pursuing'
    },
    {
      region: 'Middle East',
      requirements: ['SFDA', 'MOH UAE', 'Local Standards', 'GCC Standards'],
      status: 'Fully Compliant'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global Standards & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maintaining excellence across borders through comprehensive international standards and certifications
          </p>
        </div>

        {/* Standards Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {standards.map((standard, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {standard.category}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {standard.description}
              </p>
              <div className="space-y-2">
                {standard.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Regional Compliance Matrix */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Regional Compliance Status
          </h3>
          
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalCompliance.map((region, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">{region.region}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      region.status === 'Fully Compliant' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {region.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {region.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          region.status === 'Fully Compliant' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <span className="text-gray-600">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">100%</div>
            <div className="text-sm text-gray-600">Standards Compliance Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">25+</div>
            <div className="text-sm text-gray-600">International Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">6</div>
            <div className="text-sm text-gray-600">Regional Compliance Programs</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-slate-700 mb-2">99.8%</div>
            <div className="text-sm text-gray-600">Audit Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStandards;
