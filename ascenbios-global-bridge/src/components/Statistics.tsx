
import { useEffect, useState } from "react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    countries: 0,
    partnerships: 0,
    experience: 0,
    projects: 0
  });

  const stats = [
    {
      number: 20,
      suffix: '+',
      label: 'Countries with Active Operations',
      description: 'Global reach across diverse healthcare markets'
    },
    {
      number: 140,
      suffix: '+',
      label: 'Chinese Healthcare Manufacturer Partnerships',
      description: 'Direct relationships with leading innovators'
    },
    {
      number: 10,
      suffix: '+',
      label: 'Years of Cross-Border Experience',
      description: 'Proven expertise in complex market navigation'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('statistics');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = (target: number, key: keyof typeof counts) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 40);
    };

    animateCount(20, 'countries');
    animateCount(140, 'partnerships');
    animateCount(10, 'experience');
  }, [isVisible]);

  return (
    <section id="statistics" className="py-20 bg-gradient-to-r from-primary-lightest to-primary-very-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Proven Global Impact
          </h2>
          <p className="text-xl text-primary-medium max-w-3xl mx-auto">
            Our track record speaks to our commitment to bridging healthcare innovation across borders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-medium to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">
                  {index === 0 ? '🌍' : index === 1 ? '🤝' : '⭐'}
                </span>
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-primary-dark mb-2">
                <span className="bg-gradient-to-r from-primary-medium to-primary-light bg-clip-text text-transparent">
                  {Object.values(counts)[index]}
                  {stat.suffix}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-primary-dark mb-3">
                {stat.label}
              </h3>
              
              <p className="text-primary-medium text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
