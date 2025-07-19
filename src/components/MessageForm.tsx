import { useState } from 'react';
import { Send, Shield } from 'lucide-react';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    country: '',
    email: '',
    phone: '',
    interests: [] as string[],
    otherInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const interestOptions = [
    'Land',
    'Camping spot',
    'Vacation home',
    'Permanent home',
    'Run Airbnb',
    'Co-founder',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleCaptchaChange = () => {
    setCaptchaVerified(!captchaVerified);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      alert('Please verify that you are not a robot.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        country: '',
        email: '',
        phone: '',
        interests: [],
        otherInterest: '',
        message: ''
      });
      setCaptchaVerified(false);
    }, 2000);
  };

  return (
    <section id="message" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-6">Send us a Message</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready to start your tropical property journey? Tell us about your dreams
          </p>
        </div>

        <div className="fade-in-on-scroll">
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-foreground/80 text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-foreground/80 text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Location Fields */}
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-foreground/80 text-sm font-medium mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your city"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-foreground/80 text-sm font-medium mb-2">
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="State/Province"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-foreground/80 text-sm font-medium mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your country"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-foreground/80 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-foreground/80 text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <label className="block text-foreground/80 text-sm font-medium mb-3">
                What are you interested in? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interestOptions.map((interest) => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="w-4 h-4 text-primary bg-input border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-foreground/80 text-sm">{interest}</span>
                  </label>
                ))}
              </div>
              
              {formData.interests.includes('Other') && (
                <input
                  type="text"
                  name="otherInterest"
                  value={formData.otherInterest}
                  onChange={handleInputChange}
                  placeholder="Please specify..."
                  className="w-full px-4 py-3 mt-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-foreground/80 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us more about your tropical property goals..."
              />
            </div>

            {/* CAPTCHA */}
            <div className="mb-6">
              <div className="glass-card p-6 rounded-xl border border-border">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="captcha"
                    checked={captchaVerified}
                    onChange={handleCaptchaChange}
                    className="w-5 h-5 text-primary bg-input border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <label htmlFor="captcha" className="flex items-center space-x-2 cursor-pointer">
                    <Shield size={16} className="text-primary" strokeWidth={1.5} />
                    <span className="text-foreground/80 text-sm">I'm not a robot</span>
                  </label>
                </div>
                <p className="text-foreground/60 text-xs mt-2">
                  This prevents automated spam submissions. reCAPTCHA will be integrated in WordPress.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !captchaVerified}
              className="w-full btn-neumorphic py-4 px-6 text-primary-foreground font-medium rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2" />
              ) : (
                <Send size={18} strokeWidth={1.5} className="mr-2" />
              )}
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MessageForm;