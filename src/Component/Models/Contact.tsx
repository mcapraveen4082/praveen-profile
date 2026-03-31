/* eslint-disable no-useless-constructor */
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[60vh] bg-transparent py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl bg-white/90 border border-white/20 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <img
              src="/images/Wallpapers/praveen.jpg"
              alt="Praveen Kumar"
              className="h-16 w-16 rounded-full border-2 border-indigo-500 shadow-md object-cover"
            />
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Let&apos;s Work Together</h2>
              <p className="mt-1 text-sm font-semibold text-slate-600">
                Available for full-time and consulting opportunities
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-start gap-4">
              <i className="fa fa-2x fa-volume-control-phone text-indigo-700 mt-1" aria-hidden="true"></i>
              <div>
                <div className="text-sm font-extrabold text-slate-900">Call</div>
                <div className="mt-1 text-sm font-semibold text-slate-600">+91 89409 70374</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-start gap-4">
              <i className="fa fa-2x fa-envelope-o text-indigo-700 mt-1" aria-hidden="true"></i>
              <div>
                <div className="text-sm font-extrabold text-slate-900">Email</div>
                <a
                  className="mt-1 block text-sm font-semibold text-indigo-700 hover:underline"
                  href="mailto:mca.praveen4082@gmail.com"
                >
                  mca.praveen4082@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-start gap-4 sm:col-span-2">
              <i className="fa fa-2x fa-home text-indigo-700 mt-1" aria-hidden="true"></i>
              <div>
                <div className="text-sm font-extrabold text-slate-900">Location</div>
                <div className="mt-1 text-sm font-semibold text-slate-600">
                  #20, 5th Cross Rd, Kullappa Colony, Jeevan Bhima Nagar, Bengaluru - 560017
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-start gap-4 sm:col-span-2">
              <i className="fa fa-2x fa-linkedin-square text-indigo-700 mt-1" aria-hidden="true"></i>
              <div>
                <div className="text-sm font-extrabold text-slate-900">LinkedIn</div>
                <a
                  className="mt-1 block text-sm font-semibold text-indigo-700 hover:underline"
                  href="https://www.linkedin.com/in/praveen-kumar-76aaba117"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Professional Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

