import React from 'react';

const Vyapar = () => {
  return (
    <div className="min-h-[60vh] bg-slate-950 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-3xl bg-white/90 border border-white/20 shadow-sm p-6 sm:p-10">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Company: <span className="text-indigo-700">Simply Vyapar Apps Pvt Ltd</span>
          </h2>

          <div className="mt-6 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              <strong className="text-slate-900">Industry:</strong> SMB FinTech / Accounting SaaS
            </p>
            <p>
              <strong className="text-slate-900">Role:</strong> Senior Fullstack Engineer
            </p>
            <p>
              <strong className="text-slate-900">Timeline:</strong> March-2019 - Present
            </p>
            <p>
              <strong className="text-slate-900">Team Setup:</strong> Product Manager, 2 Backend Engineers, 2 Frontend Engineers, QA, Support Ops
            </p>
            <p>
              <strong className="text-slate-900">Technologies Used:</strong> React.js, Next.js, NestJS, Node.js, Laravel, MySQL, Redis, AWS, Docker
            </p>
            <p>
              <strong className="text-slate-900">Domain Ownership:</strong> Support CRM flows, lead assignment automation, commissions lifecycle, reporting dashboards
            </p>
            <p>
              <strong className="text-slate-900">Business Impact:</strong> Reduced manual operations, improved support response times, and increased commission processing accuracy.
            </p>
            <p>
              <strong className="text-slate-900">Key Deliverables:</strong>
            </p>
          </div>

          <ul className="mt-5 list-disc pl-5 space-y-4 text-sm sm:text-base text-slate-700">
            <li>
              <b className="text-slate-900">Calling Support Internal Dashboard:</b>
              <p className="mt-1">
                Integrated click-to-call workflows for support agents directly from the dashboard, with call metadata logging (duration,
                timestamp, caller details) and searchable call history.
              </p>
              <p className="mt-2">
                Implemented rule-based lead assignment by source, geography, and priority to reduce manual routing overhead.
              </p>
            </li>
            <li>
              <b className="text-slate-900">Distributor Commission Engine:</b>
              <p className="mt-1">
                Automated commission calculations based on sales slabs, partner rules, and settlement windows; added monthly statements and
                reconciliation reporting.
              </p>
              <p className="mt-2">Built scheduled settlement support (weekly/monthly) with audit-ready ledger references for finance operations.</p>
            </li>
            <li>
              <b className="text-slate-900">Architecture & Quality Improvements:</b>
              <p className="mt-1">
                Standardized API contracts between frontend and backend modules, introduced modular service boundaries, and improved release
                confidence via staged QA validation.
              </p>
            </li>
            <li>
              <b className="text-slate-900">Senior Engineering Contributions:</b>
              <p className="mt-1">
                Led code reviews, mentored junior developers, and partnered with product/support teams to prioritize high-impact roadmap items.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vyapar;

