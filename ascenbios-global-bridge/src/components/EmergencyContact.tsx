
import React, { useState } from 'react';
import { Phone, AlertTriangle, Clock, Shield, CheckCircle, Users, Zap } from 'lucide-react';

const EmergencyContact = () => {
  const [showGuidelines, setShowGuidelines] = useState(false);

  const emergencyContacts = [
    {
      type: 'Supply Chain Emergency',
      description: 'Critical supply interruptions affecting patient care',
      phone: '+1-800-ASCEN-911',
      email: 'emergency@ascenbio.com',
      availableFor: 'Existing Partners Only',
      responseTime: 'Within 2 hours'
    },
    {
      type: 'Technical Support Emergency',
      description: 'Device malfunctions or safety concerns',
      phone: '+1-800-TECH-911',
      email: 'tech-emergency@ascenbio.com',
      availableFor: 'Partners & End Users',
      responseTime: 'Within 1 hour'
    },
    {
      type: 'Regulatory Emergency',
      description: 'Urgent regulatory or compliance issues',
      phone: '+1-800-REG-HELP',
      email: 'regulatory-emergency@ascenbio.com',
      availableFor: 'Existing Partners Only',
      responseTime: 'Within 4 hours'
    }
  ];

  const emergencyGuidelines = [
    {
      title: 'Supply Chain Emergencies',
      icon: Users,
      situations: [
        'Complete stock-out of critical medical supplies',
        'Manufacturing defects affecting patient safety',
        'Shipping delays for time-sensitive medical products',
        'Quality control issues requiring immediate attention'
      ]
    },
    {
      title: 'Technical Emergencies',
      icon: Zap,
      situations: [
        'Medical device malfunctions during critical procedures',
        'Software failures in healthcare IT systems',
        'Safety alerts or recall situations',
        'Urgent technical support for life-supporting equipment'
      ]
    },
    {
      title: 'Regulatory Emergencies',
      icon: Shield,
      situations: [
        'FDA or regulatory body inquiries requiring immediate response',
        'Product recall coordination',
        'Compliance violations with patient safety implications',
        'Emergency regulatory submissions'
      ]
    }
  ];

  const currentTime = new Date();
  const isBusinessHours = currentTime.getHours() >= 9 && currentTime.getHours() < 17;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-lightest to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
            <h2 className="text-4xl font-bold text-primary-dark">Emergency Contact</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            24/7 urgent assistance for existing partners and critical situations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Status */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-primary-very-light/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary-medium mr-3" />
                <span className="text-lg font-semibold text-primary-dark">Emergency Support Status</span>
              </div>
              <div className={`flex items-center px-4 py-2 rounded-full ${
                isBusinessHours 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  isBusinessHours ? 'bg-green-500' : 'bg-yellow-500'
                } animate-pulse`}></div>
                {isBusinessHours ? 'Full Staff Available' : '24/7 Emergency Coverage'}
              </div>
            </div>
            <p className="text-gray-600 mt-2">
              {isBusinessHours 
                ? 'All emergency lines are fully staffed during business hours (9 AM - 5 PM EST)'
                : 'After-hours emergency support available with on-call specialists'
              }
            </p>
          </div>

          {/* Emergency Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-red-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark">{contact.type}</h3>
                  <p className="text-sm text-gray-600 mt-1">{contact.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="text-center">
                    <a
                      href={`tel:${contact.phone}`}
                      className="block bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg"
                    >
                      {contact.phone}
                    </a>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-primary-medium hover:text-primary-light underline text-sm"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-semibold text-red-800">Available For:</span>
                      <span className="text-red-600">{contact.availableFor}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-red-800">Response Time:</span>
                      <span className="text-red-600">{contact.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Guidelines */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-primary-very-light/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-primary-dark">What Constitutes an Emergency?</h3>
              <button
                onClick={() => setShowGuidelines(!showGuidelines)}
                className="bg-primary-medium text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
              >
                {showGuidelines ? 'Hide Guidelines' : 'View Guidelines'}
              </button>
            </div>

            {showGuidelines && (
              <div className="space-y-6">
                {emergencyGuidelines.map((guideline, index) => {
                  const IconComponent = guideline.icon;
                  return (
                    <div key={index} className="border-l-4 border-primary-medium pl-6">
                      <div className="flex items-center mb-3">
                        <IconComponent className="h-6 w-6 text-primary-medium mr-3" />
                        <h4 className="text-lg font-semibold text-primary-dark">{guideline.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {guideline.situations.map((situation, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{situation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Important Notice */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h4>
                <div className="text-yellow-700 space-y-2">
                  <p className="text-sm">
                    <strong>For Existing Partners:</strong> Emergency contacts are reserved for critical situations 
                    that could impact patient care or safety. Please use regular contact channels for non-urgent matters.
                  </p>
                  <p className="text-sm">
                    <strong>For New Inquiries:</strong> If you're not an existing partner, please use our 
                    main contact form or schedule a consultation for all non-emergency communications.
                  </p>
                  <p className="text-sm">
                    <strong>Life-Threatening Emergencies:</strong> For immediate medical emergencies, 
                    contact your local emergency services (911, 112, etc.) first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;
