import { Users, Target, Handshake } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">About Us</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover the story behind BeachLovers and our commitment to making tropical paradise accessible to everyone
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Who We Are */}
          <div className="fade-in-on-scroll">
            <div className="glass-card p-8 rounded-3xl h-full text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="text-primary mb-6 flex justify-center">
                <Users size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground mb-4">Who We Are</h3>
              <p className="text-foreground/80 leading-relaxed">
                BeachLovers is a pioneering real estate company specializing in tropical properties in Cartagena, Colombia. 
                Founded by seasoned real estate professionals with deep local knowledge and international experience, 
                we bridge the gap between dreamers and their ideal tropical paradise.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="fade-in-on-scroll">
            <div className="glass-card p-8 rounded-3xl h-full text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="text-primary mb-6 flex justify-center">
                <Target size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                To democratize access to prime tropical real estate by providing innovative financing solutions, 
                transparent processes, and comprehensive support. We believe that owning a piece of paradise 
                shouldn't be limited to the ultra-wealthy, but accessible to anyone with a dream.
              </p>
            </div>
          </div>

          {/* Our Promise */}
          <div className="fade-in-on-scroll">
            <div className="glass-card p-8 rounded-3xl h-full text-center hover:transform hover:scale-105 transition-all duration-500">
              <div className="text-primary mb-6 flex justify-center">
                <Handshake size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground mb-4">Our Promise</h3>
              <p className="text-foreground/80 leading-relaxed">
                We promise complete transparency, unwavering support, and innovative solutions throughout your journey. 
                From initial consultation to property development and beyond, we're your trusted partner in creating 
                lasting memories and building generational wealth in paradise.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center fade-in-on-scroll">
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-foreground mb-6">The BeachLovers Advantage</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-primary font-semibold text-2xl mb-2">90%</div>
                <p className="text-foreground/80 text-sm">Financing Available</p>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold text-2xl mb-2">100%</div>
                <p className="text-foreground/80 text-sm">Property Ownership</p>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold text-2xl mb-2">24/7</div>
                <p className="text-foreground/80 text-sm">Client Support</p>
              </div>
              <div className="text-center">
                <div className="text-primary font-semibold text-2xl mb-2">5+</div>
                <p className="text-foreground/80 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;