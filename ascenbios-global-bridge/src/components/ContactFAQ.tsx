
import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

const ContactFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData = [
    {
      id: 1,
      category: 'General Contact',
      question: 'What is the best way to contact AscenBio for partnership inquiries?',
      answer: 'For partnership inquiries, we recommend using our contact form and selecting "Partnership Development" as your inquiry type. This ensures your message reaches our business development team directly.'
    },
    {
      id: 2,
      category: 'Response Times',
      question: 'How quickly can I expect a response to my inquiry?',
      answer: 'We typically respond to general inquiries within 24-48 hours during business days. Partnership and investment inquiries are prioritized and usually receive responses within 24 hours. Emergency contacts for existing partners are available 24/7.'
    },
    {
      id: 3,
      category: 'Regional Support',
      question: 'Do you have local representatives in my region?',
      answer: 'AscenBio might not have a direct office in your area. In such cases, contact will be facilitated through a local partner or directly with our central office. Our team will ensure you receive the appropriate regional support regardless of location.'
    },
    {
      id: 4,
      category: 'Technology Sourcing',
      question: 'How do I inquire about specific medical technologies or devices?',
      answer: 'For technology-specific inquiries, use our contact form with "Technology Sourcing" selected. Please include details about the specific technology, intended market, and regulatory requirements.'
    },
    {
      id: 5,
      category: 'Investment Opportunities',
      question: 'How can I learn about investment opportunities with AscenBio?',
      answer: 'Investment-related inquiries should be directed to our Investor Relations team through the specialized contact channels. You can also reach out to our executive team directly for high-level investment discussions.'
    },
    {
      id: 6,
      category: 'Language Support',
      question: 'What languages do you support for communications?',
      answer: 'We provide support in English, Chinese (Mandarin), Spanish, and several other languages depending on the region.'
    },
    {
      id: 7,
      category: 'Meeting Scheduling',
      question: 'Can I schedule a video call or in-person meeting?',
      answer: 'Yes! Use our Meeting Scheduler tool to book consultations with our team. We offer virtual introductions (30 min), technology consultations (45 min), partnership discussions (60 min), and custom meetings based on your needs.'
    },
    {
      id: 8,
      category: 'Emergency Support',
      question: 'What constitutes an emergency contact situation?',
      answer: 'Emergency contacts are reserved for existing partners experiencing critical supply chain issues, regulatory emergencies, or urgent technical support needs that could impact patient care. Non-partners should use regular contact channels for all inquiries.'
    },
    {
      id: 9,
      category: 'Documentation',
      question: 'How can I request company information, certifications, or technical documentation?',
      answer: 'Company documentation requests should be made through our contact form with "General Information" selected. For technical documentation, specify the exact products or services you\'re interested in. Some documents may require an NDA.'
    },
    {
      id: 10,
      category: 'Career Inquiries',
      question: 'How do I inquire about career opportunities?',
      answer: 'Career-related inquiries should be directed to our HR team through the "Career Information" option in our contact form, or contact our specialized HR channel directly. Include your resume and specify the type of positions you\'re interested in.'
    }
  ];

  const filteredFAQ = faqData.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about contacting and working with AscenBio
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
            />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r from-primary-lightest to-white rounded-lg border border-primary-very-light/30 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary-lightest/50 transition-colors"
                  onClick={() => toggleItem(item.id)}
                >
                  <div>
                    <span className="inline-block bg-primary-medium text-white text-xs font-semibold px-2 py-1 rounded mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-semibold text-primary-dark">{item.question}</h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary-medium transition-transform ${
                      openItem === item.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openItem === item.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQ.length === 0 && (
            <div className="text-center py-8">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No matching questions found. Try a different search term.</p>
            </div>
          )}

          {/* Additional Help */}
          <div className="mt-12 text-center">
            <div className="bg-primary-lightest rounded-xl p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-primary-dark mb-2">Still Have Questions?</h4>
              <p className="text-gray-600 text-sm mb-4">
                If you can't find what you're looking for, don't hesitate to reach out to us directly.
              </p>
              <button className="bg-primary-medium text-white px-6 py-2 rounded-lg hover:bg-primary-light transition-colors">
                Contact Us Directly
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
