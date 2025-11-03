import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useContent } from './ContentContext';

export default function Projects() {
  const { content } = useContent();
  const prefersReduced = useReducedMotion();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {content.projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/70 backdrop-blur dark:bg-black/30"
          >
            <div className="aspect-[16/9] w-full bg-gradient-to-br from-indigo-500/20 to-sky-500/20" aria-hidden />
            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {p.links?.live && (
                    <a className="rounded-md p-2 ring-1 ring-black/10 hover:bg-black/5 dark:ring-white/15 dark:hover:bg-white/5" href={p.links.live} target="_blank" rel="noreferrer" aria-label="Live">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {p.links?.repo && (
                    <a className="rounded-md p-2 ring-1 ring-black/10 hover:bg-black/5 dark:ring-white/15 dark:hover:bg-white/5" href={p.links.repo} target="_blank" rel="noreferrer" aria-label="Repository">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              {Array.isArray(p.highlights) && p.highlights.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-black/5 px-3 py-1 text-xs text-gray-700 ring-1 ring-black/10 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10">
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {Array.isArray(p.tags) && p.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-indigo-600/20 dark:text-indigo-200">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
