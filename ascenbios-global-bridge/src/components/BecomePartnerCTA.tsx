
const BecomePartnerCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-slate-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chinese Manufacturers CTA */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expand Your Global Footprint
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Partner with AscenBio to bring your healthcare innovations to international markets with proven strategies and comprehensive support.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Access to 20+ international markets</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Regulatory navigation and compliance support</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Established distribution networks</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full lg:w-auto bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors">
                  Partner with AscenBio
                </button>
                <div className="text-center lg:text-left">
                  <a href="#" className="text-white opacity-80 hover:opacity-100 underline">
                    Download Partnership Overview
                  </a>
                </div>
              </div>
            </div>

            {/* Global Healthcare Providers CTA */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Access Leading Chinese Healthcare Technology
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Discover innovative, cost-effective healthcare solutions from China's top manufacturers through our trusted partnership network.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>140+ vetted manufacturing partners</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Quality-assured, compliant solutions</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Comprehensive localization support</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <button className="w-full lg:w-auto bg-white text-slate-700 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors">
                  Explore Solutions
                </button>
                <div className="text-center lg:text-left">
                  <a href="#" className="text-white opacity-80 hover:opacity-100 underline">
                    Schedule Technology Assessment
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 pt-12 border-t border-white border-opacity-20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Start Your Partnership Journey?</h3>
              <div className="max-w-md mx-auto">
                <div>
                  <div className="text-lg font-semibold mb-2">Email</div>
                  <div className="opacity-90">partnerships@ascenbio.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartnerCTA;
