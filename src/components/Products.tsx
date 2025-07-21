import { ArrowRight, Home, Hammer, CreditCard } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'buildable-lots',
      title: 'Buildable Lots',
      description: 'Prime real estate properties in Cartagena. Perfect beachfront and beach-access locations for your dream home or investment property.',
      icon: <Home size={24} strokeWidth={1.5} />,
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      link: '/properties'
    },
    {
      id: 'your-vision',
      title: 'Your Vision',
      description: 'Whether you want a glam tent, a prefab house, your dream home, or anything in between, we got you covered. From concept to completion.',
      icon: <Hammer size={24} strokeWidth={1.5} />,
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      link: '/services'
    },
    {
      id: 'our-financing',
      title: 'Our Financing',
      description: 'We are the only company on the market that provides in-house financing. We offer up to 90% financing to our clients. We can do that because we own all our properties outright.',
      icon: <CreditCard size={24} strokeWidth={1.5} />,
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      link: '/financing'
    }
  ];

  return (
    <section id="products" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">Your Paradise, Your Choice</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            From prime lots to complete construction services and flexible financing - everything you need for your tropical paradise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white p-8 rounded-3xl group cursor-pointer fade-in-on-scroll shadow-lg border border-border/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-warm-gold">
                  {product.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-foreground mb-4 group-hover:text-warm-gold transition-colors duration-300">
                {product.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-warm-gold group-hover:text-primary transition-colors duration-300">
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

export default Products;