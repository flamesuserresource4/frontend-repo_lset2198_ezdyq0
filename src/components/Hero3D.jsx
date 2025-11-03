import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Calendar, ArrowRight, Github, Linkedin } from 'lucide-react';
import { useContent } from './ContentContext';

const CALENDLY = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/srushtisathvik/30min';

export default function Hero3D() {
  const { content } = useContent();
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[70vh] overflow-hidden">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Grainy gradient overlay, make sure it doesn't block interactions */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-80"
        style={{
          backgroundImage:
            'radial-gradient(1200px 800px at 80% 0%, rgba(124, 58, 237, 0.25), transparent 60%), radial-gradient(1000px 800px at 10% 100%, rgba(14, 165, 233, 0.25), transparent 60%), linear-gradient(180deg, rgba(2,6,23,0.7), rgba(2,6,23,0.6))',
          mixBlendMode: 'screen',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 sm:py-32">
        <motion.span
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur-sm"
        >
          Interactive • 3D • Futuristic
        </motion.span>

        <motion.h1
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-4xl font-black tracking-tight text-white drop-shadow sm:text-6xl"
        >
          {content.hero.title}
        </motion.h1>

        <motion.p
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-lg text-white/85"
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-400 hover:to-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
          >
            <Calendar className="h-4 w-4" />
            {content.hero.cta}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 font-medium text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
          >
            Explore work <ArrowRight className="h-4 w-4" />
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a href="https://github.com/sathviknagesh" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/20 hover:bg-white/15">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/sathviknagesh" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/20 hover:bg-white/15">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
