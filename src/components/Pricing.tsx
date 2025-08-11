import { Check, Star, Waves, Trees, Crown } from 'lucide-react';

const Pricing = () => {
  const lots = [
    {
      id: 'premium-beachfront',
      title: 'Premium Beachfront',
      description: 'Direct ocean access, unparalleled views. The pinnacle of Caribbean luxury.',
      pricePerSqFt: '$0/sf',
      baseSize: '0 sf',
      basePrice: '$200,000',
      icon: <Crown size={24} strokeWidth={1.5} />,
      benefits: [
        'Highest appreciation potential',
        'Exclusive front-row positioning',
        'Unobstructed ocean views',
        'Private beach access',
        'Premium concierge services'
      ],
      recommended: false,
      gradient: 'from-warm-gold to-warm-accent'
    },
    {
      id: 'beach-access',
      title: 'Beach Access',
      description: 'Short, easy walk to pristine beaches. The perfect blend of luxury, convenience, and value.',
      pricePerSqFt: '$0/sf',
      baseSize: '0 sf',
      basePrice: '$0,000',
      icon: <Waves size={24} strokeWidth={1.5} />,
      benefits: [
        'Strong investment return',
        'Accessible luxury',
        'Vibrant community proximity',
        'Ideal for rental income',
        'Quick beach access'
      ],
      recommended: true,
      gradient: 'from-primary to-tropical-blue-light'
    },
    {
      id: 'paradise-parcels',
      title: 'Paradise Parcels',
      description: 'Secluded, lush, and serene inland properties. Embrace nature\'s tranquility.',
      pricePerSqFt: '$0/sf',
      baseSize: '2,000 sf',
      basePrice: '$0',
      icon: <Trees size={24} strokeWidth={1.5} />,
      benefits: [
        'Most affordable entry',
        'Peaceful retreat setting',
        'Expansive greenery',
        'Strong long-term growth',
        'Nature immersion'
      ],
      recommended: false,
      gradient: 'from-warm-sand to-accent'
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">Welcome to Your Tropical Paradise</h2>
          <p className="text-xl text-warm-gold mb-4">Sand, Sun, and Beach Galore</p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Choose from our carefully curated selection of prime tropical lots, each offering unique advantages for your Caribbean lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lots.map((lot, index) => (
            <div
              key={lot.id}
              className={`relative bg-white p-8 rounded-3xl group cursor-pointer fade-in-on-scroll shadow-lg border border-border/10 ${
                lot.recommended ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Recommended Badge */}
              {lot.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-tropical px-6 py-2 rounded-full text-primary-foreground font-medium text-sm flex items-center">
                    <Star size={16} strokeWidth={1.5} className="mr-2" />
                    Recommended
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${lot.gradient} mb-4`}>
                  <div className="text-primary-foreground">
                    {lot.icon}
                  </div>
                </div>
                <h3 className="text-foreground mb-2">{lot.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {lot.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6 p-4 bg-gradient-glass rounded-2xl">
                <div className="text-2xl font-light text-primary mb-2">{lot.pricePerSqFt}</div>
                <div className="text-foreground/80 text-sm mb-1">{lot.baseSize}</div>
                <div className="text-3xl font-light text-warm-gold">{lot.basePrice}</div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {lot.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start">
                    <div className="text-primary mr-3 mt-0.5">
                      <Check size={16} strokeWidth={1.5} />
                    </div>
                    <span className="text-foreground/80 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full btn-neumorphic py-3 px-6 text-primary-foreground font-medium rounded-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                View Details & Inquire
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
