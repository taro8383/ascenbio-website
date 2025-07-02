
const ChineseNetwork = () => {
  const categories = [
    { name: 'In Vitro Diagnostics', count: 42, icon: '🧪' },
    { name: 'Medical Devices', count: 38, icon: '🏥' },
    { name: 'Pharmaceuticals', count: 35, icon: '💊' },
    { name: 'Biotechnology', count: 25, icon: '🧬' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Chinese Manufacturing Network</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Strategic partnerships with leading Chinese healthcare manufacturers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.name}</h3>
                <div className="text-2xl font-bold text-slate-600">{category.count}</div>
                <p className="text-sm text-slate-500">Partners</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Partnership Highlights</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Manufacturing Capabilities</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>ISO 13485 Certified Facilities</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>FDA & CE Mark Compliance</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>GMP Manufacturing Standards</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Quality Assurance</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Rigorous Quality Control</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>International Standards Compliance</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>Continuous Improvement Programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChineseNetwork;
