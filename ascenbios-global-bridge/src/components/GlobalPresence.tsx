
import { Card, CardContent } from "@/components/ui/card";

const GlobalPresence = () => {
  const regions = [
    {
      name: 'Latin America',
      countries: ['Mexico', 'Colombia', 'Brazil', 'Argentina', 'Chile'],
      projects: 12,
      icon: '🌎',
      color: 'from-primary-medium to-primary-dark'
    },
    {
      name: 'Southeast Asia',
      countries: ['Thailand', 'Vietnam', 'Indonesia', 'Philippines', 'Malaysia'],
      projects: 8,
      icon: '🌏',
      color: 'from-primary-light to-primary-medium'
    },
    {
      name: 'Middle East & Africa',
      countries: ['UAE', 'Saudi Arabia', 'Egypt', 'Nigeria', 'South Africa'],
      projects: 6,
      icon: '🌍',
      color: 'from-primary-dark to-primary-medium'
    },
    {
      name: 'Eastern Europe',
      countries: ['Poland', 'Czech Republic', 'Romania', 'Bulgaria'],
      projects: 4,
      icon: '🗺️',
      color: 'from-primary-medium to-primary-light'
    }
  ];

  return (
    <section id="presence" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Global Operational Footprint
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic presence across four continents, delivering healthcare solutions where they're needed most
          </p>
        </div>

        {/* World Map Placeholder */}
        <div className="mb-16 relative">
          <div className="h-96 bg-gradient-to-br from-primary-lightest to-primary-very-light rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Map placeholder with dots */}
            <div className="text-8xl opacity-20">🗺️</div>
            
            {/* Animated dots representing global presence */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-60">
                {/* Simulated global presence dots */}
                <div className="absolute top-16 left-12 w-4 h-4 bg-primary-medium rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-24 left-20 w-4 h-4 bg-primary-medium rounded-full animate-pulse shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-20 right-16 w-4 h-4 bg-primary-light rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-16 left-24 w-4 h-4 bg-primary-dark rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary-medium rounded-full animate-pulse shadow-lg" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm font-semibold text-gray-800">Active in 20+ Countries</div>
              <div className="text-xs text-gray-600">Click regions to explore our presence</div>
            </div>
          </div>
        </div>

        {/* Regional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 overflow-hidden cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${region.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl">
                      {region.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-medium transition-colors">
                    {region.name}
                  </h3>
                  
                  <div className={`text-2xl font-bold bg-gradient-to-r ${region.color} bg-clip-text text-transparent mb-3`}>
                    {region.projects} Projects
                  </div>
                  
                  <div className="space-y-1">
                    {region.countries.map((country, countryIndex) => (
                      <div key={countryIndex} className="text-sm text-gray-600 flex items-center justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                        {country}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className={`text-sm font-semibold transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center bg-gradient-to-r ${region.color} bg-clip-text text-transparent`}>
                      View Regional Projects
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
