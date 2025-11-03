import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import logoImage from "../assets/logo.png";

interface NavigationProps {
  onNavigateHome?: () => void;
  onNavigateToAdmissions?: () => void;
  onNavigateToGallery?: () => void;
  onShowLogin?: () => void;
}

export function Navigation({
  onNavigateHome,
  onNavigateToAdmissions,
  onNavigateToGallery,
  onShowLogin,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (sectionId: string) => {
    onNavigateHome?.();
    setIsMobileMenuOpen(false);
    if (sectionId !== "home") {
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transform transition-all duration-500 ${
        showNavbar
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      } bg-[#23495c] backdrop-blur-md shadow-lg`}
    >
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and School Name */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={onNavigateHome}
          >
            <div className="w-20 h-16 flex items-center justify-center">
            <img
              src={logoImage}
              alt="SMPS Jhansi Logo"
              className="w-20 h-16 object-contain"
            />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold leading-tight">SMPS Jhansi</h1>
              <p className="text-xs opacity-90">
                Siddheshwar Mountain Public School
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              ["home", "Home"],
              ["about", "About"],
              ["academics", "Academics"],
              ["notices", "Notices"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-white hover:text-[#e0e1be] transition-colors"
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigateToGallery?.();
              }}
              className="text-white hover:text-[#e0e1be] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onNavigateToAdmissions?.();
              }}
              className="text-white hover:text-[#e0e1be] transition-colors"
            >
              Admissions
            </button>
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onShowLogin?.();
              }}
              className="bg-[#f05461] hover:bg-[#e04451] text-white px-6 py-2 rounded-xl"
            >
              Admin Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1a3a4a]">
              {[
                ["home", "Home"],
                ["about", "About"],
                ["academics", "Academics"],
                ["notices", "Notices"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="block px-3 py-2 text-white hover:text-[#e0e1be] transition-colors w-full text-left"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToGallery?.();
                }}
                className="block px-3 py-2 text-white hover:text-[#e0e1be] transition-colors w-full text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigateToAdmissions?.();
                }}
                className="block px-3 py-2 text-white hover:text-[#e0e1be] transition-colors w-full text-left"
              >
                Admissions
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onShowLogin?.();
                  }}
                  className="bg-[#f05461] hover:bg-[#e04451] text-white px-6 py-2 rounded-xl w-full"
                >
                  Admin Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
