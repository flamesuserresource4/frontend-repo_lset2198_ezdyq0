import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Default content used on first load
const DEFAULT_CONTENT = {
  hero: {
    title: "Sathvik Nagesh",
    subtitle: "Cybersecurity • Threat Detection • Secure Engineering",
    cta: "Book a call",
  },
  projects: [
    {
      title: 'PhishGuard',
      description: 'Rule-based phishing detection with a live alert dashboard.',
      tags: ['security', 'heuristics', 'dashboard'],
      links: {
        live: 'https://phishguard.example.com',
        repo: 'https://github.com/sathviknagesh/phishguard',
      },
      highlights: ['Real-time alerts', 'Inbox triage', 'Zero external dependencies'],
    },
  ],
};

const KEY = 'portfolio_content_v1';

const ContentContext = createContext({
  content: DEFAULT_CONTENT,
  setContent: (_c) => {},
  resetContent: () => {},
});

export function ContentProvider({ children }) {
  const [content, setContent] = useState(DEFAULT_CONTENT);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored) {
        setContent(JSON.parse(stored));
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(content));
    } catch {}
  }, [content]);

  const resetContent = () => setContent(DEFAULT_CONTENT);

  const value = useMemo(() => ({ content, setContent, resetContent }), [content]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}
