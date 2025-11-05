import React from 'react';

const posts = [
  {
    title: 'Designing fintech with a soft touch',
    excerpt: 'How pastel palettes and gentle motion build trust in modern financial products.',
    date: 'Oct 2025',
  },
  {
    title: 'From invoices to insights',
    excerpt: 'Turn your payment data into actionable metrics without the complexity.',
    date: 'Sep 2025',
  },
  {
    title: 'Security that feels simple',
    excerpt: 'UX principles for communicating safety without friction.',
    date: 'Aug 2025',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Latest from the blog</h2>
        <p className="mt-3 text-slate-600">Product updates, design notes, and lessons from building PastelPay.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-white/40 bg-white/70 p-6 shadow-sm backdrop-blur-md transition hover:shadow-md">
            <div className="text-xs font-medium text-slate-500">{p.date}</div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-700">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
            <div className="mt-4 text-sm font-semibold text-indigo-700">Read more →</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
