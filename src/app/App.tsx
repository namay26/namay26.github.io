import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        <p>© 2026 Namay Rohatgi. All rights reserved.</p>
      </footer>
    </div>
  );
}
