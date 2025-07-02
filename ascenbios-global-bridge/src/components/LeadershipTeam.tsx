
import { useState } from 'react';

const LeadershipTeam = () => {
  const [selectedLeader, setSelectedLeader] = useState<number | null>(null);

  const leaders = [
    {
      name: 'Dr. Michael Chen',
      position: 'Chief Executive Officer',
      image: '👨‍💼',
      expertise: 'Cross-border healthcare strategy, International trade',
      bio: 'Dr. Chen brings over 15 years of experience in international healthcare markets, having led major technology transfer initiatives across Asia and Latin America.',
      quote: 'Our mission is to ensure that healthcare innovation knows no borders.'
    },
    {
      name: 'Sarah Rodriguez',
      position: 'Chief Operating Officer',
      image: '👩‍💼',
      expertise: 'Operations management, Regulatory compliance',
      bio: 'Sarah oversees our global operations with expertise in regulatory navigation and supply chain optimization across multiple healthcare sectors.',
      quote: 'Excellence in execution transforms innovative ideas into life-saving solutions.'
    },
    {
      name: 'Dr. Li Wei',
      position: 'Chief Technology Officer',
      image: '👨‍🔬',
      expertise: 'Biotechnology, Digital health innovation',
      bio: 'Dr. Li leads our technology initiatives, bridging cutting-edge Chinese innovations with global healthcare needs through strategic partnerships.',
      quote: 'Technology should serve humanity, not the other way around.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experienced leaders driving innovation in global healthcare access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedLeader(selectedLeader === index ? null : index)}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{leader.name}</h3>
                  <p className="text-slate-600">{leader.position}</p>
                </div>
                
                <div className="text-sm text-slate-500 mb-4">
                  {leader.expertise}
                </div>
                
                {selectedLeader === index && (
                  <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                    <p className="text-slate-600 mb-4 leading-relaxed">{leader.bio}</p>
                    <blockquote className="text-slate-700 italic border-l-4 border-slate-300 pl-4">
                      "{leader.quote}"
                    </blockquote>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <span className="text-sm text-slate-500">
                    {selectedLeader === index ? 'Click to collapse' : 'Click to expand'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
