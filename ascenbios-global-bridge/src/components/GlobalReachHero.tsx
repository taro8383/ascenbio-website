
const GlobalReachHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Global Network */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-[600px] h-[400px]">
          {/* Connection nodes representing global presence */}
          <div className="absolute top-16 left-24 w-4 h-4 bg-primary-light rounded-full animate-pulse"></div>
          <div className="absolute top-32 left-48 w-4 h-4 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-20 right-24 w-4 h-4 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-32 w-4 h-4 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-24 right-32 w-4 h-4 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-40 left-1/2 w-6 h-6 bg-primary-lightest rounded-full animate-pulse transform -translate-x-1/2" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M100,80 Q200,60 300,200 Q400,120 500,80"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="opacity-40"
            />
            <path
              d="M120,160 Q250,100 380,240"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="opacity-40"
            />
            <path
              d="M300,200 Q400,300 480,240"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              className="opacity-40"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Connecting Healthcare Innovation
            <span className="block bg-gradient-to-r from-primary-lightest to-primary-very-light bg-clip-text text-transparent">
              Across Continents
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-lightest mb-12 max-w-3xl mx-auto leading-relaxed">
            Strategic presence in 20+ countries across 5 continents, bridging Chinese innovation with global healthcare needs
          </p>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-lightest mb-2">20+</div>
              <div className="text-sm text-primary-very-light">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-lightest mb-2">5</div>
              <div className="text-sm text-primary-very-light">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-lightest mb-2">140+</div>
              <div className="text-sm text-primary-very-light">Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachHero;
