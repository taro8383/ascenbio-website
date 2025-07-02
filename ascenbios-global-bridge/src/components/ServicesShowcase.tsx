
import { Card, CardContent } from "@/components/ui/card";

const ServicesShowcase = () => {
  const services = [
    {
      step: '01',
      title: 'Regulatory Navigation & Compliance',
      description: 'Navigate complex regulatory landscapes with expert guidance on local healthcare standards, certifications, and compliance requirements.',
      icon: '📋',
      color: 'from-primary-medium to-primary-light'
    },
    {
      step: '02',
      title: 'Manufacturer Selection & Partnership',
      description: 'Connect with pre-vetted Chinese healthcare manufacturers through our extensive network of verified partners and quality-assured suppliers.',
      icon: '🤝',
      color: 'from-primary-light to-primary-very-light'
    },
    {
      step: '03',
      title: 'Technology Transfer & Adaptation',
      description: 'Seamlessly adapt cutting-edge healthcare technologies to local market needs with comprehensive training and implementation support.',
      icon: '🔄',
      color: 'from-primary-medium to-primary-light'
    },
    {
      step: '04',
      title: 'Supply Chain & Logistics',
      description: 'Optimize global supply chains with efficient logistics solutions, inventory management, and quality control throughout the process.',
      icon: '🚚',
      color: 'from-primary-light to-primary-very-light'
    },
    {
      step: '05',
      title: 'Local Distribution & Installation',
      description: 'Establish robust local distribution networks and provide professional installation services with ongoing technical support.',
      icon: '🏥',
      color: 'from-primary-medium to-primary-light'
    },
    {
      step: '06',
      title: 'Technical Service & Maintenance',
      description: 'Ensure long-term success with comprehensive maintenance programs, technical support, and continuous performance optimization.',
      icon: '🔧',
      color: 'from-primary-light to-primary-very-light'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-lightest to-primary-very-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            End-to-End Service Excellence
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Our comprehensive service flow ensures seamless healthcare innovation deployment from concept to completion
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-primary-light via-primary-medium to-primary-dark transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col w-full lg:items-center lg:gap-12 gap-8`}
              >
                {/* Step Indicator - Now first on mobile */}
                <div className="relative lg:order-none order-first">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-xl">
                      {service.step}
                    </span>
                  </div>
                  {index < services.length - 1 && (
                    <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-current to-transparent opacity-30"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-white text-lg">
                            {service.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                              {service.step}
                            </span>
                            <h3 className="text-xl font-bold text-primary-dark group-hover:text-primary-medium transition-colors">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-primary-medium leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for reverse layout */}
                <div className="flex-1 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
