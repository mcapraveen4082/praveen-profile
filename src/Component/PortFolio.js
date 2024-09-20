import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../css/portfolio.css';

const frameworkSkills = ['ReactJs', 'Node.js', 'NextJs', 'NestJs', 'Laravel'];
const languageSkills = ['JavaScript','PHP'];
const otherSkills = ['MySql','MongoDb','HTML','CSS','AWS','Docker'];
const projects = [
  {
    title: 'Simply Vyapar Apps Pvt Ltd',
    description: 'A responsive website built using React.',
    image: 'images/Wallpapers/abs1.jpg',
  },
  {
    title: 'Licious',
    description: 'A web application utilizing Node.js for backend services.',
    image: 'images/Wallpapers/abs2.jpg',
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="bg-image"></div>
      <header className="text-center my-5">
        <img src="images/Wallpapers/P_praveen(72 KB).JPG" alt="Developer" className="profile-image rounded-circle shadow" />
        <h1 className="display-4">Praveen Kumar</h1>
        <p className="lead">Senior fullstack developer | 7+ Years Experience</p>
      </header>

      <section className="my-5">
        <h2 className="text-center mb-4">Programming Language's</h2>
        <div className="row text-center">
          {languageSkills.map((skill, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="skill-card animate__animated animate__fadeInUp">
                <h5>{skill}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-5">
        <h2 className="text-center mb-4">Framework Skills</h2>
        <div className="row text-center">
          {frameworkSkills.map((skill, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="skill-card animate__animated animate__fadeInUp">
                <h5>{skill}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-5">
        <h2 className="text-center mb-4">Other Skills</h2>
        <div className="row text-center">
          {otherSkills.map((skill, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="skill-card animate__animated animate__fadeInUp">
                <h5>{skill}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">Featured Projects</h2>
        <div id="projectCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={project.image} className="d-block w-100" alt={project.title} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#projectCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#projectCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">Connect with Me</h2>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/praveen-kumar-76aaba117" className="social-link mx-3">LinkedIn</a>
          <a href="/githubprofile" className="social-link mx-3">GitHub</a>
        </div>
      </section>

      <section className="my-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
