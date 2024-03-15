/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
// import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/parallaxbg.css';


class ParallaxEffect extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="parallex-effects">
                <div className="block-1">
                    <div className="sticky">
                        <Row className="content-wrap">
                            <Col md={6}>
                                <img className="profile-image" alt="img1" src="images/Wallpapers/P_praveen(72 KB).JPG" />
                            </Col>
                            <Col md={6}>
                                {/* <a text="path.to.string" href="a's href"/> */}
                               <p>Praveen Kumar</p>
                               <p>(Senior Software Engineer)</p>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="block-2">
                    <div className="sticky2">
                        <p className='profile-desc'>
                            I am a senior software engineer with a passion for building scalable and robust web applications. With over 6+ years of experience, I have a strong foundation in frontend and backend technologies, including <b>React.js, Nest.js, JavaScript, Laravel, HTML, and CSS</b>.
                        </p>
                    </div>
                </div>
                <div className="block-3">
                    <div className="sticky3">
                        <p className='tech-skills'>
                            <ul>
                                <li><b>Frontend Development:</b> Proficient in building responsive and dynamic user interfaces using React.js. Experienced in state management with Redux and context API.</li><br/>
                                <li><b>Backend Development:</b> Skilled in building RESTful APIs and microservices using Nest.js. Familiar with database management systems like PostgreSQL and MySQL.</li><br/>
                                <li><b>Full Stack Development:</b> Experienced in integrating frontend and backend systems to create full-stack applications. Proficient in using technologies like Laravel for backend development.</li><br/>
                                <li><b>Cloud Computing:</b> Experienced in deploying applications to AWS (Amazon Web Services) using services like EC2, RDS, S3, IAM, and CloudWatch.</li><br/>
                                <li><b>Web Technologies:</b> Proficient in HTML, CSS, and JavaScript. Familiar with modern CSS frameworks like Bootstrap and Tailwind CSS.</li><br/>
                            </ul>       
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParallaxEffect;