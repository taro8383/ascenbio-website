
import { useState } from "react";

const GlobalFootprint = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  
  const locations = [
    { id: 1, name: 'Beijing, China', type: 'Headquarters', projects: 45, position: { x: 680, y: 180 } },
    { id: 2, name: 'Mexico City, Mexico', type: 'Regional Office', projects: 23, position: { x: 200, y: 200 } },
    { id: 3, name: 'Singapore', type: 'Regional Office', projects: 18, position: { x: 720, y: 260 } },
    { id: 4, name: 'São Paulo, Brazil', type: 'Distribution Hub', projects: 31, position: { x: 280, y: 380 } },
    { id: 5, name: 'Bangkok, Thailand', type: 'Service Center', projects: 12, position: { x: 700, y: 250 } },
    { id: 6, name: 'Warsaw, Poland', type: 'European Hub', projects: 8, position: { x: 540, y: 160 } }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Footprint</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Strategic locations enabling comprehensive healthcare solutions worldwide
          </p>
        </div>

        {/* Interactive SVG Map */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="relative h-96 bg-gradient-to-br from-primary-lightest to-primary-very-light rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            <svg viewBox="0 0 1000 400" className="w-full h-full absolute inset-0">
              {/* World continents */}
              {/* North America */}
              <path d="M50,80 Q120,60 200,100 L250,90 Q300,80 350,110 L380,100 L380,200 Q350,220 300,215 L250,225 Q200,230 150,220 L100,225 Q50,220 50,200 Z" 
                    fill="currentColor" opacity="0.1" className="text-primary-medium"/>
              
              {/* South America */}
              <path d="M200,240 Q230,230 260,250 L290,245 Q320,240 340,270 L350,340 Q330,380 300,385 L270,390 Q240,395 220,380 L200,340 Q190,300 200,240 Z" 
                    fill="currentColor" opacity="0.1" className="text-primary-medium"/>
              
              {/* Europe */}
              <path d="M480,100 Q520,90 560,105 L590,100 Q620,95 640,115 L650,140 Q630,160 600,155 L570,160 Q540,165 510,160 L480,155 Q470,130 480,100 Z" 
                    fill="currentColor" opacity="0.1" className="text-primary-medium"/>
              
              {/* Africa */}
              <path d="M520,180 Q560,170 600,190 L630,185 Q660,180 680,210 L690,280 Q670,340 640,345 L610,350 Q580,355 550,350 L520,345 Q510,280 520,180 Z" 
                    fill="currentColor" opacity="0.1" className="text-primary-medium"/>
              
              {/* Asia */}
              <path d="M650,80 Q720,70 790,90 L840,85 Q890,80 920,110 L930,180 Q910,220 880,215 L850,220 Q820,225 790,220 L760,225 Q730,230 700,225 L670,220 Q650,200 650,80 Z" 
                    fill="currentColor" opacity="0.1" className="text-primary-medium"/>
              
              {/* Australia */}
              <path d="M750,300 Q800,290 850,310 L880,305 Q910,300 930,330 L940,350 Q920,370 890,365 L860,370 Q830,375 800,370 L770,365 Q750,345 750,300 Z" 
                    fill="currentColor" opacity="0.1" className="text-primary-medium"/>
              
              {/* Connection lines */}
              {locations.map((location, index) => (
                locations.slice(index + 1).map((otherLocation, otherIndex) => (
                  <line
                    key={`${index}-${otherIndex}`}
                    x1={location.position.x}
                    y1={location.position.y}
                    x2={otherLocation.position.x}
                    y2={otherLocation.position.y}
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                    className="text-primary-light"
                  />
                ))
              ))}
            </svg>
            
            {/* Location markers */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ 
                  left: `${(location.position.x / 1000) * 100}%`, 
                  top: `${(location.position.y / 400) * 100}%` 
                }}
                onClick={() => setSelectedLocation(location.id === selectedLocation ? null : location.id)}
              >
                <div className="relative group">
                  <div className={`w-6 h-6 rounded-full shadow-lg flex items-center justify-center relative z-10 transition-all duration-300 ${
                    selectedLocation === location.id 
                      ? 'bg-primary-dark scale-125' 
                      : 'bg-primary-medium hover:bg-primary-dark hover:scale-110'
                  }`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute inset-0 bg-primary-light rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-lg text-xs font-semibold transition-opacity whitespace-nowrap z-20 border border-primary-very-light ${
                    selectedLocation === location.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="text-primary-dark font-bold">{location.name}</div>
                    <div className="text-primary-medium">{location.type}</div>
                    <div className="text-slate-600">{location.projects} Projects</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Map statistics */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-primary-very-light z-20">
              <div className="text-sm font-semibold text-primary-dark mb-2">Global Operations</div>
              <div className="text-xs text-primary-medium space-y-1">
                <div>6 Strategic Locations</div>
                <div>137 Active Projects</div>
                <div>5 Continents</div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-primary-very-light z-20">
              <div className="text-xs font-semibold text-primary-dark mb-2">Legend</div>
              <div className="flex items-center text-xs text-primary-medium mb-1">
                <div className="w-3 h-3 bg-primary-dark rounded-full mr-2"></div>
                Active Locations
              </div>
              <div className="flex items-center text-xs text-primary-medium">
                <div className="w-3 h-3 bg-primary-medium rounded-full mr-2 animate-pulse"></div>
                Live Operations
              </div>
            </div>
          </div>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border cursor-pointer ${
                selectedLocation === location.id 
                  ? 'border-primary-medium ring-2 ring-primary-light' 
                  : 'border-primary-very-light hover:border-primary-light'
              }`}
              onClick={() => setSelectedLocation(location.id === selectedLocation ? null : location.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">{location.name}</h3>
                <span className="text-2xl">📍</span>
              </div>
              <p className="text-slate-600 mb-2">{location.type}</p>
              <div className="flex items-center text-sm text-slate-500">
                <span className="w-2 h-2 bg-primary-medium rounded-full mr-2"></span>
                {location.projects} Active Projects
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
