import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryPageProps {
  onNavigateHome?: () => void;
}

export function GalleryPage({ onNavigateHome }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhY3Rpdml0aWVzfGVufDF8fHx8MTc1Njg2OTQ4NHww&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Annual Day Celebration",
      title: "Annual Day Celebration 2024",
      category: "events",
      description: "Students performing cultural programs"
    },
    {
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmbGFnJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU2OTc3OTU0fDA&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Independence Day",
      title: "Independence Day Celebration",
      category: "events",
      description: "Flag hoisting ceremony and patriotic performances"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFifGVufDF8fHx8MTc1Njg2OTQ4NHww&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Chemistry Lab",
      title: "Chemistry Laboratory",
      category: "academic",
      description: "Advanced science experiments and learning"
    },
    {
      src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5fGVufDF8fHx8MTc1Njg2OTQ4NHww&ixlib=rb-4.1.0&q=80&w=800",
      alt: "School Library",
      title: "School Library",
      category: "academic",
      description: "Quiet study spaces and extensive book collection"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHN8ZW58MXx8fHwxNzU2ODY5NDg0fDA&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Sports Meet",
      title: "Annual Sports Meet",
      category: "sports",
      description: "Athletic competitions and team spirit"
    },
    {
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBmb290YmFsbHxlbnwxfHx8fDE3NTY5Nzc5NTR8MA&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Football Team",
      title: "School Football Team",
      category: "sports",
      description: "Champions in inter-school tournaments"
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBtdXNpYyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1Njk3Nzk1NHww&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Music Performance",
      title: "School Orchestra Performance",
      category: "cultural",
      description: "Musical talents and artistic expression"
    },
    {
      src: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBkYW5jZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1Njk3Nzk1NHww&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Dance Performance",
      title: "Cultural Dance Program",
      category: "cultural",
      description: "Traditional and contemporary dance forms"
    },
    {
      src: "https://images.unsplash.com/photo-1603958956194-cf9718dba4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1Njg2OTQ4NHww&ixlib=rb-4.1.0&q=80&w=800",
      alt: "School Building",
      title: "Main Campus Building",
      category: "facilities",
      description: "Modern architecture and learning spaces"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-4f6e8ceb6b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYWZldGVyaWF8ZW58MXx8fHwxNzU2OTc3OTU0fDA&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Cafeteria",
      title: "School Cafeteria",
      category: "facilities",
      description: "Nutritious meals and dining facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBnYXJkZW58ZW58MXx8fHwxNzU2OTc3OTU0fDA&ixlib=rb-4.1.0&q=80&w=800",
      alt: "School Garden",
      title: "School Garden",
      category: "facilities",
      description: "Green spaces and environmental learning"
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc1Njg2OTQ4NHww&ixlib=rb-4.1.0&q=80&w=800",
      alt: "Classroom",
      title: "Interactive Classroom Learning",
      category: "academic",
      description: "Engaged students in modern classrooms"
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Photos" },
    { id: "events", label: "Events" },
    { id: "academic", label: "Academic" },
    { id: "sports", label: "Sports" },
    { id: "cultural", label: "Cultural" },
    { id: "facilities", label: "Facilities" }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesFilter = activeFilter === "all" || image.category === activeFilter;
    const matchesSearch = searchTerm === "" || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Gallery Header */}
      <section className="bg-gradient-to-br from-[#466a94] to-[#23495c] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <button 
              onClick={onNavigateHome}
              className="text-[#e0e1be] hover:text-white transition-colors"
            >
              Home
            </button>
            <span className="mx-2 text-[#e0e1be]">/</span>
            <span>Gallery</span>
          </nav>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            School <span className="text-[#e0e1be]">Gallery</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Explore our vibrant school life through photos of events, activities, and memorable moments that showcase our commitment to holistic education.
          </p>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#466a94] focus:ring-2 focus:ring-[#466a94]/20 outline-none transition-colors"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-[#466a94] text-white shadow-md"
                      : "bg-white text-[#466a94] border-2 border-[#466a94] hover:bg-[#466a94] hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Stats */}
          <div className="flex justify-center gap-8 mb-12 text-sm text-gray-600">
            <div className="text-center">
              <span className="block text-2xl font-bold text-[#466a94]">{galleryImages.length}</span>
              <span>Total Photos</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-[#466a94]">{filteredImages.length}</span>
              <span>Showing</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-[#466a94]">{filterCategories.length - 1}</span>
              <span>Categories</span>
            </div>
          </div>

          {/* Images Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {image.title}
                      </h4>
                      <p className="text-gray-200 text-sm mb-0">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No photos found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search terms or selected category.</p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchTerm("");
                }}
                className="px-6 py-3 bg-[#466a94] text-white rounded-xl hover:bg-[#f05461] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredImages.length > 0 && filteredImages.length >= 12 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 border-2 border-[#466a94] text-[#466a94] hover:bg-[#466a94] hover:text-white rounded-xl transition-colors">
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}