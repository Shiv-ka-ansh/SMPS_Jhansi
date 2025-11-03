import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

interface GalleryCarouselProps {
  onNavigateToGallery?: () => void;
}

export function GalleryCarousel({
  onNavigateToGallery,
}: GalleryCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1573894998033-c0cef4ed722b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTcyNDE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Classrooms",
      description:
        "Interactive learning environments with state-of-the-art technology",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1700914299961-d8f91559d85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc1NzI4MTczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sports & Recreation",
      description:
        "Comprehensive sports facilities promoting physical fitness and teamwork",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1636386689060-37d233b5d345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTcyODE3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Science Laboratory",
      description:
        "Advanced lab facilities for hands-on scientific exploration and discovery",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1578402027442-b0d03cd2c0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU3MjQxNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Library & Learning Center",
      description:
        "Extensive collection of books and digital resources for comprehensive learning",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1565402161570-7ca09ba499f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwY2hpbGRyZW58ZW58MXx8fHwxNzU3MjMyNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Playground & Recreation",
      description:
        "Safe and fun outdoor spaces for play and physical development",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1581929430054-760e30fe5c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhcnRzJTIwbXVzaWMlMjBjbGFzc3xlbnwxfHx8fDE3NTcyODE3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Arts & Music",
      description:
        "Creative spaces for artistic expression and musical development",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % galleryImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % galleryImages.length,
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + galleryImages.length) %
        galleryImages.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-20 bg-[#e0e1be]">
      <div className="w-full px-0">
        {/* Section Header */}
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#0a1c28] mb-4">
            School{" "}
            <span className="text-[#f05461]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-[#f05461] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our vibrant school life through photos of
            events, activities, and memorable moments.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white shadow-xl overflow-hidden">
          {/* Main Carousel */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                  index === currentSlide
                    ? "translate-x-0"
                    : index < currentSlide
                      ? "-translate-x-full"
                      : "translate-x-full"
                }`}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">
                      {image.title}
                    </h3>
                    <p className="text-lg text-gray-200 max-w-2xl">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#0a1c28] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-[#0a1c28] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Controls */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={toggleAutoPlay}
              className="w-10 h-10 bg-white/90 hover:bg-white text-[#0a1c28] rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
              aria-label={
                isAutoPlaying
                  ? "Pause slideshow"
                  : "Play slideshow"
              }
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-8 space-x-2 overflow-x-auto pb-2 px-4 sm:px-6 lg:px-8">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "border-[#f05461] shadow-lg"
                  : "border-gray-300 hover:border-[#466a94]"
              }`}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#f05461]"
                  : "bg-gray-400 hover:bg-[#466a94]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {[
            { number: "50+", label: "Classrooms" },
            { number: "10", label: "Science Labs" },
            { number: "15", label: "Sports Facilities" },
            { number: "25,000+", label: "Books in Library" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-[#f05461] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* More Gallery Button */}
        <div className="flex justify-center mt-8 px-4 sm:px-6 lg:px-8">
          <Button
            onClick={onNavigateToGallery}
            className="bg-[#f05461] hover:bg-[#e04451] text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ring-2 ring-transparent hover:ring-[#f05461]/30 group"
          >
            <span className="flex items-center gap-2">
              More Gallery
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}