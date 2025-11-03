import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Tag, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";
import { Alert, AlertDescription } from "./ui/alert";

interface Notice {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  updatedAt?: string;
}

interface NoticePageProps {
  onNavigateHome: () => void;
}

export function NoticePage({ onNavigateHome }: NoticePageProps) {
  // Sample notices data
  const [notices] = useState<Notice[]>([
    {
      id: '1',
      title: 'Admission Open for Class 10th Academic Year 2025-26',
      content: 'We are pleased to announce that admissions for Class 10th are now open for the academic year 2025-26. The admission process includes an entrance examination followed by an interview. Early bird discount of 10% is available for applications submitted before September 30th, 2025. Please visit the school office between 9:00 AM to 4:00 PM on weekdays with all required documents including previous academic records, birth certificate, and passport-size photographs.',
      category: 'Admission',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Annual Sports Day - October 15, 2025',
      content: 'Our annual sports day will be held on October 15, 2025, starting at 8:00 AM. All students are required to participate in various sports activities including track and field events, team sports, and cultural programs. Parents and guardians are cordially invited to attend and encourage our young athletes. Lunch and refreshments will be provided. Students should report in their respective house uniforms.',
      category: 'Event',
      createdAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: '3',
      title: 'Parent-Teacher Meeting - September 10, 2025',
      content: 'Monthly Parent-Teacher Meeting is scheduled for September 10, 2025. Individual time slots will be shared via email and SMS by September 5th. This is an important opportunity for parents to discuss their child\'s academic progress, behavior, and any concerns with subject teachers. The meeting will be held from 2:00 PM to 6:00 PM in respective classrooms.',
      category: 'Academic',
      createdAt: new Date(Date.now() - 172800000).toISOString(),
    },
    {
      id: '4',
      title: 'Science Exhibition 2025 - Call for Participation',
      content: 'Students are invited to participate in the annual Science Exhibition scheduled for November 20-22, 2025. This is a great platform for students to showcase their scientific innovations and research projects. Registration deadline is September 5th, 2025. Projects can be individual or group-based (maximum 3 members). Guidelines and project topics are available in the science department.',
      category: 'Academic',
      createdAt: new Date(Date.now() - 259200000).toISOString(),
    },
    {
      id: '5',
      title: 'Winter Break Notice - December 20, 2025 to January 5, 2026',
      content: 'School will remain closed for winter vacation from December 20, 2025, to January 5, 2026. Classes will resume on January 6, 2026. Students are advised to complete their holiday homework and prepare for the upcoming unit tests. The school library will be open on December 23, 24, 27, 30, 31 and January 2, 3 from 10:00 AM to 2:00 PM for students who need reference materials.',
      category: 'Holiday',
      createdAt: new Date(Date.now() - 345600000).toISOString(),
    },
    {
      id: '6',
      title: 'First Term Examination Schedule',
      content: 'The first term examinations for Class 10 will commence from October 25, 2025. Detailed examination schedule and hall tickets will be distributed by October 15th. Students must arrive 30 minutes before the examination time. Electronic devices including mobile phones and calculators are strictly prohibited in the examination hall. Any malpractice will result in immediate disqualification.',
      category: 'Examination',
      createdAt: new Date(Date.now() - 432000000).toISOString(),
    },
    {
      id: '7',
      title: 'New Computer Lab Inauguration',
      content: 'We are excited to announce the inauguration of our new state-of-the-art computer laboratory on September 25, 2025. The lab is equipped with 30 latest computers, high-speed internet, and modern software for enhanced learning experience. The inauguration ceremony will be held at 10:00 AM in the presence of the School Management Committee and distinguished guests.',
      category: 'General',
      createdAt: new Date(Date.now() - 518400000).toISOString(),
    },
    {
      id: '8',
      title: 'Fee Structure Update for Academic Year 2025-26',
      content: 'The revised fee structure for the academic year 2025-26 has been finalized. Detailed fee structure is available at the school office and will be sent to all parents via email. Payment can be made in quarterly installments. Online payment facility is also available through our school portal. For any fee-related queries, please contact the accounts department.',
      category: 'General',
      createdAt: new Date(Date.now() - 604800000).toISOString(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const noticesPerPage = 6;

  useEffect(() => {
    // Minimal loading simulation
    setIsLoading(false);
  }, []);



  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'examination':
        return 'bg-red-100 text-red-800';
      case 'admission':
        return 'bg-green-100 text-green-800';
      case 'event':
        return 'bg-purple-100 text-purple-800';
      case 'holiday':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getFilteredNotices = () => {
    if (selectedCategory === "all") {
      return notices;
    }
    return notices.filter(notice => 
      notice.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  };

  const getPaginatedNotices = () => {
    const filtered = getFilteredNotices();
    return filtered.slice(0, page * noticesPerPage);
  };

  const loadMore = () => {
    const filtered = getFilteredNotices();
    const currentlyShown = page * noticesPerPage;
    
    if (currentlyShown < filtered.length) {
      setPage(prev => prev + 1);
    }
    
    setHasMore(currentlyShown + noticesPerPage < filtered.length);
  };

  const getUniqueCategories = () => {
    const categories = notices.map(notice => notice.category);
    return [...new Set(categories)];
  };

  const displayedNotices = getPaginatedNotices();
  const uniqueCategories = getUniqueCategories();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#23495c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={onNavigateHome}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Notice Board
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Stay updated with the latest announcements, academic information, and important notices from SMPS Jhansi
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        {uniqueCategories.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-[#0a1c28]">Filter by Category:</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory("all");
                  setPage(1);
                }}
                className="mb-2"
              >
                All Categories
              </Button>
              {uniqueCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category);
                    setPage(1);
                  }}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="text-red-700">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="p-6">
                <div className="space-y-4">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-20 w-full" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Notices Grid */}
        {!isLoading && displayedNotices.length > 0 && (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedNotices.map((notice) => (
                <Card key={notice.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-[#0a1c28] leading-tight">
                        {notice.title}
                      </h3>
                      <Badge
                        className={`${getCategoryColor(notice.category)} text-xs ml-2 flex-shrink-0`}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {notice.category}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                      {notice.content}
                    </p>
                    
                    <div className="flex items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(notice.createdAt)}
                      {notice.updatedAt && notice.updatedAt !== notice.createdAt && (
                        <span className="ml-2 text-blue-600">
                          (Updated: {formatDate(notice.updatedAt)})
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMore}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3"
                >
                  Load More Notices
                </Button>
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!isLoading && displayedNotices.length === 0 && !error && (
          <div className="text-center py-16">
            <AlertCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Notices Found
            </h3>
            <p className="text-gray-500">
              {selectedCategory === "all" 
                ? "There are no notices available at the moment." 
                : `No notices found in the "${selectedCategory}" category.`
              }
            </p>
            {selectedCategory !== "all" && (
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="outline"
                className="mt-4"
              >
                View All Notices
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}