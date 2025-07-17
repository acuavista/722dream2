import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import TropicalParadise from '../components/TropicalParadise';
import Products from '../components/Products';
import Pricing from '../components/Pricing';
import LatestInsights from '../components/LatestInsights';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations on page load
    setIsLoaded(true);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.fade-in-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-ocean">
      <Navigation />
      
      <main className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <TropicalParadise />
        <Products />
        <Pricing />
        <LatestInsights />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
