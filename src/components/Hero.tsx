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
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        <h1 className="text-[2.3rem] md:text-[2.76rem] lg:text-[3.45rem] font-bold text-white mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s', textShadow: '0 4px 16px rgba(0,0,0,0.85)' }}>
          Own Your Slice of this Tropical Paradise
        </h1>
        
        
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