
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InteractiveGlobalMap = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Locations' },
    { id: 'offices', label: 'Regional Offices' },
    { id: 'projects', label: 'Active Projects' },
    { id: 'partners', label: 'Manufacturing Partners' },
    { id: 'expansion', label: 'Future Expansion' }
  ];

  const locations = [
    {
      id: 1,
      name: 'Beijing Headquarters',
      type: 'offices',
      region: 'Asia Pacific',
      established: '2019',
      focus: 'Manufacturing Partnerships',
      team: '45 professionals',
      achievements: 'Strategic partnerships with 140+ Chinese manufacturers',
      position: { x: 680, y: 180 }
    },
    {
      id: 2,
      name: 'Bioproductos Latam - Uruguay',
      type: 'offices',
      region: 'Latin America',
      established: '2021',
      focus: 'Regional Distribution Hub',
      team: '28 professionals',
      achievements: 'First biotechnology park in Uruguay',
      position: { x: 280, y: 380 }
    },
    {
      id: 3,
      name: 'Singapore Operations',
      type: 'offices',
      region: 'Southeast Asia',
      established: '2022',
      focus: 'Digital Health Innovation',
      team: '22 professionals',
      achievements: 'Telemedicine infrastructure deployment',
      position: { x: 720, y: 260 }
    },
    {
      id: 4,
      name: 'Mexico City Hub',
      type: 'projects',
      region: 'North America',
      established: '2023',
      focus: 'Market Entry Support',
      team: '15 professionals',
      achievements: 'Facilitated 12 successful market entries',
      position: { x: 200, y: 200 }
    },
    {
      id: 5,
      name: 'Warsaw Office',
      type: 'expansion',
      region: 'Eastern Europe',
      established: '2024',
      focus: 'European Expansion',
      team: '8 professionals',
      achievements: 'EU market access facilitation',
      position: { x: 540, y: 160 }
    }
  ];

  const filteredLocations = selectedFilter === 'all' 
    ? locations 
    : locations.filter(location => location.type === selectedFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our worldwide network of operations, partnerships, and strategic initiatives
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className="bg-primary-medium hover:bg-primary-dark text-white border-primary-medium"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Interactive World Map with SVG */}
        <div className="mb-12 relative">
          <div className="h-[500px] bg-gradient-to-br from-primary-lightest to-primary-very-light rounded-2xl flex items-center justify-center relative overflow-hidden border border-primary-very-light">
            {/* SVG World Map */}
            <svg viewBox="0 0 1000 500" className="w-full h-full absolute inset-0">
              {/* Simplified world map paths */}
              {/* North America */}
              <path d="M50,100 Q120,80 200,120 L250,110 Q300,100 350,130 L380,120 L380,220 Q350,240 300,235 L250,245 Q200,250 150,240 L100,245 Q50,240 50,220 Z" 
                    fill="currentColor" opacity="0.15" className="text-primary-medium"/>
              
              {/* South America */}
              <path d="M200,280 Q230,270 260,290 L290,285 Q320,280 340,310 L350,380 Q330,420 300,425 L270,430 Q240,435 220,420 L200,380 Q190,340 200,280 Z" 
                    fill="currentColor" opacity="0.15" className="text-primary-medium"/>
              
              {/* Europe */}
              <path d="M480,120 Q520,110 560,125 L590,120 Q620,115 640,135 L650,160 Q630,180 600,175 L570,180 Q540,185 510,180 L480,175 Q470,150 480,120 Z" 
                    fill="currentColor" opacity="0.15" className="text-primary-medium"/>
              
              {/* Africa */}
              <path d="M520,200 Q560,190 600,210 L630,205 Q660,200 680,230 L690,300 Q670,360 640,365 L610,370 Q580,375 550,370 L520,365 Q510,300 520,200 Z" 
                    fill="currentColor" opacity="0.15" className="text-primary-medium"/>
              
              {/* Asia */}
              <path d="M650,100 Q720,90 790,110 L840,105 Q890,100 920,130 L930,200 Q910,240 880,235 L850,240 Q820,245 790,240 L760,245 Q730,250 700,245 L670,240 Q650,220 650,100 Z" 
                    fill="currentColor" opacity="0.15" className="text-primary-medium"/>
              
              {/* Australia */}
              <path d="M750,350 Q800,340 850,360 L880,355 Q910,350 930,380 L940,400 Q920,420 890,415 L860,420 Q830,425 800,420 L770,415 Q750,395 750,350 Z" 
                    fill="currentColor" opacity="0.15" className="text-primary-medium"/>
              
              {/* Connection lines between locations */}
              {filteredLocations.map((location, index) => (
                filteredLocations.slice(index + 1).map((otherLocation, otherIndex) => (
                  <line
                    key={`${index}-${otherIndex}`}
                    x1={location.position.x}
                    y1={location.position.y}
                    x2={otherLocation.position.x}
                    y2={otherLocation.position.y}
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.2"
                    className="text-primary-light"
                  />
                ))
              ))}
            </svg>
            
            {/* Location markers */}
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ 
                  left: `${(location.position.x / 1000) * 100}%`, 
                  top: `${(location.position.y / 500) * 100}%` 
                }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-primary-dark rounded-full animate-pulse shadow-lg relative z-10">
                    <div className="absolute inset-0 bg-primary-medium rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 border border-primary-very-light">
                    <div className="text-primary-dark">{location.name}</div>
                    <div className="text-primary-medium">{location.region}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Map Legend */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-primary-very-light z-20">
              <div className="text-sm font-semibold text-gray-800 mb-2">Global Network</div>
              <div className="flex items-center text-xs text-gray-600 mb-1">
                <div className="w-3 h-3 bg-primary-dark rounded-full mr-2"></div>
                Active Locations
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <div className="w-3 h-3 bg-primary-medium rounded-full mr-2 animate-pulse"></div>
                Live Operations
              </div>
            </div>

            {/* Statistics overlay */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-primary-very-light z-20">
              <div className="text-sm font-semibold text-primary-dark mb-2">Global Reach</div>
              <div className="text-xs text-primary-medium space-y-1">
                <div>{filteredLocations.length} Locations</div>
                <div>5 Continents</div>
                <div>20+ Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => (
            <Card key={location.id} className="hover:shadow-xl transition-shadow duration-300 border-primary-very-light shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-primary-dark">{location.name}</h3>
                  <span className="text-xs bg-primary-lightest text-primary-dark px-2 py-1 rounded-full">
                    {location.region}
                  </span>
                </div>
                
                <div className="space-y-3 text-sm text-primary-medium">
                  <div>
                    <span className="font-semibold">Established:</span> {location.established}
                  </div>
                  <div>
                    <span className="font-semibold">Focus Area:</span> {location.focus}
                  </div>
                  <div>
                    <span className="font-semibold">Team Size:</span> {location.team}
                  </div>
                  <div>
                    <span className="font-semibold">Key Achievement:</span>
                    <p className="mt-1 text-primary-dark">{location.achievements}</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4 border-primary-very-light hover:bg-primary-lightest">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveGlobalMap;
