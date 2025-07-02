
import React, { useState } from 'react';
import { Mail, CheckCircle, Bell, TrendingUp, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactNewsletter = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    marketUpdates: true,
    techInnovations: true,
    partnershipOpportunities: false,
    industryEvents: false,
    companyNews: false
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with your newsletter service (Mailchimp, SendGrid, etc.)
    toast({
      title: "Successfully Subscribed!",
      description: "Welcome to our newsletter. You'll receive updates based on your preferences.",
    });

    setIsSubscribed(true);
    setEmail('');
  };

  const handlePreferenceChange = (preference: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [preference]: !prev[preference]
    }));
  };

  const contentTypes = [
    {
      id: 'marketUpdates',
      name: 'Market Updates',
      description: 'Latest healthcare market trends and analysis',
      icon: TrendingUp,
      frequency: 'Weekly'
    },
    {
      id: 'techInnovations',
      name: 'Technology Innovations',
      description: 'New medical technologies and breakthrough innovations',
      icon: Bell,
      frequency: 'Bi-weekly'
    },
    {
      id: 'partnershipOpportunities',
      name: 'Partnership Opportunities',
      description: 'Exclusive partnership and collaboration opportunities',
      icon: Users,
      frequency: 'Monthly'
    },
    {
      id: 'industryEvents',
      name: 'Industry Events',
      description: 'Conferences, webinars, and networking events',
      icon: Building,
      frequency: 'As needed'
    },
    {
      id: 'companyNews',
      name: 'Company News',
      description: 'AscenBio announcements and company updates',
      icon: Mail,
      frequency: 'Monthly'
    }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary-lightest to-white rounded-xl shadow-lg p-8 border border-primary-very-light/30">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Thank You for Subscribing!</h2>
              <p className="text-gray-600 mb-6">
                You've successfully joined our newsletter community. You'll start receiving updates based on your preferences soon.
              </p>
              <div className="bg-primary-lightest rounded-lg p-4">
                <h4 className="font-semibold text-primary-dark mb-2">What's Next?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Check your email for a confirmation message</li>
                  <li>• Add our email to your contacts to ensure delivery</li>
                  <li>• Update your preferences anytime through newsletter links</li>
                </ul>
              </div>
              <Button
                onClick={() => setIsSubscribed(false)}
                variant="outline"
                className="mt-6"
              >
                Subscribe Another Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest healthcare innovation insights
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-lightest to-white rounded-xl shadow-lg p-8 border border-primary-very-light/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
            </div>

            {/* Content Preferences */}
            <div>
              <h3 className="text-lg font-semibold text-primary-dark mb-4">Content Preferences</h3>
              <p className="text-sm text-gray-600 mb-4">
                Choose the types of content you'd like to receive:
              </p>
              
              <div className="space-y-3">
                {contentTypes.map((content) => {
                  const IconComponent = content.icon;
                  return (
                    <div
                      key={content.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        preferences[content.id as keyof typeof preferences]
                          ? 'border-primary-medium bg-primary-lightest'
                          : 'border-gray-200 hover:border-primary-light'
                      }`}
                      onClick={() => handlePreferenceChange(content.id as keyof typeof preferences)}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <div className={`p-2 rounded-lg ${
                            preferences[content.id as keyof typeof preferences]
                              ? 'bg-primary-medium text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="font-semibold text-primary-dark">{content.name}</h4>
                            <span className="text-xs bg-primary-very-light text-primary-dark px-2 py-1 rounded">
                              {content.frequency}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{content.description}</p>
                        </div>
                        <div className="flex-shrink-0 ml-3">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            preferences[content.id as keyof typeof preferences]
                              ? 'border-primary-medium bg-primary-medium'
                              : 'border-gray-300'
                          }`}>
                            {preferences[content.id as keyof typeof preferences] && (
                              <CheckCircle className="h-3 w-3 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-primary-lightest/50 rounded-lg p-4">
              <p className="text-xs text-gray-600">
                <strong>Privacy Assurance:</strong> We respect your privacy and will never share your email 
                address with third parties. You can unsubscribe at any time using the link in our emails. 
                Read our <a href="#" className="text-primary-medium hover:underline">Privacy Policy</a> for more details.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="bg-primary-medium hover:bg-primary-light text-white px-8 py-3">
                Subscribe to Newsletter
              </Button>
            </div>
          </form>

          {/* Sample Newsletter Link */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-sm text-primary-medium hover:text-primary-light underline"
            >
              View a sample newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNewsletter;
