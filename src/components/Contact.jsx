import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus('loading');
      // This demo uses a client-only handler. In a full app, send to your backend.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Let’s talk</h2>
          <p className="mt-3 text-slate-600">Have a question about pricing, features, or enterprise? Send us a message and we’ll reply shortly.</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>Response time: under 24 hours</li>
            <li>Support hours: Mon–Fri, 9am–6pm</li>
          </ul>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md">
          <div className="grid grid-cols-1 gap-4">
            <label className="text-sm">
              <span className="text-slate-700">Name</span>
              <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 outline-none ring-indigo-200 focus:ring" />
            </label>
            <label className="text-sm">
              <span className="text-slate-700">Email</span>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 outline-none ring-indigo-200 focus:ring" />
            </label>
            <label className="text-sm">
              <span className="text-slate-700">Message</span>
              <textarea name="message" value={form.message} onChange={onChange} rows={5} required className="mt-1 w-full rounded-lg border border-slate-200 bg-white/80 px-3 py-2 outline-none ring-indigo-200 focus:ring" />
            </label>
          </div>
          <button type="submit" disabled={status==='loading'} className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:opacity-60">
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'success' && (
            <p className="mt-3 text-sm text-emerald-700">Thanks! We received your message.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-rose-700">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
