export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl hover:text-gray-300 transition-colors"
          >
            NR
          </button>
          <div className="flex gap-8">
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
              onClick={() => scrollToSection('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
