import { useState } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { GalleryCarousel } from "./components/GalleryCarousel";
import { AboutSection } from "./components/AboutSection";
import { AcademicsSection } from "./components/AcademicsSection";
import { GalleryPage } from "./components/GalleryPage";
import { AdmissionsPage } from "./components/AdmissionsPage";
import { AdminLogin } from "./components/AdminLogin";
import { AdminDashboard } from "./components/AdminDashboard";
import { NoticeSection } from "./components/NoticeSection";
import { NoticePage } from "./components/NoticePage";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function AppContent() {

  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'admissions' | 'notices' | 'admin'>('home');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState<string>('');

  const navigateToGallery = () => {
    setCurrentPage('gallery');
    window.scrollTo({ top: 0 });
  };

  const navigateToAdmissions = () => {
    setCurrentPage('admissions');
    window.scrollTo({ top: 0 });
  };

  const navigateToNotices = () => {
    setCurrentPage('notices');
    window.scrollTo({ top: 0 });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setShowLogin(false);
    window.scrollTo({ top: 0 });
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleLoginSuccess = (token: string) => {
    setAccessToken(token);
    setIsLoggedIn(true);
    setShowLogin(false);
    setCurrentPage('admin');
    window.scrollTo({ top: 0 });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccessToken('');
    setCurrentPage('home');
    window.scrollTo({ top: 0 });
  };

  const handleCancelLogin = () => {
    setShowLogin(false);
  };

  // Show Admin Dashboard if logged in
  if (currentPage === 'admin' && isLoggedIn) {
    return (
      <AdminDashboard 
        accessToken={accessToken}
        onLogout={handleLogout}
        onNavigateHome={navigateToHome}
      />
    );
  }

  if (currentPage === 'gallery') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onNavigateHome={navigateToHome} 
          onNavigateToAdmissions={navigateToAdmissions}
          onNavigateToGallery={navigateToGallery}
          onShowLogin={handleShowLogin}
        />
        <GalleryPage onNavigateHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'admissions') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onNavigateHome={navigateToHome} 
          onNavigateToAdmissions={navigateToAdmissions}
          onNavigateToGallery={navigateToGallery}
          onShowLogin={handleShowLogin}
        />
        <AdmissionsPage onNavigateHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'notices') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation 
          onNavigateHome={navigateToHome} 
          onNavigateToAdmissions={navigateToAdmissions}
          onNavigateToGallery={navigateToGallery}
          onShowLogin={handleShowLogin}
        />
        <NoticePage onNavigateHome={navigateToHome} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation 
        onNavigateHome={navigateToHome} 
        onNavigateToAdmissions={navigateToAdmissions}
        onNavigateToGallery={navigateToGallery}
        onShowLogin={handleShowLogin}
      />
      
      {/* Hero Section */}
      <HeroSection onNavigateToAdmissions={navigateToAdmissions} />
      
      {/* Gallery Carousel - moved between hero and about */}
      <GalleryCarousel onNavigateToGallery={navigateToGallery} />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Academics Section */}
      <AcademicsSection />
      
      {/* Notice Board Section */}
      <NoticeSection onNavigateToNotices={navigateToNotices} />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />

      {/* Admin Login Modal */}
      {showLogin && (
        <AdminLogin 
          onLoginSuccess={handleLoginSuccess}
          onCancel={handleCancelLogin}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}