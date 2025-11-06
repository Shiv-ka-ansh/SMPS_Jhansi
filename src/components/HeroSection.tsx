import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onNavigateToAdmissions?: () => void;
}

export function HeroSection({ onNavigateToAdmissions }: HeroSectionProps) {
  return (
    <section id="home" className="relative bg-gradient-to-r from-[#466a94] to-[#23495c] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Excellence in 
                <span className="text-[#e0e1be]"> Education</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                Nurturing minds, building futures at Siddheshwar Mountain Public School, Jhansi
              </p>
              <p className="text-lg text-gray-300">
                Where academic excellence meets holistic development in a caring, innovative environment.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Button 
                onClick={onNavigateToAdmissions}
                size="lg" 
                className="bg-[#f05461] hover:bg-[#e04451] text-white px-8 py-4 rounded-xl text-lg shadow-lg transform transition hover:scale-105"
                type="button"
              >
                Apply Now
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e0e1be]">25+</div>
                <div className="text-sm text-gray-300">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e0e1be]">2000+</div>
                <div className="text-sm text-gray-300">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#e0e1be]">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1Njg2OTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="SMPS Jhansi Campus"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f05461] rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#e0e1be] rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>
    </section>
  );
}
