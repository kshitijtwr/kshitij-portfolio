import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 50);
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
      isScrolled ? 'border-primary-custom/10 bg-white/88 shadow-lg shadow-gray-900/5 backdrop-blur-xl' : 'border-white/40 bg-white/72 backdrop-blur-lg'
    }`}>
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-custom via-secondary-custom to-accent-custom transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold gradient-text"
          >
            Kshitij Tiwari
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="relative text-gray-700 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary-custom after:transition-all hover:text-primary-custom hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="relative text-gray-700 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary-custom after:transition-all hover:text-primary-custom hover:after:w-full"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="relative text-gray-700 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary-custom after:transition-all hover:text-primary-custom hover:after:w-full"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="relative text-gray-700 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary-custom after:transition-all hover:text-primary-custom hover:after:w-full"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-gray-700 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary-custom after:transition-all hover:text-primary-custom hover:after:w-full"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-lg p-2 text-gray-700 transition-colors hover:bg-primary-custom/10 hover:text-primary-custom"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-rise">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary-custom transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-700 hover:text-primary-custom transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-primary-custom transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-primary-custom transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary-custom transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
