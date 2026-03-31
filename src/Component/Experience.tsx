import React from 'react';

const experiences = [
  {
    company: 'Simply Vyapar Apps Pvt Ltd',
    role: 'Senior Fullstack Engineer',
    focus: 'Business accounting platform modernization',
    highlights: [
      'Built/maintained support CRM flows and rule-based lead assignment automation.',
      'Improved backend API reliability and performance for invoicing/accounting operations.',
      'Partnered with product/support teams to deliver measurable feature outcomes and reduce manual operations.',
    ],
  },
  {
    company: 'Licious',
    role: 'Frontend / Fullstack Engineer',
    focus: 'E-commerce user journey and checkout experience',
    highlights: [
      'Delivered product listing and checkout workflow improvements focused on conversion.',
      'Integrated payment flows with robust handling for transaction reliability and callbacks.',
      'Implemented coupon/referral modules with validation and admin-driven campaign logic.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-[60vh] bg-transparent py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white/90 border border-white/20 shadow-sm p-6 sm:p-10">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">Professional Experience</h2>
          <p className="mt-3 text-center text-slate-600 font-semibold">
            Senior engineering focus on reliable product delivery, scalable architecture, and high-quality execution.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {experiences.map((exp) => (
              <article
                key={exp.company}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-extrabold text-slate-900">{exp.company}</h3>
                  <p className="text-sm font-bold text-indigo-700">{exp.role}</p>
                  <p className="text-sm text-slate-600">{exp.focus}</p>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

