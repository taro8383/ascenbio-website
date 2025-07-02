
import { MapPin, Mail, Clock } from "lucide-react";

const GlobalOfficeNetwork = () => {
  const offices = [
    {
      id: 1,
      name: 'Beijing Headquarters',
      country: 'China',
      address: 'Zhongguancun Technology Park, Haidian District, Beijing 100084',
      email: 'beijing@ascen-bio.com',
      hours: 'Mon-Fri: 9:00-18:00 CST',
      specialization: 'Technology Sourcing & Manufacturing',
      languages: ['Chinese', 'English'],
      coordinates: { lat: 39.9042, lng: 116.4074 }
    },
    {
      id: 2,
      name: 'Mexico City Office',
      country: 'Mexico',
      address: 'Polanco Business District, Miguel Hidalgo, Mexico City 11560',
      email: 'mexico@ascen-bio.com',
      hours: 'Mon-Fri: 9:00-17:00 CST',
      specialization: 'Latin American Market Entry',
      languages: ['Spanish', 'English'],
      coordinates: { lat: 19.4326, lng: -99.1332 }
    },
    {
      id: 3,
      name: 'Singapore Office',
      country: 'Singapore',
      address: 'Marina Bay Financial Centre, Downtown Core, Singapore 018989',
      email: 'singapore@ascen-bio.com',
      hours: 'Mon-Fri: 9:00-18:00 SGT',
      specialization: 'APAC Regional Operations',
      languages: ['English', 'Chinese', 'Malay'],
      coordinates: { lat: 1.3521, lng: 103.8198 }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-lightest to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Our Global Presence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our offices worldwide for localized expertise and support
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="relative bg-gradient-to-br from-primary-medium to-primary-light rounded-2xl p-8 mb-12 min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative z-10 text-center text-white">
            <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
            <p className="text-primary-lightest">
              Interactive office location map will be integrated here
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              {offices.map((office) => (
                <div key={office.id} className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-3 h-3 bg-primary-lightest rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm">{office.country}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div key={office.id} className="bg-white rounded-xl shadow-lg p-6 border border-primary-very-light/30 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-medium to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-1">{office.name}</h3>
                <p className="text-primary-medium font-semibold">{office.country}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-light mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{office.address}</p>
                </div>


                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary-light mr-3 flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-gray-700 text-sm hover:text-primary-medium transition-colors">
                    {office.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary-light mr-3 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{office.hours}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-primary-very-light">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-primary-dark mb-1">Specialization:</p>
                  <p className="text-sm text-gray-600">{office.specialization}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-dark mb-1">Languages:</p>
                  <div className="flex flex-wrap gap-1">
                    {office.languages.map((lang) => (
                      <span key={lang} className="inline-block bg-primary-lightest text-primary-dark text-xs px-2 py-1 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalOfficeNetwork;
