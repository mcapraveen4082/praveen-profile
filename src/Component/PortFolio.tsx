import React, { useState, useRef } from 'react';

const skillMatrix = [
  { title: 'Core Languages', skills: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend Engineering', skills: ['React.js', 'Next.js', 'Redux', 'Performance Optimization', 'Search Engine Optimization'] },
  { title: 'Backend Engineering', skills: ['Node.js', 'NestJS', 'REST API Design', 'Authentication & Authorization', 'Microservices Basics'] },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'CI/CD Workflows', 'GitHub Actions', 'Monitoring & Logging', 'Infrastructure Awareness'],
  },
  { title: 'Data & Architecture', skills: ['MongoDB', 'MySQL', 'System Design Thinking', 'Caching Strategies', 'Scalable Backend Patterns'] },
  { title: 'Senior Engineering Skills', skills: ['Code Reviews', 'Mentoring', 'Cross-functional Collaboration', 'Production Incident Ownership', 'Technical Documentation'] },
];

const projects = [
  {
    title: 'Simply Vyapar Apps Pvt Ltd',
    description: 'Vyapar is a business accounting platform for small businesses focused on invoicing, inventory, and day-to-day accounting automation.',
    image: '/images/Wallpapers/Vyapar_App_Logo.png',
  },
  {
    title: 'Licious',
    description: 'Licious is a food-tech platform delivering fresh meat and seafood through a quality-first, technology-driven supply chain.',
    image: '/images/Wallpapers/Licious-Logo.jpg',
  },
];

const aiTooling = [
  {
    name: 'Cursor',
    usage: 'AI-assisted coding, fast refactors, and context-aware implementation support.',
  },
  {
    name: 'CodeRabbit',
    usage: 'Automated PR review feedback for quality, edge cases, and maintainability improvements.',
  },
  {
    name: 'Claude',
    usage: 'Architecture brainstorming, technical writing, and deeper reasoning on complex modules.',
  },
  {
    name: 'GitHub Copilot',
    usage: 'Code acceleration for repetitive implementation and test scaffolding.',
  },
];

const Portfolio: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const startDate = new Date('2017-09-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365));
  const monthsOfExperience = Math.floor(((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)) % 12);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsSubmitting(true);
    e.preventDefault();

    const firstName = firstNameRef.current?.value ?? '';
    const lastName = lastNameRef.current?.value ?? '';
    const phone = phoneRef.current?.value ?? '';
    const email = emailRef.current?.value ?? '';
    const message = messageRef.current?.value ?? '';

    try {
      const result = await fetch('http://localhost:5000/api/praveen-profile/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          message,
        }),
      });

      if (result.ok) {
        alert('Message sent successfully');
      } else {
        alert('Message not sent');
      }
    } catch {
      alert('Message not sent');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 16%, rgba(0,225,255,0.14), transparent 34%), radial-gradient(circle at 82% 10%, rgba(97,80,255,0.20), transparent 30%), linear-gradient(145deg, #091229, #101c39 46%, #0d1730)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-size:30px_30px] [background-image:linear-gradient(to_right,rgba(99,102,241,0.20)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.20)_1px,transparent_1px)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-12">
        <header className="animate__animated animate__fadeIn mt-10 text-center">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white/85 backdrop-blur border border-white/20 shadow-2xl px-6 py-8">
            <img
              src="/images/Wallpapers/praveen.jpg"
              alt="Developer"
              className="mx-auto h-56 w-56 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">Praveen Kumar</h1>
            <p className="mt-3 text-base text-slate-700">
              Senior Fullstack Engineer | {yearsOfExperience} years {monthsOfExperience}+ months of hands-on experience
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">Scalable Web Apps</span>
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">API-first Engineering</span>
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">Cloud-ready Delivery</span>
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-2xl bg-white/90 border border-white/30 backdrop-blur shadow-sm px-5 py-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">Engineering Skill Matrix</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillMatrix.map((group) => (
              <div key={group.title} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm transition-transform hover:-translate-y-1">
                <h5 className="text-lg font-bold text-slate-900">{group.title}</h5>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl bg-white/90 border border-white/30 backdrop-blur shadow-sm px-5 py-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">Featured Work</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex h-44 items-center justify-center bg-slate-50">
                  <img src={project.image} className="max-h-28 w-auto object-contain" alt={project.title} />
                </div>
                <div className="p-5">
                  <h5 className="text-lg font-bold text-slate-900">{project.title}</h5>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl bg-white/90 border border-white/30 backdrop-blur shadow-sm px-5 py-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">AI Tooling in My Workflow</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiTooling.map((tool) => (
              <article key={tool.name} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm transition-transform hover:-translate-y-1">
                <h5 className="text-base font-bold text-slate-900">{tool.name}</h5>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tool.usage}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl bg-white/90 border border-white/30 backdrop-blur shadow-sm px-5 py-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">Connect with Me</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="https://www.linkedin.com/in/praveen-kumar-76aaba117" className="inline-flex items-center rounded-full bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100">
              LinkedIn
            </a>
            <a href="/githubprofile" className="inline-flex items-center rounded-full bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100">
              GitHub
            </a>
            <a href="/contactus" className="inline-flex items-center rounded-full bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100">
              Contact
            </a>
          </div>
        </section>

        <section className="mt-10 rounded-2xl bg-white/90 border border-white/30 backdrop-blur shadow-sm px-5 py-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">Let's Build Something Great</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">
                First Name
              </label>
              <input ref={firstNameRef} type="text" id="firstName" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your First Name" required />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">
                Last Name
              </label>
              <input ref={lastNameRef} type="text" id="lastName" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your Last Name" required />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input ref={emailRef} type="email" id="email" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your Email" required />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                Phone Number
              </label>
              <input ref={phoneRef} type="phone" id="phone" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your phone number" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea ref={messageRef} id="message" rows={4} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Tell me about your project..." required />
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <button type="button" onClick={handleSubmit} className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;

