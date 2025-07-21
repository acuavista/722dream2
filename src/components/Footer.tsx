import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Properties', href: '/properties' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Financing', href: '/financing' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Disclaimer', href: '/disclaimer' }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} strokeWidth={1.5} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={20} strokeWidth={1.5} />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={20} strokeWidth={1.5} />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube size={20} strokeWidth={1.5} />, href: '#', label: 'YouTube' },
    { icon: <MessageCircle size={20} strokeWidth={1.5} />, href: '#', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-white border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-light text-primary tracking-wide mb-3">BeachLovers</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Making tropical property ownership affordable and hassle-free in Cartagena, Colombia.
              </p>
            </div>

            <div className="mt-6 glass-card p-4 rounded-2xl">
              <h5 className="text-primary font-medium mb-2 text-sm">Why Choose BeachLovers?</h5>
              <ul className="text-foreground/70 text-xs space-y-1">
                <li>• Up to 90% financing available</li>
                <li>• Full-service property management</li>
                <li>• Legal and construction support</li>
                <li>• International client experience</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h4 className="text-foreground font-medium mb-4">Get in Touch</h4>
            <div className="grid gap-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} strokeWidth={1.5} className="text-primary mt-1" />
                <div>
                  <h5 className="text-foreground font-medium text-sm mb-1">Office Location</h5>
                  <p className="text-foreground/70 text-xs">Cartagena, Colombia</p>
                  <p className="text-foreground/70 text-xs">Historic Center District</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone size={16} strokeWidth={1.5} className="text-primary mt-1" />
                <div>
                  <h5 className="text-foreground font-medium text-sm mb-1">Phone</h5>
                  <p className="text-foreground/70 text-xs">+57 (5) 123-4567</p>
                  <p className="text-foreground/70 text-xs">WhatsApp Available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={16} strokeWidth={1.5} className="text-primary mt-1" />
                <div>
                  <h5 className="text-foreground font-medium text-sm mb-1">Email</h5>
                  <p className="text-foreground/70 text-xs">info@beachlovers.com</p>
                  <p className="text-foreground/70 text-xs">properties@beachlovers.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock size={16} strokeWidth={1.5} className="text-primary mt-1" />
                <div>
                  <h5 className="text-foreground font-medium text-sm mb-1">Business Hours</h5>
                  <p className="text-foreground/70 text-xs">Mon - Fri: 9:00 AM - 6:00 PM COT</p>
                  <p className="text-foreground/70 text-xs">Sat: 10:00 AM - 4:00 PM COT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-foreground font-medium mb-4 mt-6">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Newsletter */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Connect</h4>
            
            {/* Social Media */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="glass-card p-2 rounded-lg text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <p className="text-foreground/80 text-sm mb-3">
                Stay updated with market insights and new properties
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-input border border-border rounded-l-lg text-foreground text-sm placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
                <button className="px-4 py-2 bg-gradient-tropical text-primary-foreground rounded-r-lg hover:shadow-glow transition-all duration-300">
                  <Mail size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © {currentYear} BeachLovers. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="text-foreground/60 text-sm">🇨🇴 Proudly Colombian</span>
              <div className="flex items-center space-x-2">
                <span className="text-foreground/60 text-xs">Languages:</span>
                <div className="flex space-x-1">
                  {['EN', 'ES', 'FR', 'DE', 'IT', 'CN', 'JP'].map((lang) => (
                    <button
                      key={lang}
                      className="px-2 py-1 text-xs text-foreground/60 hover:text-primary transition-colors duration-300"
                    >
                      {lang}
                    </button>
                  ))}
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