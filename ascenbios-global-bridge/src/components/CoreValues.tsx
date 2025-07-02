
import CoreValuesVisual from "./CoreValuesVisual";

const CoreValues = () => {
  const values = [
    {
      title: 'Trust',
      description: 'Building relationships based on transparency and reliability',
      image: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Consistently seeking improved healthcare delivery models',
      image: '💡'
    },
    {
      title: 'Adaptability',
      description: 'Customizing approaches for diverse market conditions',
      image: '🌍'
    },
    {
      title: 'Excellence',
      description: 'Commitment to highest quality standards in all operations',
      image: '⭐'
    },
    {
      title: 'Global Perspective',
      description: 'Respecting and integrating diverse healthcare approaches',
      image: '🌐'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The principles that guide our mission and define our approach to global healthcare transformation
          </p>
        </div>

        <div className="space-y-16">
          {values.map((value, index) => (
            <div key={index} className="space-y-8 lg:space-y-0">
              {/* Text content - always first on mobile, alternates on desktop */}
              <div className={`lg:flex lg:items-center lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:flex-1">
                  <div className="text-6xl mb-6">{value.image}</div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">{value.description}</p>
                </div>
                {/* Visual content - full width on mobile, flex-1 on desktop */}
                <div className="mt-8 lg:mt-0 lg:flex-1">
                  <CoreValuesVisual value={value.title} />
                </div>
              </div>
              {/* Divider between items except last */}
              {index < values.length - 1 && (
                <div className="border-t border-slate-200 pt-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
