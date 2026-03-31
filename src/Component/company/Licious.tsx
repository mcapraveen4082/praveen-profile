import React from 'react';

const Licious = () => {
  return (
    <div className="min-h-[60vh] bg-transparent py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-3xl bg-white/90 border border-white/20 shadow-sm p-6 sm:p-10">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Company: <span className="text-indigo-700">Licious</span>
          </h2>

          <div className="mt-6 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              <strong className="text-slate-900">Industry:</strong> Food Tech / E-commerce
            </p>
            <p>
              <strong className="text-slate-900">Role:</strong> Frontend / Fullstack Engineer
            </p>
            <p>
              <strong className="text-slate-900">Timeline:</strong> Sep-2017 - Feb-2019
            </p>
            <p>
              <strong className="text-slate-900">Team Setup:</strong> Product Manager, Frontend Squad, Backend Squad, QA, Growth Team
            </p>
            <p>
              <strong className="text-slate-900">Technologies Used:</strong> React.js, JavaScript, Laravel, REST APIs, HTML, CSS, Payment Gateway Integrations
            </p>
            <p>
              <strong className="text-slate-900">Domain Ownership:</strong> Product browsing, checkout funnel, payment integration, and conversion-focused campaign modules
            </p>
            <p>
              <strong className="text-slate-900">Business Impact:</strong> Improved purchase journey reliability and reduced checkout friction for high-intent customers.
            </p>
            <p>
              <strong className="text-slate-900">Key Deliverables:</strong>
            </p>
          </div>

          <ul className="mt-5 list-disc pl-5 space-y-4 text-sm sm:text-base text-slate-700">
            <li>
              <b className="text-slate-900">Product Listing Experience:</b>
              <p className="mt-1">
                Built product listing modules with pricing, availability, SKU-level metadata, and category-driven discoverability for smoother browsing.
              </p>
            </li>
            <li>
              <b className="text-slate-900">Checkout Flow:</b>
              <p className="mt-1">
                Developed checkout journey for cart review, address capture, and payment flow orchestration with improved UX consistency.
              </p>
            </li>
            <li>
              <b className="text-slate-900">Paytm Payment Gateway:</b>
              <p className="mt-1">
                Integrated gateway APIs for payment initiation, callbacks, and transaction state handling to improve payment success reliability.
              </p>
            </li>
            <li>
              <b className="text-slate-900">Coupons & Referral Programs:</b>
              <p className="mt-1">
                Implemented campaign-ready coupon and referral modules with validation logic, reward handling, and admin-driven campaign management.
              </p>
            </li>
            <li>
              <b className="text-slate-900">Senior Engineering Contributions:</b>
              <p className="mt-1">
                Collaborated with growth and product teams on experimentation inputs, participated in peer code reviews, and improved feature rollout quality.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Licious;

