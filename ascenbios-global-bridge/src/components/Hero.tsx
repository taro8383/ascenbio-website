
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Animated Healthcare Network */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="relative w-96 h-96">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-light rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-3 h-3 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 left-0 w-3 h-3 bg-primary-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 left-0 w-4 h-4 bg-primary-very-light rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <path
              d="M200,50 L350,100 L350,300 L200,350 L50,300 L50,100 Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="opacity-30"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Bridging Healthcare Innovation
            <span className="block bg-gradient-to-r from-primary-lightest to-primary-very-light bg-clip-text text-transparent">
              From China to the World
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-lightest mb-12 max-w-3xl mx-auto leading-relaxed">
            Strategic partnerships connecting Chinese medical technology innovations with global healthcare systems, 
            enabling accessible, sustainable healthcare solutions worldwide.
          </p>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-lightest mb-2">140+</div>
              <div className="text-sm text-primary-very-light">Chinese Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-lightest mb-2">20+</div>
              <div className="text-sm text-primary-very-light">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
