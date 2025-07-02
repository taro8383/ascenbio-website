
const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Narrative Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-slate-600 mb-8"></div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Founding Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  Founded through a unique partnership between Chinese IVD manufacturers and international trade experts, 
                  AscenBio was created to solve the challenges of cross-border healthcare technology transfer.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">The Challenge</h3>
                <p className="text-slate-600 leading-relaxed">
                  We identified critical gaps in global healthcare market access, where innovative Chinese technologies 
                  struggled to reach markets that needed them most, while emerging markets lacked efficient pathways 
                  to access cutting-edge healthcare solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Solution</h3>
                <p className="text-slate-600 leading-relaxed">
                  AscenBio bridges these gaps through specialized expertise in regulatory navigation, cultural adaptation, 
                  and sustainable technology transfer, creating lasting partnerships that benefit all stakeholders.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
            <div className="relative aspect-w-16 aspect-h-9 lg:aspect-none">
              <div className="bg-slate-100 rounded-lg overflow-hidden w-full h-64 lg:h-96">
                <img 
                  src="/collaboration.jpg" 
                  alt="East-West Healthcare Collaboration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-slate-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Founded 2022
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              140+ Partners
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
