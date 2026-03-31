import React from 'react';

const templates = [
  {
    name: 'Executive Minimal',
    style: 'Clean typography, concise highlights, and recruiter-friendly readability.',
    bestFor: 'Senior/staff engineers targeting product companies.',
  },
  {
    name: 'Product Engineer Story',
    style: 'Case-study cards with problem, solution, and impact metrics.',
    bestFor: 'Showcasing project ownership and business outcomes.',
  },
  {
    name: 'Dark Premium Motion',
    style: 'Dark gradient theme with subtle animations and modern visual depth.',
    bestFor: 'Creative-first personal branding and strong visual identity.',
  },
  {
    name: 'Consulting Landing',
    style: 'Service-oriented sections with engagement models and CTA emphasis.',
    bestFor: 'Freelance and consulting opportunities.',
  },
];

const Templates = () => {
  return (
    <div className="min-h-[60vh] bg-transparent py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white/90 border border-white/20 shadow-sm p-6 sm:p-10">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">Portfolio Template Options</h2>
          <p className="mt-3 text-center text-slate-600 font-semibold">
            Choose one style direction and I can convert the entire portfolio into that template pattern.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {templates.map((template) => (
              <article
                key={template.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1"
              >
                <h3 className="text-base font-extrabold text-slate-900">{template.name}</h3>
                <p className="mt-3 text-sm text-slate-700">
                  <strong className="text-slate-900">Style:</strong> {template.style}
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  <strong className="text-slate-900">Best for:</strong> {template.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;

