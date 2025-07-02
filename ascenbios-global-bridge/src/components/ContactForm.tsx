import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    inquiryType: '',
    regions: [],
    techAreas: [],
    message: '',
    hearAbout: '',
    contactMethod: 'email',
    consent: false
  });

  const inquiryTypes = [
    'Partnership Development',
    'Technology Sourcing',
    'Distribution Opportunities',
    'Investment Inquiries',
    'Career Information',
    'Media Request',
    'General Information'
  ];

  const regions = [
    'Latin America & Caribbean',
    'North America',
    'Europe',
    'Africa',
    'Middle East',
    'Asia Pacific'
  ];

  const techAreas = [
    'In Vitro Diagnostics',
    'Medical Devices',
    'Pharmaceuticals',
    'Healthcare IT',
    'Medical Supplies',
    'Consulting Services'
  ];

  const hearAboutOptions = [
    'Search Engine',
    'Professional Referral',
    'Industry Event',
    'Social Media',
    'Existing Partner',
    'Other'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Complete the form below and we'll connect you with the right expert
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-lightest to-white rounded-2xl p-8 shadow-lg border border-primary-very-light/20">
            <form className="space-y-8">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-primary-dark font-semibold">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 border-primary-light/30 focus:border-primary-medium"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-primary-dark font-semibold">Company *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="mt-1 border-primary-light/30 focus:border-primary-medium"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="position" className="text-primary-dark font-semibold">Position</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    className="mt-1 border-primary-light/30 focus:border-primary-medium"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-primary-dark font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 border-primary-light/30 focus:border-primary-medium"
                    required
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <Label htmlFor="inquiryType" className="text-primary-dark font-semibold">Inquiry Type *</Label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                  className="mt-1 w-full px-3 py-2 border border-primary-light/30 rounded-md focus:border-primary-medium focus:outline-none focus:ring-2 focus:ring-primary-medium/20"
                  required
                >
                  <option value="">Select inquiry type...</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Regions of Interest */}
              <div>
                <Label className="text-primary-dark font-semibold">Regions of Interest</Label>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {regions.map((region) => (
                    <div key={region} className="flex items-center space-x-2">
                      <Checkbox
                        id={region}
                        className="border-primary-medium data-[state=checked]:bg-primary-medium"
                      />
                      <Label htmlFor={region} className="text-sm text-gray-700">{region}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Areas */}
              <div>
                <Label className="text-primary-dark font-semibold">Technology Areas of Interest</Label>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {techAreas.map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox
                        id={area}
                        className="border-primary-medium data-[state=checked]:bg-primary-medium"
                      />
                      <Label htmlFor={area} className="text-sm text-gray-700">{area}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-primary-dark font-semibold">Message Details *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-1 border-primary-light/30 focus:border-primary-medium min-h-[120px]"
                  placeholder="Please provide details about your inquiry..."
                  required
                />
              </div>

              {/* How did you hear about us */}
              <div>
                <Label htmlFor="hearAbout" className="text-primary-dark font-semibold">How did you hear about us?</Label>
                <select
                  id="hearAbout"
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({...formData, hearAbout: e.target.value})}
                  className="mt-1 w-full px-3 py-2 border border-primary-light/30 rounded-md focus:border-primary-medium focus:outline-none focus:ring-2 focus:ring-primary-medium/20"
                >
                  <option value="">Select option...</option>
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({...formData, consent: !!checked})}
                  className="border-primary-medium data-[state=checked]:bg-primary-medium mt-1"
                  required
                />
                <Label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                  I consent to the collection and processing of my personal data for the purpose of responding to my inquiry. 
                  I understand that my data will be handled in accordance with AscenBio's privacy policy.
                </Label>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary-medium to-primary-light hover:from-primary-light hover:to-primary-very-light text-white px-12 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  Expected response time: Within 24 hours during business days
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
