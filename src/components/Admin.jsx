import { useMemo, useState } from 'react';
import { useContent } from './ContentContext';
import { Save, RotateCcw } from 'lucide-react';

export default function Admin() {
  const { content, setContent, resetContent } = useContent();
  const [local, setLocal] = useState(() => JSON.stringify(content, null, 2));
  const [status, setStatus] = useState('idle');

  const valid = useMemo(() => {
    try {
      JSON.parse(local);
      return true;
    } catch {
      return false;
    }
  }, [local]);

  function handleSave() {
    if (!valid) return;
    try {
      const parsed = JSON.parse(local);
      setContent(parsed);
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    } catch {
      setStatus('error');
    }
  }

  function handleReset() {
    resetContent();
    setLocal(prev => JSON.stringify({
      hero: {
        title: 'Sathvik Nagesh',
        subtitle: 'Cybersecurity • Threat Detection • Secure Engineering',
        cta: 'Book a call',
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
    }, null, 2));
  }

  return (
    <section id="admin" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Admin Editor</h2>
        <div className="flex items-center gap-2">
          <button onClick={handleReset} className="inline-flex items-center gap-2 rounded-md bg-black/5 px-3 py-2 text-sm hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/15">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
          <button onClick={handleSave} disabled={!valid} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60">
            <Save className="h-4 w-4" /> Save
          </button>
        </div>
      </div>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">Edit the JSON below to update hero text and projects in real time. Changes persist locally.</p>
      <textarea
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        className="h-80 w-full rounded-lg border border-black/10 bg-white/80 p-3 font-mono text-sm leading-6 outline-none ring-indigo-500/30 focus:ring dark:bg-black/30"
      />
      {status !== 'idle' && (
        <p className={`mt-2 text-sm ${status==='saved' ? 'text-green-600' : status==='error' ? 'text-red-600' : 'text-gray-600'}`}>
          {status === 'saved' ? 'Saved!' : 'Error saving.'}
        </p>
      )}
    </section>
  );
}
