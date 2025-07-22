import { Star, Waves, Trees, Home, TrendingUp, Users, MapPin, DollarSign } from 'lucide-react';
import tropicalBeach1 from '../assets/tropical-beach-1.jpg';
import tropicalBeach2 from '../assets/tropical-beach-2.jpg';
import tropicalBeach3 from '../assets/tropical-beach-3.jpg';

const TropicalParadise = () => {
  const lotPlans = [
    {
      title: "Premium Beachfront",
      description: "Wake up to the Caribbean Sea. Direct access to pristine sands and unparalleled views. Your ultimate luxury escape.",
      basePrice: "$200,000",
      sqftPrice: "$100/sf",
      size: "2,000 sf",
      image: tropicalBeach1,
      benefits: [
        { icon: TrendingUp, text: "Highest appreciation potential" },
        { icon: MapPin, text: "Exclusive front-row location" },
        { icon: Home, text: "Ultimate privacy" },
        { icon: Waves, text: "Direct ocean access" }
      ],
      recommended: false
    },
    {
      title: "Beach Access",
      description: "Just steps from the shore. Enjoy beach living without the beachfront premium. The perfect balance of value and convenience.",
      basePrice: "$140,000",
      sqftPrice: "$70/sf",
      size: "2,000 sf",
      image: tropicalBeach2,
      benefits: [
        { icon: DollarSign, text: "Strong investment return" },
        { icon: Star, text: "Accessible luxury" },
        { icon: Users, text: "Vibrant community proximity" },
        { icon: TrendingUp, text: "Ideal for rental income" }
      ],
      recommended: true
    },
    {
      title: "Paradise Parcels",
      description: "Secluded havens nestled amidst lush Colombian landscapes. Ideal for tranquil retreats and connecting with nature.",
      basePrice: "$55,000",
      sqftPrice: "$27.5/sf", 
      size: "2,000 sf",
      image: tropicalBeach3,
      benefits: [
        { icon: DollarSign, text: "Most affordable entry" },
        { icon: Trees, text: "Peaceful retreat" },
        { icon: Trees, text: "Expansive greenery" },
        { icon: TrendingUp, text: "Strong long-term growth" }
      ],
      recommended: false
    }
  ];

  return (
    <section id="why-cartagena" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground">Welcome to Your Tropical Paradise: Sand, Sun, and Beach Galore</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {lotPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl group cursor-pointer fade-in-on-scroll relative shadow-lg border border-border/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-tropical text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Recommended
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent" />
              </div>

              {/* Content */}
              <h3 className="text-foreground mb-4 group-hover:text-primary transition-colors duration-300 text-2xl font-semibold">
                {plan.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="mb-6 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Base Price ({plan.size})</span>
                  <span className="text-2xl font-bold text-primary">{plan.basePrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Per Sq. Ft. Price</span>
                  <span className="text-lg font-semibold text-foreground">{plan.sqftPrice}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8 space-y-3">
                {plan.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-foreground/80">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="w-full btn-neumorphic px-6 py-3 text-sm font-medium text-primary-foreground rounded-2xl transition-all duration-300 hover:scale-105">
                View Details & Inquire
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TropicalParadise;