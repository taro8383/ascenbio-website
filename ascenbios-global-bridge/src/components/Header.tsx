
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Global Reach', href: '/global-reach' },
    { name: 'Chinese Partnerships', href: '/chinese-partnerships' },
    { name: 'About', href: '/about' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-[194px] h-12 relative">
              <img 
                src="/logo.png" 
                alt="AscenBio Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary-light ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="relative group">
              <button className={`flex items-center font-medium transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}>
                EN
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-t-lg">English</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Español</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-b-lg">中文</a>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <Link to="/contact">
            <Button 
              className={`hidden md:block transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-r from-primary-medium to-primary-light hover:from-primary-light hover:to-primary-very-light' 
                  : 'bg-gradient-to-r from-primary-medium to-primary-light hover:from-primary-light hover:to-primary-very-light text-white'
              } font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105`}
            >
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block py-2 text-gray-700 hover:text-primary-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-4 mt-4">
              <Link to="/contact">
                <Button className="w-full bg-gradient-to-r from-primary-medium to-primary-light text-white font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
