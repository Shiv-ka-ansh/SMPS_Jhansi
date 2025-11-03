interface NoticeSectionProps {
  onNavigateToNotices?: () => void;
}

export function NoticeSection({ onNavigateToNotices }: NoticeSectionProps) {
  const notices = [
    {
      id: 1,
      title: "Admission Open for Academic Year 2025-26",
      date: "September 1, 2025",
      category: "Admissions",
      content: "Applications are now open for nursery to class XII. Early bird discount available until September 30th.",
      priority: "high",
      isNew: true
    },
    {
      id: 2,
      title: "Annual Sports Day - October 15, 2025",
      date: "August 25, 2025",
      category: "Events",
      content: "Join us for our annual sports day celebration with various competitions and fun activities for all age groups.",
      priority: "medium",
      isNew: true
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Scheduled",
      date: "August 20, 2025",
      category: "Academic",
      content: "Monthly PTM scheduled for September 10, 2025. Individual time slots will be shared via email.",
      priority: "medium",
      isNew: false
    },
    {
      id: 4,
      title: "Science Exhibition 2025",
      date: "August 18, 2025",
      category: "Academic",
      content: "Students are invited to participate in the annual science exhibition. Registration deadline: September 5th.",
      priority: "low",
      isNew: false
    },
    {
      id: 5,
      title: "Holiday Notice - Gandhi Jayanti",
      date: "August 15, 2025",
      category: "Holiday",
      content: "School will remain closed on October 2, 2025 (Gandhi Jayanti). Regular classes will resume on October 3rd.",
      priority: "low",
      isNew: false
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-[#f05461] text-white';
      case 'medium': return 'bg-[#466a94] text-white';
      case 'low': return 'bg-[#e0e1be] text-[#0a1c28]';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Admissions':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'Events':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'Academic':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case 'Holiday':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <section id="notices" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a1c28] mb-4">
            Notice <span className="text-[#f05461]">Board</span>
          </h2>
          <div className="w-24 h-1 bg-[#f05461] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest announcements, events, and important information from SMPS Jhansi.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Notice Board */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {notices.map((notice, index) => (
                <div
                  key={notice.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#466a94]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#466a94] rounded-lg flex items-center justify-center text-white">
                        {getCategoryIcon(notice.category)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-[#0a1c28] text-lg">
                            {notice.title}
                          </h3>
                          {notice.isNew && (
                            <span className="px-2 py-1 bg-[#f05461] text-white text-xs rounded-full">
                              NEW
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                          <span>{notice.date}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(notice.priority)}`}>
                            {notice.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {notice.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-[#466a94] hover:text-[#f05461] font-medium text-sm inline-flex items-center transition-colors">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-[#466a94] transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-[#f05461] transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-8">
              <button 
                onClick={onNavigateToNotices}
                className="px-8 py-3 bg-[#466a94] hover:bg-[#f05461] text-white rounded-xl transition-colors duration-300 shadow-lg"
              >
                Load More Notices
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-[#0a1c28] text-lg mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-[#f05461] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0-6V4m0 0L8 8m4-4l4 4m-4 6v6m0-6l-4-4m4 4l4-4" />
                  </svg>
                  <span>Download Admission Form</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-[#f05461] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Academic Calendar</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-[#f05461] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Fee Structure</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-[#f05461] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>School Policies</span>
                </a>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-[#0a1c28] text-lg mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#f05461] rounded-lg flex flex-col items-center justify-center text-white">
                    <span className="text-xs">OCT</span>
                    <span className="font-bold">15</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#0a1c28]">Sports Day</p>
                    <p className="text-sm text-gray-600">Annual athletics meet</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#466a94] rounded-lg flex flex-col items-center justify-center text-white">
                    <span className="text-xs">NOV</span>
                    <span className="font-bold">20</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#0a1c28]">Science Fair</p>
                    <p className="text-sm text-gray-600">Student exhibitions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#e0e1be] rounded-lg flex flex-col items-center justify-center text-[#0a1c28]">
                    <span className="text-xs">DEC</span>
                    <span className="font-bold">10</span>
                  </div>
                  <div>
                    <p className="font-medium text-[#0a1c28]">Winter Break</p>
                    <p className="text-sm text-gray-600">Holiday begins</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-[#466a94] to-[#23495c] rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Stay Connected</h3>
              <p className="text-sm text-gray-200 mb-4">Subscribe to get the latest news and updates delivered to your inbox.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="w-full bg-[#f05461] hover:bg-[#e04451] text-white py-2 rounded-lg transition-colors text-[16px] text-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}