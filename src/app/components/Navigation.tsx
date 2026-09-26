import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'experience', label: 'work' },
  { id: 'projects', label: 'projects' },
  { id: 'achievements', label: 'achievements' },
  { id: 'contact', label: 'contact' },
];

const THEME_STORAGE_KEY = 'theme';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : 'dark';
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
          className="font-mono text-[13px] font-medium tracking-wide whitespace-nowrap"
        >
          NAMAY ROHATGI
        </button>

        <div className="hidden items-center gap-4 font-mono text-xs tracking-wide whitespace-nowrap text-text-dim md:flex">
          {LINKS.map((link) => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-accent">
              {link.label}
            </button>
          ))}
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label="Toggle color theme"
            className="rounded border border-border-muted px-2.5 py-1 hover:text-accent"
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="font-mono text-xs md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? 'close' : 'menu'}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`flex flex-col gap-4 overflow-hidden border-border px-6 font-mono text-xs tracking-wide text-text-dim transition-all duration-300 ease-out md:hidden ${
          isMenuOpen ? 'max-h-80 border-t pt-4 pb-6 opacity-100' : 'max-h-0 border-t-0 py-0 opacity-0'
        }`}
      >
        {LINKS.map((link) => (
          <button key={link.id} onClick={() => handleSectionClick(link.id)} className="text-left">
            {link.label}
          </button>
        ))}
        <button
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          aria-label="Toggle color theme"
          className="text-left"
        >
          {theme === 'dark' ? 'light mode' : 'dark mode'}
        </button>
      </div>
    </nav>
  );
}
