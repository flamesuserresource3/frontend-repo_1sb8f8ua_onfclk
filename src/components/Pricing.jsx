import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For trying things out',
    features: ['1 project', 'Community support', 'Basic analytics'],
    cta: 'Get started',
    highlight: false,
    color: 'from-rose-100 to-rose-200',
  },
  {
    name: 'Pro',
    price: '$19/mo',
    desc: 'For growing products',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom domains'],
    cta: 'Start Pro',
    highlight: true,
    color: 'from-indigo-100 to-indigo-200',
  },
  {
    name: 'Business',
    price: '$59/mo',
    desc: 'For serious teams',
    features: ['SLA & SSO', 'Audit logs', 'Team roles', 'Webhook retries'],
    cta: 'Contact sales',
    highlight: false,
    color: 'from-sky-100 to-sky-200',
  },
];

const PricingCard = ({ tier }) => (
  <div className={`relative flex h-full flex-col justify-between rounded-2xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur-md ${
    tier.highlight ? 'md:scale-[1.02] md:ring-indigo-300' : ''
  }`}>
    <div>
      <div className={`inline-flex rounded-full bg-gradient-to-r ${tier.color} px-3 py-1 text-xs font-medium text-slate-800`}>{tier.name}</div>
      <div className="mt-4 text-3xl font-extrabold text-slate-900">{tier.price}</div>
      <p className="mt-1 text-sm text-slate-600">{tier.desc}</p>
      <ul className="mt-6 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
    <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold shadow-sm transition ${
      tier.highlight
        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
        : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'
    }`}>
      {tier.cta}
    </button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-slate-600">Start free, upgrade as you grow. No hidden fees.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <PricingCard key={t.name} tier={t} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
