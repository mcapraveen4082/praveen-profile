import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import '../css/portfolio.css';

const frameworkSkills = ['ReactJs', 'Node.js', 'NextJs', 'NestJs'];
const languageSkills = ['JavaScript'];
const otherSkills = ['MySql','MongoDb','HTML','CSS','AWS','Docker'];
const projects = [
  {
    title: 'Simply Vyapar Apps Pvt Ltd',
    description: `Vyapar is a FREE Business Accounting Software built for Indian small businesses to deal with invoicing, inventory, accounting needs, and much more! The goal is to make a businessman's daily routine less tiring and let them focus more on growing their business, less on paperwork.`,
    image: 'images/Wallpapers/Vyapar_App_Logo.png',
  },
  {
    title: 'Licious',
    description: `Licious is a food tech company, founded in 2015 by Abhay Hanjura and Vivek Gupta, that delivers fresh meat and seafood to customers' doorsteps. They focus on quality, hygiene, freshness, and convenience, aiming to disrupt the meat industry with their technology-driven approach and farm-to-fork supply chain.`,
    image: 'images/Wallpapers/Licious-Logo.jpg',
  }
];

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const startDate = new Date('2017-09-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 365));
  const monthsOfExperience = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 30)%12);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(firstNameRef.current.value, lastNameRef.current.value, phoneRef.current.value, emailRef.current.value, messageRef.current.value);
    const result = await fetch('http://localhost:5000/api/praveen-profile/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value
      })
    });
    if (result.ok) {
      alert('Message sent successfully');
    } else {
      alert('Message not sent');
    }
    setIsLoading(false);
  }

  return (
    <div className="portfolio">
      <div className="bg-image"></div>
      <header className="text-center my-5">
        <img src="images/Wallpapers/praveen.jpg" alt="Developer" className="profile-image rounded-circle shadow" />
        <h1 className="display-4">Praveen Kumar</h1>
        <p className="lead">Senior fullstack developer | {yearsOfExperience} Years {monthsOfExperience}+ Months Experience</p>
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
        <div className="carousel-container">
          <div id="projectCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {projects.map((project, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="carousel-image-container">
                    <img src={project.image} className="carousel-image" alt={project.title} />
                  </div>
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
            <textarea className="form-control" ref={messageRef} id="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="button" onClick={handleSubmit} className="btn btn-primary">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
