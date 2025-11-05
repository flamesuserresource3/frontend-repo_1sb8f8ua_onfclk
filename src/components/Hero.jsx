import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-rose-50 via-sky-50 to-violet-50">
      <div className="absolute inset-0" aria-hidden>
        <div className="h-[70vh] md:h-[80vh] w-full">
          <Spline
            scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-10 md:pt-12">
        <header className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/60 px-5 py-3 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-tr from-rose-200 to-indigo-200">
              <Rocket className="h-5 w-5 text-indigo-700" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-800">PastelPay</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</button>
            <button className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500">
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </header>

        <div className="relative mx-auto max-w-3xl py-16 text-center md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Shield className="h-3.5 w-3.5" />
            Secure, simple, pastel fintech
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
            The most delightful way to accept payments
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            A modern platform for subscriptions, invoices, and payouts — crafted with a soft pastel aesthetic your customers will love.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-400">
              Create your account
            </button>
            <button className="inline-flex items-center justify-center rounded-xl bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 backdrop-blur-md transition hover:bg-white">
              Explore the demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
