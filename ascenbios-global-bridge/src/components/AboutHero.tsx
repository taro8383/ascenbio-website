
const AboutHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Connection Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-0.5 bg-gradient-to-r from-primary-lightest/20 to-transparent rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-0.5 bg-gradient-to-l from-primary-lightest/20 to-transparent -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Connecting Innovation
            <span className="bg-gradient-to-r from-primary-lightest to-primary-very-light bg-clip-text text-transparent"> Across Borders</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-lightest mb-8 max-w-3xl mx-auto leading-relaxed">
            The story of how we're transforming global healthcare access through strategic partnerships
          </p>
          
          <div className="flex justify-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-lightest to-primary-very-light"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
