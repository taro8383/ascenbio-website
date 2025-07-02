
const ChinesePartnershipsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light text-white overflow-hidden">
      {/* Background Pattern with Chinese-inspired elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2L74 40h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Connection Network */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="relative w-[800px] h-[500px]">
          {/* Chinese manufacturing hubs */}
          <div className="absolute top-20 left-32 w-6 h-6 bg-primary-light rounded-full animate-pulse"></div>
          <div className="absolute top-40 left-48 w-5 h-5 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-24 left-64 w-4 h-4 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-40 w-5 h-5 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Global markets */}
          <div className="absolute top-16 right-32 w-4 h-4 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-48 right-24 w-4 h-4 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-32 right-40 w-4 h-4 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
          
          {/* Central hub */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-primary-light to-primary-very-light rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.25s' }}></div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
            <defs>
              <linearGradient id="chinaConnectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#90E0EF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <path
              d="M128,80 Q300,150 400,250 Q500,180 672,64"
              stroke="url(#chinaConnectionGradient)"
              strokeWidth="2"
              fill="none"
              className="opacity-60"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-lightest bg-clip-text text-transparent">
          Chinese Healthcare Partnerships
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-primary-lightest max-w-4xl mx-auto">
          Connecting global healthcare markets with China's most innovative medical technology manufacturers
        </p>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-lightest mb-2">140+</div>
            <div className="text-primary-very-light">Partner Manufacturers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-lightest mb-2">20</div>
            <div className="text-primary-very-light">Years of Collaboration</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-lightest mb-2">50+</div>
            <div className="text-primary-very-light">Countries Reached</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChinesePartnershipsHero;
