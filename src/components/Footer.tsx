import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

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
    <footer className="bg-deep-ocean border-t border-border">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-light text-primary tracking-wide mb-3">BeachLovers</h3>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Making tropical property ownership affordable and hassle-free in Cartagena, Colombia.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} strokeWidth={1.5} className="text-primary mt-0.5" />
                <div className="text-foreground/80 text-sm">
                  Cartagena, Colombia<br />
                  Historic Center District
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} strokeWidth={1.5} className="text-primary" />
                <span className="text-foreground/80 text-sm">+57 (5) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} strokeWidth={1.5} className="text-primary" />
                <span className="text-foreground/80 text-sm">info@beachlovers.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
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
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-foreground font-medium mb-4">Legal</h4>
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