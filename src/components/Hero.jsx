import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight, Calendar } from 'lucide-react';

const SOCIALS = {
  github: 'https://github.com/sathviknagesh',
  linkedin: 'https://www.linkedin.com/in/sathviknagesh',
  x: 'https://x.com/sathvik_nagesh',
};

const CALENDLY = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/srushtisathvik/30min';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-blue-600/20">
            Cybersecurity Analyst · protecting systems & data
          </span>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-blue-600">Sathvik Nagesh</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            I investigate threats, harden infrastructure, and help teams ship securely. Minimal, fast, and reliable security engineering.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white shadow hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50"
            >
              <Calendar className="h-4 w-4" />
              Book a call
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900/5 px-4 py-2.5 font-medium text-gray-900 dark:text-white ring-1 ring-gray-900/10 hover:bg-gray-900/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50"
            >
              Explore work
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="ml-2 flex items-center gap-2">
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-lg p-2 ring-1 ring-gray-900/10 hover:bg-gray-900/5">
                <Github className="h-5 w-5" />
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-lg p-2 ring-1 ring-gray-900/10 hover:bg-gray-900/5">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={SOCIALS.x} target="_blank" rel="noreferrer" aria-label="Twitter/X" className="rounded-lg p-2 ring-1 ring-gray-900/10 hover:bg-gray-900/5">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
