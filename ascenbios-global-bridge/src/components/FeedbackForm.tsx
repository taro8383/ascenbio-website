
import React, { useState } from 'react';
import { MessageSquare, Star, Send, CheckCircle, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    rating: 0,
    message: '',
    contactMe: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { toast } = useToast();

  const feedbackTypes = [
    { id: 'website', name: 'Website Experience', description: 'Navigation, design, or usability feedback' },
    { id: 'services', name: 'Our Services', description: 'Feedback about our healthcare solutions' },
    { id: 'communication', name: 'Communication', description: 'How we handle inquiries and follow-ups' },
    { id: 'partnership', name: 'Partnership Experience', description: 'Working relationship and collaboration' },
    { id: 'suggestion', name: 'Suggestions', description: 'Ideas for improvement or new services' },
    { id: 'other', name: 'Other', description: 'Any other feedback or comments' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.feedbackType || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please select a feedback type and provide your message.",
        variant: "destructive",
      });
      return;
    }

    // Here you would send the feedback to your backend
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback! We'll review it and get back to you if requested.",
    });

    setIsSubmitted(true);
  };

  const handleRatingClick = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary-lightest to-white rounded-xl shadow-lg p-8 border border-primary-very-light/30">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Thank You for Your Feedback!</h2>
              <p className="text-gray-600 mb-6">
                Your feedback is valuable to us and helps us improve our services. We appreciate you taking the time to share your thoughts.
              </p>
              <div className="bg-primary-lightest rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-primary-dark mb-2">What Happens Next?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Your feedback will be reviewed by our team within 2 business days</li>
                  {formData.contactMe && <li>• We'll reach out to you for follow-up if requested</li>}
                  <li>• Suggestions will be considered for future improvements</li>
                  <li>• Critical issues will be addressed immediately</li>
                </ul>
              </div>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    feedbackType: '',
                    rating: 0,
                    message: '',
                    contactMe: false
                  });
                }}
                variant="outline"
              >
                Submit Another Feedback
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
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Help Us Improve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your feedback to help us enhance our services and website experience
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-lightest to-white rounded-xl shadow-lg p-8 border border-primary-very-light/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            {/* Feedback Type */}
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-3">
                What area would you like to provide feedback about? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {feedbackTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.feedbackType === type.id
                        ? 'border-primary-medium bg-primary-lightest'
                        : 'border-gray-200 hover:border-primary-light'
                    }`}
                    onClick={() => setFormData({ ...formData, feedbackType: type.id })}
                  >
                    <h4 className="font-semibold text-primary-dark mb-1">{type.name}</h4>
                    <p className="text-xs text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-3">
                How would you rate your overall experience?
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className={`p-1 transition-colors ${
                      star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                    } hover:text-yellow-400`}
                  >
                    <Star className="h-8 w-8 fill-current" />
                  </button>
                ))}
                {formData.rating > 0 && (
                  <span className="ml-3 text-sm text-gray-600">
                    {formData.rating === 1 && 'Poor'}
                    {formData.rating === 2 && 'Fair'}
                    {formData.rating === 3 && 'Good'}
                    {formData.rating === 4 && 'Very Good'}
                    {formData.rating === 5 && 'Excellent'}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Your Feedback *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent resize-none"
                placeholder="Please share your thoughts, suggestions, or any issues you've encountered..."
              />
            </div>

            {/* Contact Me Option */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="contactMe"
                checked={formData.contactMe}
                onChange={(e) => setFormData({ ...formData, contactMe: e.target.checked })}
                className="mt-1 h-4 w-4 text-primary-medium border-gray-300 rounded focus:ring-primary-light"
              />
              <label htmlFor="contactMe" className="ml-3 text-sm text-gray-700">
                I would like someone from AscenBio to contact me about my feedback
                <span className="block text-xs text-gray-500 mt-1">
                  (Email address required if you check this option)
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="bg-primary-medium hover:bg-primary-light text-white px-8 py-3">
                <Send className="h-4 w-4 mr-2" />
                Submit Feedback
              </Button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 bg-primary-lightest/50 rounded-lg p-4">
            <div className="flex items-start">
              <ThumbsUp className="h-5 w-5 text-primary-medium mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-primary-dark mb-1">We Value Your Input</h4>
                <p className="text-sm text-gray-600">
                  Your feedback helps us continuously improve our services, website experience, 
                  and partnership processes. All feedback is reviewed and considered for future enhancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
