import { useEffect, useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1FBeMo0n230P4_PNRHJbOlVgAC5eFYo0l/view?usp=sharing", "_blank");
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="text-xl hover:text-gray-300 transition-colors"
          >
            NR
          </button>

          <div className="hidden md:flex gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="hover:text-gray-300 transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-gray-300 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => window.open("https://drive.google.com/file/d/1FBeMo0n230P4_PNRHJbOlVgAC5eFYo0l/view?usp=sharing", "_blank")}
              className="hover:text-gray-300 transition-colors"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-2xl leading-none hover:text-gray-300 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden border-gray-800 flex flex-col gap-4 transition-all duration-300 ease-out ${
            isMenuOpen
              ? 'max-h-80 opacity-100 mt-4 pt-4 border-t'
              : 'max-h-0 opacity-0 mt-0 pt-0 border-t-0 pointer-events-none'
          }`}
        >
            <button
              onClick={() => handleSectionClick('about')}
              className="text-left hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleSectionClick('experience')}
              className="text-left hover:text-gray-300 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => handleSectionClick('projects')}
              className="text-left hover:text-gray-300 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={handleResumeClick}
              className="text-left hover:text-gray-300 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => handleSectionClick('contact')}
              className="text-left hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
        </div>
      </div>
    </nav>
  );
}
