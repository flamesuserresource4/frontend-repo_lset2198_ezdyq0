import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/70 backdrop-blur dark:bg-gray-900/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-bold">Sathvik Nagesh</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="rounded-md px-3 py-1.5 hover:bg-gray-900/5">Projects</a>
          <a href="#experience" className="rounded-md px-3 py-1.5 hover:bg-gray-900/5">Experience</a>
          <a href="#contact" className="rounded-md px-3 py-1.5 hover:bg-gray-900/5">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50 text-gray-900">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-gray-200/70 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Sathvik Nagesh · Built with care.
      </footer>
    </div>
  );
}
