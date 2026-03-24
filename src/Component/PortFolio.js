import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../css/portfolio.css';

const skillMatrix = [
  { title: 'Core Languages', skills: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend Engineering', skills: ['React.js', 'Next.js', 'Redux', 'Performance Optimization', 'Accessibility (a11y)'] },
  { title: 'Backend Engineering', skills: ['Node.js', 'NestJS', 'REST API Design', 'Authentication & Authorization', 'Microservices Basics'] },
  { title: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'CI/CD Workflows', 'Monitoring & Logging', 'Infrastructure Awareness'] },
  { title: 'Data & Architecture', skills: ['MongoDB', 'MySQL', 'System Design Thinking', 'Caching Strategies', 'Scalable Backend Patterns'] },
  { title: 'Senior Engineering Skills', skills: ['Code Reviews', 'Mentoring', 'Cross-functional Collaboration', 'Production Incident Ownership', 'Technical Documentation'] },
];

const projects = [
  {
    title: 'Simply Vyapar Apps Pvt Ltd',
    description: "Vyapar is a business accounting platform for small businesses focused on invoicing, inventory, and day-to-day accounting automation.",
    image: 'images/Wallpapers/Vyapar_App_Logo.png',
  },
  {
    title: 'Licious',
    description: 'Licious is a food-tech platform delivering fresh meat and seafood through a quality-first, technology-driven supply chain.',
    image: 'images/Wallpapers/Licious-Logo.jpg',
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

const Portfolio = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const startDate = new Date('2017-09-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  const monthsOfExperience = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 30) % 12);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    const result = await fetch('http://localhost:5000/api/praveen-profile/send-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      }),
    });

    if (result.ok) {
      alert('Message sent successfully');
    } else {
      alert('Message not sent');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="portfolio">
      <div className="bg-image" />

      <header className="text-center my-5 hero-panel animate__animated animate__fadeIn">
        <img src="images/Wallpapers/praveen.jpg" alt="Developer" className="profile-image rounded-circle shadow" />
        <h1 className="display-4 mb-2">Praveen Kumar</h1>
        <p className="lead mb-4">
          Senior Fullstack Engineer | {yearsOfExperience} years {monthsOfExperience}+ months of hands-on experience
        </p>
        <div className="hero-highlights">
          <span>Scalable Web Apps</span>
          <span>API-first Engineering</span>
          <span>Cloud-ready Delivery</span>
        </div>
      </header>

      <section className="my-5 section-shell">
        <h2 className="text-center mb-4">Engineering Skill Matrix</h2>
        <div className="row text-center">
          {skillMatrix.map((group) => (
            <div className="col-md-6 col-lg-4 mb-4" key={group.title}>
              <div className="skill-card animate__animated animate__fadeInUp">
                <h5>{group.title}</h5>
                <div className="skill-chip-grid">
                  {group.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-5 section-shell">
        <h2 className="text-center mb-4">Featured Work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} className="project-image" alt={project.title} />
              </div>
              <div className="project-content">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="my-5 section-shell">
        <h2 className="text-center mb-4">AI Tooling in My Workflow</h2>
        <div className="project-grid">
          {aiTooling.map((tool) => (
            <article className="model-card ai-tool-card" key={tool.name}>
              <h5>{tool.name}</h5>
              <p>{tool.usage}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-5 section-shell">
        <h2 className="text-center mb-4">Connect with Me</h2>
        <div className="text-center social-wrap">
          <a href="https://www.linkedin.com/in/praveen-kumar-76aaba117" className="social-link mx-3">LinkedIn</a>
          <a href="/githubprofile" className="social-link mx-3">GitHub</a>
          <a href="/contact" className="social-link mx-3">Contact</a>
        </div>
      </section>

      <section className="my-5 section-shell">
        <h2 className="text-center mb-4">Let's Build Something Great</h2>
        <form className="contact-form-glass">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input type="text" ref={firstNameRef} className="form-control" id="firstName" placeholder="Your First Name" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" ref={lastNameRef} className="form-control" id="lastName" placeholder="Your Last Name" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" ref={emailRef} className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Phone Number</label>
              <input type="phone" ref={phoneRef} className="form-control" id="phone" placeholder="Your phone number" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" ref={messageRef} id="message" rows="4" placeholder="Tell me about your project..." required />
          </div>
          <button type="button" onClick={handleSubmit} className="btn btn-primary contact-submit-btn">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
