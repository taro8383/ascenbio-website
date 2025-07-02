import React from 'react';

const SuccessStory = () => {
  const caseStudy = {
    title: "Successful Partnership with XYZ Medical",
    description: "How we helped XYZ Medical expand into the Chinese market",
    details: [
      "Increased market access by 300%",
      "Reduced regulatory approval time by 40%",
      "Established 5 new manufacturing partnerships",
      "Achieved 95% customer satisfaction"
    ],
    quote: "The AscenBio team provided invaluable guidance and support throughout our expansion process."
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{caseStudy.description}</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {caseStudy.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Testimonial</h3>
              <blockquote className="text-gray-700 italic">
                "{caseStudy.quote}"
              </blockquote>
              <p className="mt-4 text-gray-600">- XYZ Medical CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
