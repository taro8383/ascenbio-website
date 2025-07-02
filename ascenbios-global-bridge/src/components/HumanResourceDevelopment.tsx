
const HumanResourceDevelopment = () => {
  const stages = [
    { year: 'Year 1', title: 'Foundation Building', activities: ['Recruitment strategy', 'Basic training', 'Infrastructure setup'] },
    { year: 'Year 2', title: 'Skill Development', activities: ['Advanced training', 'Certification programs', 'Process optimization'] },
    { year: 'Year 3', title: 'Capability Enhancement', activities: ['Leadership development', 'Innovation projects', 'Quality improvement'] },
    { year: 'Year 4', title: 'Knowledge Transfer', activities: ['Mentorship programs', 'Documentation', 'Best practices'] },
    { year: 'Year 5', title: 'Sustainability', activities: ['Independent operations', 'Continuous improvement', 'Innovation leadership'] }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Human Resource Development & Capacity Building</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare workforce and capacity development ensuring sustainable operations
          </p>
        </div>

        {/* Key Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Retention Strategy</h3>
            <p className="text-gray-600 mb-6">Designing competitive packages for healthcare professional retention</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <span className="text-sm text-gray-700">Average Retention Rate</span>
                <span className="font-semibold text-slate-600">94%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <span className="text-sm text-gray-700">Employee Satisfaction</span>
                <span className="font-semibold text-slate-600">4.7/5</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Training Programs</h3>
            <p className="text-gray-600 mb-6">Implementing accelerated certification courses and simulation-based learning</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <span className="text-sm text-gray-700">Training Completion Rate</span>
                <span className="font-semibold text-slate-600">96%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <span className="text-sm text-gray-700">Certification Success</span>
                <span className="font-semibold text-slate-600">92%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Knowledge Management</h3>
            <p className="text-gray-600 mb-6">Creating sustainable documentation and best practices repositories</p>
            <div className="space-y-2">
              {['Digital knowledge base', 'Process documentation', 'Best practices library', 'Training materials'].map((item, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Transfer Training</h3>
            <p className="text-gray-600 mb-6">Building local expertise through comprehensive skills development</p>
            <div className="space-y-2">
              {['Technical skills transfer', 'Equipment operation', 'Maintenance procedures', 'Quality control'].map((item, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mr-3"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5-Year Workforce Development Timeline */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Capability Building Timeline</h3>
          
          <div className="space-y-8">
            {stages.map((stage, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{stage.year}</h4>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      {stage.title}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {stage.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="bg-slate-50 p-3 rounded-lg">
                        <span className="text-sm text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanResourceDevelopment;
