import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50">
      <Hero />
      <main>
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-white/50 bg-white/60 py-10 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} PastelPay, Inc. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-700">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
