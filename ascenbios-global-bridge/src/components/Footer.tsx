
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, ChevronDown } from "lucide-react";

const Footer = () => {
  const offices = [
    {
      city: 'Beijing',
      country: 'China',
      address: 'Zhongguancun Technology Park, Haidian District',
      email: 'beijing@ascen-bio.com'
    },
    {
      city: 'Mexico City',
      country: 'Mexico',
      address: 'Polanco Business District, Miguel Hidalgo',
      email: 'mexico@ascen-bio.com'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: 'Marina Bay Financial Centre, Downtown Core',
      email: 'singapore@ascen-bio.com'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Global Reach', href: '/global-reach' },
    { name: 'Chinese Partnerships', href: '/chinese-partnerships' },
    { name: 'Contact', href: '#contact' }
  ];

  const industries = [
    'Medical Devices', 'Biotechnology', 'In Vitro Diagnostics', 
    'Digital Health', 'Medical Imaging', 'Laboratory Equipment'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with Healthcare Innovation</h3>
            <p className="text-gray-400 mb-8">
              Get the latest insights on cross-border healthcare solutions and market opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-primary-medium to-primary-light hover:from-primary-light hover:to-primary-very-light px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info - Centered on mobile */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center mb-6">
              <div className="w-[194px] h-12 relative lg:mr-3">
                <img 
                  src="/logo.png" 
                  alt="AscenBio Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-center lg:text-left">
              Bridging Chinese healthcare innovation with global markets through 
              comprehensive end-to-end solutions and strategic partnerships.
            </p>
          </div>

          {/* Quick Links - Centered on mobile, left on desktop */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries - Centered on mobile, right on desktop */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-6">Industries We Serve</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="text-gray-400 flex justify-center lg:justify-end items-center">
                  <span>{industry}</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-light to-primary-very-light rounded-full ml-3 flex-shrink-0"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 AscenBio Global. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              
              {/* Language Selector */}
              <div className="relative group">
                <button className="flex items-center text-gray-400 hover:text-white transition-colors">
                  English
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute bottom-full right-0 mb-2 w-32 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-t-lg">English</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Español</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-b-lg">中文</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
