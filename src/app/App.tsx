import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="mx-auto max-w-2xl border-t border-border px-6 py-8 font-mono text-xs text-text-dim">
        <p>© 2026 Namay Rohatgi</p>
      </footer>
    </div>
  );
}
