import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'PhishGuard',
    description: 'AI-based phishing email detection tool with a real-time alert dashboard.',
    highlights: [
      'Detects phishing using rule-based heuristics',
      'Dashboard with real-time alerts',
    ],
    tags: ['cybersecurity', 'ml', 'dashboard'],
    links: {
      live: 'https://phishguard.example.com',
      repo: 'https://github.com/sathviknagesh/phishguard',
    },
    image: '/projects/phishguard-cover.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white/70 backdrop-blur dark:bg-gray-900/40"
          >
            <div className="aspect-[16/9] w-full bg-gray-100" aria-hidden>
              {/* Image placeholder; ensure file exists in public if you add it */}
            </div>
            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a className="rounded-md p-2 ring-1 ring-gray-200 hover:bg-gray-50" href={p.links.live} target="_blank" rel="noreferrer" aria-label="Live">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a className="rounded-md p-2 ring-1 ring-gray-200 hover:bg-gray-50" href={p.links.repo} target="_blank" rel="noreferrer" aria-label="Repository">
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {p.highlights.map(h => (
                  <li key={h} className="rounded-full bg-gray-900/5 px-3 py-1 text-xs text-gray-700 dark:text-gray-300 ring-1 ring-gray-900/10">{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
