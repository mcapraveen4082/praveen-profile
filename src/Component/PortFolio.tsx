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
    url: '/company/vyapar',
  },
  {
    title: 'Licious',
    description: 'Licious is a food-tech platform delivering fresh meat and seafood through a quality-first, technology-driven supply chain.',
    image: '/images/Wallpapers/Licious-Logo.jpg',
    url: '/company/licious',
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
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="relative mx-auto max-w-6xl px-3 pb-10 sm:px-4 sm:pb-12">
        <header className="animate__animated animate__fadeIn mt-6 text-center sm:mt-10">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/20 bg-white/85 px-4 py-6 shadow-2xl backdrop-blur sm:rounded-3xl sm:px-6 sm:py-8">
            <img
              src="/images/Wallpapers/praveen.jpg"
              alt="Developer"
              className="mx-auto h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg sm:h-48 sm:w-48 lg:h-56 lg:w-56"
            />
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">Praveen Kumar</h1>
            <p className="mt-3 text-sm text-slate-700 sm:text-base">
              Senior Fullstack Engineer | {yearsOfExperience} years {monthsOfExperience}+ months of hands-on experience
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5">
              <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 sm:px-4 sm:py-2 sm:text-sm">Scalable Web Apps</span>
              <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 sm:px-4 sm:py-2 sm:text-sm">API-first Engineering</span>
              <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 sm:px-4 sm:py-2 sm:text-sm">Cloud-ready Delivery</span>
            </div>
          </div>
        </header>

        <section className="mt-7 rounded-2xl border border-white/30 bg-white/90 px-4 py-5 shadow-sm backdrop-blur sm:mt-10 sm:px-5 sm:py-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">Engineering Skill Matrix</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillMatrix.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-transform hover:-translate-y-1 sm:p-5">
                <h5 className="text-base font-bold text-slate-900 sm:text-lg">{group.title}</h5>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 sm:px-3 sm:text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-white/30 bg-white/90 px-4 py-5 shadow-sm backdrop-blur sm:mt-10 sm:px-5 sm:py-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">Featured Work</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex h-36 items-center justify-center bg-slate-50 sm:h-44">
                  <img src={project.image} className="max-h-28 w-auto object-contain" alt={project.title} />
                </div>
                <div className="p-4 sm:p-5">
                  <h5 className="text-base font-bold text-slate-900 sm:text-lg">{project.title}</h5>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
                  <a
                    href={project.url}
                    className="mt-4 inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700 transition-colors hover:bg-indigo-100"
                  >
                    View Portfolio Case Study
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-white/30 bg-white/90 px-4 py-5 shadow-sm backdrop-blur sm:mt-10 sm:px-5 sm:py-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">AI Tooling in My Workflow</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiTooling.map((tool) => (
              <article key={tool.name} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm transition-transform hover:-translate-y-1">
                <h5 className="text-base font-bold text-slate-900">{tool.name}</h5>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tool.usage}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-white/30 bg-white/90 px-4 py-5 shadow-sm backdrop-blur sm:mt-10 sm:px-5 sm:py-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">Day-to-Day AI Development Process</h2>
          <div className="mx-auto mt-5 max-w-4xl rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-5">
            <p className="text-center text-sm leading-relaxed text-slate-700 sm:text-base">
              I use an AI-first engineering workflow that combines strong system design with fast, reliable delivery.
            </p>
            <p className="mt-2 text-center text-sm font-semibold leading-relaxed text-indigo-700 sm:text-base">
              My stack includes Claude, MCP integrations, GitLab pipelines, and Atlassian planning to move features from idea to production.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h5 className="text-base font-bold text-slate-900">Plan & Scope</h5>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                I convert product requirements into clear technical milestones, acceptance criteria, and delivery estimates.
              </p>
            </article>
            <article className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h5 className="text-base font-bold text-slate-900">Build Faster</h5>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                I use Cursor and Claude to accelerate implementation, simplify refactors, and maintain code quality at speed.
              </p>
            </article>
            <article className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h5 className="text-base font-bold text-slate-900">Review & Validate</h5>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                I combine AI-assisted review with GitLab quality gates to catch edge cases and keep standards consistent.
              </p>
            </article>
            <article className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h5 className="text-base font-bold text-slate-900">Ship & Learn</h5>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                I close each delivery cycle with release insights, incident learning, and process improvements for the next sprint.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-white/30 bg-white/90 px-4 py-5 shadow-sm backdrop-blur sm:mt-10 sm:px-5 sm:py-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">Connect with Me</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
            <a href="https://www.linkedin.com/in/praveen-kumar-76aaba117" className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2.5 text-xs font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 sm:px-5 sm:py-3 sm:text-sm">
              LinkedIn
            </a>
            <a href="/githubprofile" className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2.5 text-xs font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 sm:px-5 sm:py-3 sm:text-sm">
              GitHub
            </a>
            <a href="/contactus" className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2.5 text-xs font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 sm:px-5 sm:py-3 sm:text-sm">
              Contact
            </a>
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-white/30 bg-white/90 px-4 py-5 shadow-sm backdrop-blur sm:mt-10 sm:px-5 sm:py-6">
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">Let's Build Something Great</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">
                First Name
              </label>
              <input ref={firstNameRef} type="text" id="firstName" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your First Name" required />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">
                Last Name
              </label>
              <input ref={lastNameRef} type="text" id="lastName" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your Last Name" required />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input ref={emailRef} type="email" id="email" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your Email" required />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700">
                Phone Number
              </label>
              <input ref={phoneRef} type="tel" id="phone" className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Your phone number" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea ref={messageRef} id="message" rows={4} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Tell me about your project..." required />
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <button type="button" onClick={handleSubmit} className="w-full rounded-full bg-indigo-600 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60 sm:w-auto">
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

