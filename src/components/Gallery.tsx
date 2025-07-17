import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      alt: 'Cartagena rooftop terrace with pool overlooking historic city',
      category: 'Luxury Living'
    },
    {
      id: 2,
      src: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      alt: 'Pristine beachfront property location',
      category: 'Beachfront'
    },
    {
      id: 3,
      src: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      alt: 'Tropical paradise setting with lush greenery',
      category: 'Paradise Lots'
    },
    {
      id: 4,
      src: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      alt: 'Modern tropical architecture example',
      category: 'Architecture'
    },
    {
      id: 5,
      src: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      alt: 'Sunset view from premium beachfront location',
      category: 'Views'
    },
    {
      id: 6,
      src: '/lovable-uploads/b32d42c0-a8ef-42d6-87e1-a1647f54bb9a.png',
      alt: 'Community amenities and lifestyle',
      category: 'Community'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-6 fade-in-on-scroll">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-6">Gallery</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore the beauty and luxury of Cartagena through our curated collection of stunning visuals
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group fade-in-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                  {image.category}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <button className="btn-neumorphic px-8 py-3 text-primary-foreground font-medium rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1 flex items-center mx-auto">
            <span className="mr-2">View Full Gallery</span>
            <ExternalLink size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-deep-ocean/95 backdrop-blur-md flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 text-foreground hover:text-primary transition-colors duration-300"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-foreground/80 text-sm mb-1">
              {galleryImages[selectedImage].alt}
            </p>
            <p className="text-primary text-xs">
              {selectedImage + 1} of {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;