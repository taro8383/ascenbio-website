
import { Button } from "@/components/ui/button";

const GlobalPartnershipCTA = () => {
  const regionalCTAs = [
    {
      region: 'Latin America',
      title: 'Expand Your Healthcare Solutions in Latin America',
      description: 'Leverage our established Bioproductos Latam network and deep regional expertise',
      nextSteps: ['Schedule regional market assessment', 'Connect with local partners', 'Explore regulatory pathways'],
      contact: 'latam@ascen-bio.com',
      flag: '🌎'
    },
    {
      region: 'Southeast Asia',
      title: 'Access Growing ASEAN Healthcare Markets',
      description: 'Navigate diverse regulations and cultural contexts with our Singapore-based team',
      nextSteps: ['Regional opportunity analysis', 'Regulatory compliance review', 'Partner network introduction'],
      contact: 'asia@ascen-bio.com',
      flag: '🌏'
    },
    {
      region: 'Africa',
      title: 'Transform African Healthcare Access',
      description: 'Deploy appropriate technology solutions for diverse African healthcare systems',
      nextSteps: ['Market entry strategy development', 'Local partnership facilitation', 'Technology adaptation planning'],
      contact: 'africa@ascen-bio.com',
      flag: '🌍'
    },
    {
      region: 'Middle East',
      title: 'Participate in Middle East Healthcare Innovation',
      description: 'Access rapidly modernizing healthcare systems and medical tourism markets',
      nextSteps: ['Strategic market positioning', 'Government liaison support', 'Premium healthcare network access'],
      contact: 'middleeast@ascen-bio.com',
      flag: '🏛️'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-light text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Partner With Us Globally
          </h2>
          <p className="text-xl text-primary-lightest max-w-3xl mx-auto">
            Choose your region and discover how AscenBio can accelerate your healthcare expansion
          </p>
        </div>

        {/* Regional Partnership Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {regionalCTAs.map((cta, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {cta.title}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">{cta.flag}</span>
                    <span className="text-primary-lightest font-semibold">{cta.region}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-primary-lightest mb-4">
                {cta.description}
              </p>
              
              <div className="mb-6">
                <span className="font-semibold text-white block mb-3">Next Steps:</span>
                <ul className="space-y-2">
                  {cta.nextSteps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start text-sm text-primary-lightest">
                      <div className="w-2 h-2 bg-primary-lightest rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="text-sm text-primary-lightest">{cta.contact}</div>
                  <Button className="bg-primary-lightest hover:bg-primary-very-light text-primary-dark border-primary-lightest">
                    Schedule Regional Consultation
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Partnership CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Region is Right for You?
            </h3>
            <p className="text-xl text-primary-lightest mb-8">
              Let our global team help you identify the best markets for your healthcare innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary-lightest hover:bg-primary-very-light text-primary-dark px-8 py-3 text-lg">
                Schedule Global Strategy Session
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-primary-lightest">
                <div>
                  <span className="font-semibold text-white">Global Headquarters:</span>
                  <div>info@ascen-bio.com</div>
                </div>
                <div>
                  <span className="font-semibold text-white">Partnership Inquiries:</span>
                  <div>partnerships@ascen-bio.com</div>
                  <div>Available 24/7</div>
                </div>
                <div>
                  <span className="font-semibold text-white">Technical Support:</span>
                  <div>support@ascen-bio.com</div>
                  <div>Multi-language support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnershipCTA;
