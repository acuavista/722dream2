import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Maria Gonzalez',
      location: 'Miami, USA',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      quote: 'I never thought I could afford to own a property just a few blocks from the Caribbean sea. BeachLovers not only made that possible, but I was able to get started with just a down payment. The best part was I could use the property whenever I travel to Cartagena. Great people, great opportunity.',
      result: 'Achieved affordable tropical property ownership with low down payment'
    },
    {
      id: 2,
      name: 'James Thompson',
      location: 'Toronto, Canada',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      quote: 'I was a bit skeptical at first, but I was pleasantly surprised when I visited the lots. I chose one on the spot, and the process was incredibly smooth. BeachLovers delivered on every promise.',
      result: 'Successfully acquired a prime lot, exceeding expectations'
    },
    {
      id: 3,
      name: 'Sophie Dubois',
      location: 'Paris, France',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      quote: 'The financing options made this investment possible for our family. We now have our tropical retreat and it\'s already appreciating in value. The BeachLovers team was professional and transparent throughout.',
      result: 'Secured family tropical retreat with strong appreciation'
    },
    {
      id: 4,
      name: 'Robert Chen',
      location: 'Vancouver, Canada',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      quote: 'As a real estate investor, I was impressed by the market fundamentals in Cartagena. BeachLovers provided excellent market insights and helped me acquire three lots. The ROI potential is exceptional.',
      result: 'Built diversified tropical property portfolio with strong ROI'
    },
    {
      id: 5,
      name: 'Anna Müller',
      location: 'Berlin, Germany',
      image: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      quote: 'We were looking for a retirement investment that would also serve as our winter escape. BeachLovers made the entire process seamless, from selection to financing to legal paperwork. Highly recommended.',
      result: 'Secured perfect retirement and winter escape property'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">What Our Clients Say</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover how BeachLovers has helped clients achieve their tropical property dreams
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-8 md:p-12 min-h-[400px] flex items-center shadow-lg border border-border/10">
            <div className="w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform translate-x-8 absolute inset-0'
                  }`}
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Client Photo */}
                    <div className="text-center md:text-left">
                      <div className="relative inline-block">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto md:mx-0 border-4 border-primary/30"
                        />
                        <div className="absolute -top-2 -right-2 bg-gradient-tropical p-2 rounded-full">
                          <Quote size={16} strokeWidth={1.5} className="text-primary-foreground" />
                        </div>
                      </div>
                      <h4 className="text-foreground mt-4 mb-1">{testimonial.name}</h4>
                      <p className="text-foreground/60 text-sm">{testimonial.location}</p>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center md:justify-start mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-warm-gold fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="md:col-span-2">
                      <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Result */}
                      <div className="bg-gradient-glass p-4 rounded-2xl border border-border">
                        <h5 className="text-primary font-medium mb-2">Result Achieved:</h5>
                        <p className="text-foreground/80 text-sm">{testimonial.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-foreground hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg border border-border/10"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full text-foreground hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg border border-border/10"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;