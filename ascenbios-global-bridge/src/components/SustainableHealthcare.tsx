
const SustainableHealthcare = () => {
  const impacts = [
    { metric: '8M+', label: 'Patients Reached', icon: '👥' },
    { metric: '15,000+', label: 'Jobs Created', icon: '💼' },
    { metric: '95%', label: 'Local Workforce', icon: '🌍' },
    { metric: '30%', label: 'Carbon Reduction', icon: '🌱' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Commitment to Sustainable Healthcare</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Building healthcare ecosystems that create lasting positive impact for communities worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Sustainable Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Knowledge Transfer</h4>
                  <p className="text-slate-600">Building local expertise through comprehensive training programs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Local Capacity Building</h4>
                  <p className="text-slate-600">Establishing manufacturing and service capabilities in target markets</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Environmental Responsibility</h4>
                  <p className="text-slate-600">Implementing green technologies and sustainable practices</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl mb-2">{impact.icon}</div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{impact.metric}</div>
                <div className="text-sm text-slate-600">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Long-term Vision</h3>
          <p className="text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
            Our vision extends beyond immediate market access to creating self-sustaining healthcare ecosystems 
            that continue to innovate and improve patient outcomes long after initial implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainableHealthcare;
