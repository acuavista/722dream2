import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleCTAClick = () => {
    const pricingSection = document.querySelector('#pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#why-cartagena');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-deep-ocean/70 via-deep-ocean/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-black mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          BeachLovers
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Own Your Slice of this Tropical Paradise
        </h2>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Easy Financing
        </h2>
        
        <p className="text-lg md:text-xl text-black/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Access to luxuriant beachfront experiences is no longer exclusively for the rich and famous. 
          You don't have to wait until retirement to enjoy the good life of sun, sand, and tropical beaches.
        </p>
        
        <button
          onClick={handleCTAClick}
          className="btn-neumorphic px-8 py-4 text-lg font-medium text-primary-foreground rounded-2xl transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          View Available Lots
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/70 hover:text-primary transition-all duration-300 animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default Hero;