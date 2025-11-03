import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Admin from './components/Admin';
import { ContentProvider } from './components/ContentContext';

export default function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-white">
        <Navbar />
        <main>
          <Hero3D />
          <Projects />
          <Admin />
        </main>
        <footer className="border-t border-black/10 py-8 text-center text-sm text-gray-600 dark:border-white/10 dark:text-gray-300">
          © {new Date().getFullYear()} Sathvik Nagesh · Built with motion & 3D.
        </footer>
      </div>
    </ContentProvider>
  );
}
