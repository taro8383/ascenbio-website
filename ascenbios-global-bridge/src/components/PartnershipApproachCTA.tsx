
import { Button } from "@/components/ui/button";

const PartnershipApproachCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-lightest/30 to-primary-very-light/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-r from-primary-very-light/30 to-primary-lightest/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-lightest rounded-full mr-2 animate-pulse"></span>
            Ready to Deploy Our Capabilities?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Deploy Our Capabilities for Your
            <span className="bg-gradient-to-r from-primary-lightest to-primary-very-light bg-clip-text text-transparent"> Healthcare Initiative</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-lightest mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with proven expertise across the complete healthcare value chain. 
            Let's transform your healthcare vision into operational reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-lightest to-primary-very-light hover:from-primary-very-light hover:to-primary-lightest text-primary-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Schedule Capabilities Consultation
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
          </div>
          
          {/* Capability Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-lg font-semibold mb-1">End-to-End Solutions</div>
              <div className="text-primary-lightest text-sm">Complete value chain coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-lg font-semibold mb-1">Global Network</div>
              <div className="text-primary-lightest text-sm">140+ verified partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-lg font-semibold mb-1">Rapid Deployment</div>
              <div className="text-primary-lightest text-sm">Accelerated implementation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="text-lg font-semibold mb-1">Proven Excellence</div>
              <div className="text-primary-lightest text-sm">95%+ success rate across projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipApproachCTA;
