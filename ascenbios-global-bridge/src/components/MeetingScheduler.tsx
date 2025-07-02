
import React, { useState } from 'react';
import { Calendar, Clock, User, Video, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';

const MeetingScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [teamMember, setTeamMember] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: ''
  });

  const { toast } = useToast();

  const meetingTypes = [
    { id: 'intro', name: 'Virtual Introduction', duration: '30 min', description: 'Get to know our team and explore potential collaboration' },
    { id: 'tech', name: 'Technology Consultation', duration: '45 min', description: 'Discuss specific technology needs and solutions' },
    { id: 'partnership', name: 'Partnership Discussion', duration: '60 min', description: 'Explore strategic partnership opportunities' },
    { id: 'custom', name: 'Custom Meeting', duration: 'Flexible', description: 'Tailored meeting based on your specific needs' }
  ];

  const teamMembers = [
    { id: 'sarah', name: 'Dr. Sarah Chen', role: 'CEO', expertise: 'Strategic Partnerships' },
    { id: 'michael', name: 'Dr. Michael Rodriguez', role: 'CTO', expertise: 'Technology & Innovation' },
    { id: 'li', name: 'Li Wei', role: 'China Operations', expertise: 'Asian Markets' },
    { id: 'general', name: 'General Consultation', role: 'Team Assignment', expertise: 'Best Match for Your Needs' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !meetingType || !teamMember) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to schedule your meeting.",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with your calendar system (Calendly, Google Calendar, etc.)
    toast({
      title: "Meeting Request Submitted",
      description: "We'll send you a calendar invitation within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', company: '', topic: '' });
    setSelectedTime('');
    setMeetingType('');
    setTeamMember('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-lightest to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-dark mb-4">Schedule a Consultation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book a personalized consultation with our experts to discuss your healthcare innovation needs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-primary-very-light/30">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Meeting Type Selection */}
            <div>
              <h3 className="text-lg font-semibold text-primary-dark mb-4 flex items-center">
                <Video className="h-5 w-5 mr-2" />
                Select Meeting Type
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {meetingTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      meetingType === type.id
                        ? 'border-primary-medium bg-primary-lightest'
                        : 'border-gray-200 hover:border-primary-light'
                    }`}
                    onClick={() => setMeetingType(type.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary-dark">{type.name}</h4>
                      <span className="text-sm text-primary-medium bg-primary-very-light px-2 py-1 rounded">
                        {type.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Member Selection */}
            <div>
              <h3 className="text-lg font-semibold text-primary-dark mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Choose Team Member
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      teamMember === member.id
                        ? 'border-primary-medium bg-primary-lightest'
                        : 'border-gray-200 hover:border-primary-light'
                    }`}
                    onClick={() => setTeamMember(member.id)}
                  >
                    <h4 className="font-semibold text-primary-dark">{member.name}</h4>
                    <p className="text-sm text-primary-medium">{member.role}</p>
                    <p className="text-xs text-gray-600 mt-1">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Select Date
                </h3>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border border-primary-very-light"
                />
              </div>

              {/* Time Slots */}
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Select Time (UTC)
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`p-2 text-sm rounded border transition-colors ${
                        selectedTime === time
                          ? 'bg-primary-medium text-white border-primary-medium'
                          : 'border-gray-200 hover:border-primary-light hover:bg-primary-lightest'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Meeting Topic
                </label>
                <input
                  type="text"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                  placeholder="Brief description of what you'd like to discuss"
                />
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" className="bg-primary-medium hover:bg-primary-light text-white px-8 py-3">
                Schedule Meeting
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MeetingScheduler;
