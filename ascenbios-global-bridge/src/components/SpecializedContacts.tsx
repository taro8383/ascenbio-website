
import { Building2, TrendingUp, FileText, Headphones, Users, ShoppingCart } from "lucide-react";

const SpecializedContacts = () => {
  const departments = [
    {
      id: 1,
      title: 'Business Development & Partnerships',
      description: 'For strategic partnership inquiries and business opportunities',
      icon: Building2,
      email: 'partnerships@ascen-bio.com',
      specialization: 'Strategic alliances, joint ventures, distribution partnerships'
    },
    {
      id: 2,
      title: 'Investor Relations',
      description: 'For investment-related inquiries and financial information',
      icon: TrendingUp,
      email: 'investors@ascen-bio.com',
      specialization: 'Financial reports, investment opportunities, stakeholder communications'
    },
    {
      id: 3,
      title: 'Media & Press',
      description: 'For journalist inquiries, interview requests, and press kits',
      icon: FileText,
      email: 'press@ascen-bio.com',
      specialization: 'Press releases, media kits, executive interviews, company announcements'
    },
    {
      id: 4,
      title: 'Technical Support',
      description: 'For partners requiring technical assistance',
      icon: Headphones,
      email: 'support@ascen-bio.com',
      specialization: '24/7 technical support, implementation assistance, troubleshooting'
    },
    {
      id: 5,
      title: 'Careers & HR',
      description: 'For employment opportunities and recruitment inquiries',
      icon: Users,
      email: 'careers@ascen-bio.com',
      specialization: 'Job applications, recruitment, employee relations, benefits'
    },
    {
      id: 6,
      title: 'Procurement & Supply Chain',
      description: 'For vendor and supplier inquiries',
      icon: ShoppingCart,
      email: 'procurement@ascen-bio.com',
      specialization: 'Vendor registration, supply chain partnerships, procurement processes'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-lightest to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Specialized Contact Channels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with the right department for your specific needs and get expert assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => {
            const IconComponent = dept.icon;
            return (
              <div key={dept.id} className="bg-white rounded-xl shadow-lg p-6 border border-primary-very-light/30 hover:shadow-xl transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-medium to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-2">{dept.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <a
                      href={`mailto:${dept.email}`}
                      className="bg-primary-medium text-white px-4 py-2 rounded-full hover:bg-primary-light transition-colors text-sm font-medium"
                    >
                      {dept.email}
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-primary-very-light">
                  <p className="text-xs text-gray-600 text-center">
                    <strong>Specialization:</strong> {dept.specialization}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto border border-primary-very-light/30">
            <h4 className="text-lg font-semibold text-primary-dark mb-4">Need Help Choosing the Right Contact?</h4>
            <p className="text-gray-600 mb-4">
              If you're unsure which department to contact, use our general contact form above, 
              and we'll route your inquiry to the appropriate specialist.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-primary-lightest text-primary-dark px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-medium rounded-full mr-2"></div>
                Average Response: 4 hours
              </div>
              <div className="flex items-center bg-primary-lightest text-primary-dark px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary-medium rounded-full mr-2"></div>
                Business Hours: Mon-Fri 9AM-6PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedContacts;
