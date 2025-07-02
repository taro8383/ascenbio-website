
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RegionalExpertise = () => {
  const [activeRegion, setActiveRegion] = useState('latin-america');

  const regions = [
    {
      id: 'latin-america',
      name: 'Latin America & Caribbean',
      hub: 'Bioproductos Latam (Uruguay)',
      countries: ['Brazil', 'Mexico', 'Colombia', 'Argentina', 'Chile', 'Peru'],
      strengths: [
        'Healthcare technology adaptation for diverse economic conditions',
        'Public-private partnership models for national healthcare initiatives',
        'Regional regulatory harmonization expertise'
      ],
      caseStudy: 'Bioproductos Latam biotechnology park development',
      metrics: {
        marketPenetration: '35%',
        implementations: '24 projects',
        coverage: '120M people'
      }
    },
    {
      id: 'africa',
      name: 'Africa',
      hub: 'Multi-hub: South Africa, Morocco, Kenya',
      countries: ['Nigeria', 'Egypt', 'Ethiopia', 'Ghana', 'Tanzania'],
      strengths: [
        'Rural healthcare technology deployment',
        'Low-resource setting adaptation for medical technologies',
        'Healthcare infrastructure development models'
      ],
      caseStudy: 'Pan-African diagnostic network implementation',
      metrics: {
        marketPenetration: '18%',
        implementations: '16 projects',
        coverage: '85M people'
      }
    },
    {
      id: 'southeast-asia',
      name: 'Southeast Asia',
      hub: 'Singapore',
      countries: ['Indonesia', 'Thailand', 'Vietnam', 'Philippines', 'Malaysia'],
      strengths: [
        'Tropical disease management technologies',
        'Island healthcare delivery models',
        'Urban-rural healthcare integration'
      ],
      caseStudy: 'Telemedicine infrastructure deployment',
      metrics: {
        marketPenetration: '28%',
        implementations: '19 projects',
        coverage: '95M people'
      }
    },
    {
      id: 'middle-east',
      name: 'Central Asia & Middle East',
      hub: 'United Arab Emirates',
      countries: ['Saudi Arabia', 'Qatar', 'Kazakhstan', 'Turkey'],
      strengths: [
        'Healthcare infrastructure development',
        'Medical tourism facilitation',
        'Healthcare digitization initiatives'
      ],
      caseStudy: 'Medical city development support',
      metrics: {
        marketPenetration: '42%',
        implementations: '12 projects',
        coverage: '65M people'
      }
    }
  ];

  const activeRegionData = regions.find(r => r.id === activeRegion);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Regional Expertise Showcases
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Deep regional knowledge and specialized capabilities across diverse healthcare markets
          </p>
        </div>

        {/* Region Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {regions.map((region) => (
            <Button
              key={region.id}
              variant={activeRegion === region.id ? "default" : "outline"}
              onClick={() => setActiveRegion(region.id)}
              className={`px-6 py-3 ${
                activeRegion === region.id 
                  ? 'bg-primary-medium hover:bg-primary-light text-white' 
                  : 'border-primary-very-light text-primary-medium hover:bg-primary-lightest'
              }`}
            >
              {region.name}
            </Button>
          ))}
        </div>

        {/* Active Region Details */}
        {activeRegionData && (
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Region Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">
                      {activeRegionData.name}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="font-semibold text-primary-dark">Regional Hub:</span>
                        <p className="text-primary-medium mt-1">{activeRegionData.hub}</p>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-primary-dark">Market Presence:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {activeRegionData.countries.map((country, index) => (
                            <span 
                              key={index}
                              className="bg-primary-lightest text-primary-dark px-3 py-1 rounded-full text-sm"
                            >
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-primary-dark block mb-3">Key Strengths:</span>
                      <ul className="space-y-2">
                        {activeRegionData.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start text-primary-medium">
                            <div className="w-2 h-2 bg-primary-light rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Case Study & Metrics */}
                  <div>
                    <div className="mb-6">
                      <span className="font-semibold text-primary-dark block mb-2">Case Study Highlight:</span>
                      <div className="bg-primary-lightest p-4 rounded-lg">
                        <p className="text-primary-medium">{activeRegionData.caseStudy}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-primary-dark block mb-4">Regional Impact Metrics:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gradient-to-b from-primary-lightest to-primary-very-light rounded-lg">
                          <div className="text-2xl font-bold text-primary-medium mb-1">
                            {activeRegionData.metrics.marketPenetration}
                          </div>
                          <div className="text-sm text-primary-dark">Market Penetration</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-b from-primary-lightest to-primary-very-light rounded-lg">
                          <div className="text-2xl font-bold text-primary-medium mb-1">
                            {activeRegionData.metrics.implementations}
                          </div>
                          <div className="text-sm text-primary-dark">Active Projects</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-b from-primary-lightest to-primary-very-light rounded-lg">
                          <div className="text-2xl font-bold text-primary-medium mb-1">
                            {activeRegionData.metrics.coverage}
                          </div>
                          <div className="text-sm text-primary-dark">Population Coverage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-primary-medium hover:bg-primary-light text-white px-8 py-3">
                    Explore Regional Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default RegionalExpertise;
