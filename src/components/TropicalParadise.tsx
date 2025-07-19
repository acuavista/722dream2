import { ArrowRight, MapPin, TrendingUp, Clock } from 'lucide-react';
import tropicalBeach1 from '../assets/tropical-beach-1.jpg';
import tropicalBeach2 from '../assets/tropical-beach-2.jpg';
import tropicalBeach3 from '../assets/tropical-beach-3.jpg';

const TropicalParadise = () => {
  const cards = [
    {
      id: 'why-cartagena',
      title: 'Why Cartagena',
      description: 'The rich and famous spend millions of dollars to buy their private tropical hideaways, and enjoy the summer sun, sand and surf all year around. Now you too can delight in these same pleasures at a fraction of what they pay. Welcome to Cartagena, Colombia.',
      icon: <MapPin size={24} strokeWidth={1.5} />,
      image: tropicalBeach1,
      link: '/why-cartagena'
    },
    {
      id: 'why-properties',
      title: 'Why Properties',
      description: 'Over the past five years, property values in Cartagena have appreciated between 8% and 12% annually. The city has seen a surge in both domestic and foreign demand, from vacation homeowners to entrepreneurs drawn to the warm climate.',
      icon: <TrendingUp size={24} strokeWidth={1.5} />,
      image: tropicalBeach2,
      link: '/why-properties'
    },
    {
      id: 'why-now',
      title: 'Why Now',
      description: 'With over 3.5 million visitors in 2024, Cartagena\'s international profile is growing rapidly. With the completion of the 2nd international airport, the city is expecting to quadruple visitors. Those who act now get in on the ground floor.',
      icon: <Clock size={24} strokeWidth={1.5} />,
      image: tropicalBeach3,
      link: '/why-now'
    }
  ];

  return (
    <section id="why-cartagena" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">Your Tropical Paradise</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover why Cartagena, Colombia is the perfect destination for your tropical property investment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="glass-card p-8 rounded-3xl group cursor-pointer fade-in-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-primary">
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-primary group-hover:text-warm-gold transition-colors duration-300">
                <span className="font-medium mr-2">More Info</span>
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TropicalParadise;