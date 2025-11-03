import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '9943f7a0-9e27-4782-bb2f-41610a1a68b8';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', ACCESS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage('Thanks! Your message has been sent.');
        form.reset();
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again later.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-2xl font-bold sm:text-3xl"
      >
        Contact
      </motion.h2>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-4 rounded-xl border border-gray-200 bg-white/70 p-5 backdrop-blur dark:bg-gray-900/40"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
            <input id="name" name="name" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-blue-600/30 focus:ring" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-blue-600/30 focus:ring" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-blue-600/30 focus:ring" />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white shadow hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>
          {status !== 'idle' && (
            <p className={`text-sm ${status === 'success' ? 'text-green-600' : status === 'error' ? 'text-red-600' : 'text-gray-600'}`}>{message}</p>
          )}
        </div>
      </motion.form>
    </section>
  );
}
