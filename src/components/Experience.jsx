import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Cybersecurity Intern',
    company: 'Government of Karnataka',
    start: 'Jun 2023',
    end: 'Sep 2023',
    summary: 'Worked on vulnerability assessments and IT audits.',
    highlights: [
      'Performed penetration testing on live systems',
      'Documented and reported potential exploits',
    ],
    tech: ['Networking', 'Linux', 'Wireshark'],
  },
  {
    role: 'Cybersecurity Intern',
    company: 'Infosys',
    start: 'Nov 2022',
    end: 'Feb 2023',
    summary: 'Assisted in monitoring and securing enterprise networks.',
    highlights: ['Handled SOC operations', 'Analyzed phishing attempts'],
    tech: ['Splunk', 'Firewalls', 'Email Security'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Experience</h2>
      <div className="space-y-6">
        {experience.map((item, idx) => (
          <motion.div
            key={item.company + idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-xl border border-gray-200 bg-white/70 p-5 backdrop-blur dark:bg-gray-900/40"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-lg font-semibold">
                {item.role} · <span className="text-blue-600">{item.company}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {item.start} — {item.end}
              </div>
            </div>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((t) => (
                <span key={t} className="rounded-full bg-gray-900/5 px-2.5 py-1 text-xs text-gray-700 dark:text-gray-300 ring-1 ring-gray-900/10">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
