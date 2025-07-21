import { ArrowRight } from 'lucide-react';
import tropicalBeach1 from '../assets/tropical-beach-1.jpg';
import tropicalBeach2 from '../assets/tropical-beach-2.jpg';
import tropicalBeach3 from '../assets/tropical-beach-3.jpg';

const InsightsSection = () => {
  const insights = [
    {
      title: "Why Cartagena",
      description: "The rich and famous spend millions of dollars to buy their private tropical hideaways, and enjoy the summer sun, sand and surf all year around. Now you too can delight in these same pleasures at a fraction of what they pay. Welcome to Cartagena, Colombia. There are places that capture your attention—and then there are places like Cartagena, that steal your heart and soul lock, stock, and barrel.",
      image: tropicalBeach1,
      link: "/why-cartagena"
    },
    {
      title: "Why Properties",
      description: "Over the past five years, property values in Cartagena have appreciated between 8% and 12% annually, depending on the neighborhood and type of investment. This is no accident. The city has seen a surge in both domestic and foreign demand, with buyers ranging from vacation homeowners to entrepreneurs and digital nomads drawn to the warm climate and vibrant urban life.",
      image: tropicalBeach2,
      link: "/why-properties"
    },
    {
      title: "Why Now",
      description: "With over 3.5 million visitors in 2024, Cartagena's international profile is growing rapidly. And with the completion of the 2nd international airport, the city is expecting to quadruple the number of visitors. As demand increases, so do prices. Those who act now are getting in on the ground floor of a market destined for exponential growth.",
      image: tropicalBeach3,
      link: "/why-now"
    }
  ];

  return (
    <section className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">Latest Insights</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Discover why now is the perfect time to invest in Cartagena's tropical paradise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl group cursor-pointer fade-in-on-scroll shadow-lg border border-border/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Link */}
              <a href={insight.link} className="block">
                <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/40 to-transparent" />
                </div>
              </a>

              {/* Content */}
              <h3 className="text-foreground mb-4 group-hover:text-primary transition-colors duration-300 text-2xl font-semibold">
                {insight.title}
              </h3>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {insight.description}
              </p>

              {/* More Info Link */}
              <a 
                href={insight.link}
                className="flex items-center text-primary group-hover:text-warm-gold transition-colors duration-300"
              >
                <span className="font-medium mr-2">More Info</span>
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;