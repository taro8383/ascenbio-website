
import { Mail, Linkedin } from "lucide-react";

const ExecutiveDirectory = () => {
  const executives = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      position: 'Chief Executive Officer',
      email: 'sarah.chen@ascen-bio.com',
      expertise: ['Strategic Partnerships', 'Global Expansion', 'Healthcare Innovation'],
      photo: '/placeholder.svg',
      linkedin: '#',
      assistant: 'Jennifer Liu - jennifer.liu@ascen-bio.com',
      note: 'Direct contact for strategic partnerships and high-level business development'
    },
    {
      id: 2,
      name: 'Dr. Michael Rodriguez',
      position: 'Chief Technology Officer',
      email: 'michael.rodriguez@ascen-bio.com',
      expertise: ['Medical Devices', 'Technology Transfer', 'R&D Management'],
      photo: '/placeholder.svg',
      linkedin: '#',
      assistant: 'Anna Wang - anna.wang@ascen-bio.com',
      note: 'Direct contact for technology-related inquiries and innovation partnerships'
    },
    {
      id: 3,
      name: 'Li Wei',
      position: 'Managing Director, China Operations',
      email: 'li.wei@ascen-bio.com',
      expertise: ['Chinese Market', 'Manufacturing', 'Regulatory Affairs'],
      photo: '/placeholder.svg',
      linkedin: '#',
      assistant: 'David Zhang - david.zhang@ascen-bio.com',
      note: 'Direct contact for China-specific opportunities and partnerships'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Leadership Team Direct Contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect directly with our executive team for strategic discussions and high-level partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {executives.map((exec) => (
            <div key={exec.id} className="bg-gradient-to-br from-primary-lightest to-white rounded-xl shadow-lg p-6 border border-primary-very-light/30 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-primary-medium to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {exec.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-1">{exec.name}</h3>
                <p className="text-primary-medium font-semibold mb-2">{exec.position}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={`mailto:${exec.email}`}
                    className="flex items-center bg-primary-medium text-white px-4 py-2 rounded-full hover:bg-primary-light transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-sm">Email</span>
                  </a>
                  <a
                    href={exec.linkedin}
                    className="flex items-center bg-primary-light text-white px-4 py-2 rounded-full hover:bg-primary-very-light transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary-dark mb-2">Areas of Expertise:</p>
                  <div className="flex flex-wrap gap-1">
                    {exec.expertise.map((area) => (
                      <span key={area} className="inline-block bg-primary-lightest text-primary-dark text-xs px-2 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-lightest/50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-2">
                    <strong>Executive Assistant:</strong> {exec.assistant}
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    {exec.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary-lightest rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-primary-dark mb-2">When to Contact Leadership Directly</h4>
            <p className="text-gray-600 text-sm">
              Please contact our leadership team directly for strategic partnerships, major investment discussions, 
              or high-level business development opportunities. For general inquiries, please use our main contact form 
              to ensure faster response times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveDirectory;
