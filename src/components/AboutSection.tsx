import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558443957-d056622df610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTY4ODUxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning in classroom"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#f05461] rounded-xl opacity-80"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#466a94] rounded-xl opacity-60"></div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#0a1c28]">
                About <span className="text-[#f05461]">SMPS Jhansi</span>
              </h2>
              <div className="w-24 h-1 bg-[#f05461] rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Established with a vision to provide world-class education, Siddheshwar Mountain Public School 
                has been nurturing young minds for over 25 years. We believe in creating an environment where 
                every student can discover their potential and excel.
              </p>
              
              <p className="leading-relaxed">
                Our holistic approach to education combines academic excellence with character development, 
                ensuring our students are well-prepared for the challenges of tomorrow. We foster creativity, 
                critical thinking, and leadership skills through innovative teaching methodologies.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#e0e1be] p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#466a94] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0a1c28] mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Embracing modern teaching methods and technology</p>
              </div>

              <div className="bg-[#e0e1be] p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#466a94] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0a1c28] mb-2">Care</h3>
                <p className="text-sm text-gray-600">Nurturing environment focused on individual growth</p>
              </div>

              <div className="bg-[#e0e1be] p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#466a94] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0a1c28] mb-2">Excellence</h3>
                <p className="text-sm text-gray-600">Striving for the highest standards in education</p>
              </div>

              <div className="bg-[#e0e1be] p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#466a94] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0a1c28] mb-2">Community</h3>
                <p className="text-sm text-gray-600">Building strong relationships and social responsibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}