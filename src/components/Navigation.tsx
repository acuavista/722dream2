import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#why-cartagena', label: 'Why Cartagena' },
    { href: '#products', label: 'Products' },
    { href: '#pricing', label: 'Lots' },
    { href: '#insights', label: 'Latest' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-tropical-blue` + (isScrolled ? ' shadow-md' : '')}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-[2.2rem] text-white tracking-wide font-bold" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7)' }}>
              BeachLovers
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white hover:text-warm-gold transition-all duration-300 tracking-wide hover:scale-105 font-bold text-lg"
                  style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white hover:text-warm-gold transition-colors font-bold"
              style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7)' }}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ` + (isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-tropical-blue/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div className={`mobile-menu absolute top-0 right-0 h-full w-80 max-w-full bg-tropical-blue border-l border-border ` + (isMobileMenuOpen ? 'open' : '')}>
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-warm-gold transition-colors font-bold"
                style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7)' }}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-6">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-[1.375rem] text-white hover:text-warm-gold transition-all duration-300 py-2 animate-fade-in-up font-bold"
                  style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;