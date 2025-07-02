
import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";

const PartnershipCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-primary-very-light/30 to-primary-lightest/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-r from-primary-lightest/30 to-primary-very-light/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-very-light/20 to-primary-lightest/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-primary-lightest rounded-full mr-2 animate-pulse"></span>
            Ready to Transform Healthcare Delivery?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Healthcare Delivery in
            <span className="bg-gradient-to-r from-primary-lightest to-primary-very-light bg-clip-text text-transparent"> Emerging Markets</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-lightest mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with the proven expert in cross-border healthcare solutions. 
            Let's bridge innovation with implementation to create lasting healthcare impact.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-lightest to-primary-very-light hover:from-primary-very-light hover:to-primary-lightest text-primary-dark font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Request Consultation
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-lg font-semibold mb-1">Rapid Deployment</div>
              <div className="text-primary-lightest text-sm">Average 90-day implementation timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛡️</div>
              <div className="text-lg font-semibold mb-1">Risk Mitigation</div>
              <div className="text-primary-lightest text-sm">Comprehensive compliance & quality assurance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-lg font-semibold mb-1">Ongoing Support</div>
              <div className="text-primary-lightest text-sm">24/7 technical support & maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCTA;
