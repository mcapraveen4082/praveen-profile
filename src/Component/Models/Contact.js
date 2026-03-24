/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../css/contact_css.css";
// import ErrorBoundary from './ErrorBoundry';
// import QuoteGenerator from '../TensorFlow';

class Contact extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <>
                <Row className="Contact-section-main">
                <Col className="wrapper-contact" sm="12" md="8" lg="7">
                    <Row className="contact-head-block">
                        <Col className="contact-head" sm="12" md="12" lg="12">
                            <div className="contact-brand-logo-wrap">
                                <img src="/images/Wallpapers/praveen.jpg" alt="Praveen Kumar Logo" className="contact-brand-logo" />
                            </div>
                            <div className="head-section">
                                <p>Let&apos;s Work Together</p>
                                <span>Available for full-time and consulting opportunities</span>
                            </div>

                        </Col>
                    </Row>
                    <div className="contact-container-block">
                        <Row className="contact-detail-wrapper">
                            <Col className="contact-icon" sm="2" md="2" lg="2">
                                <i className="fa fa-3x fa-volume-control-phone" aria-hidden="true"></i>
                            </Col>
                            <Col className="contact-type" sm="10" md="10" lg="10">
                                    <p className="title">Call</p>
                                    <p className="value">+91 89409 70374</p>
                            </Col>
                        </Row>
                        <Row className="contact-detail-wrapper">
                            <Col className="contact-icon" sm="2" md="2" lg="2">
                                <i className="fa fa-3x fa-envelope-o" aria-hidden="true"></i>
                            </Col>
                            <Col className="contact-type" sm="10" md="10" lg="10">
                                <p className="title">Email</p>
                                <p className="value">mca.praveen4082@gmail.com</p>
                            </Col>
                        </Row>
                        <Row className="contact-detail-wrapper">
                            <Col className="contact-icon" sm="2" md="2" lg="2">
                                <i className="fa fa-3x fa-home" aria-hidden="true"></i>
                            </Col>
                            <Col className="contact-type" sm="10" md="10" lg="10">
                                <p className="title">Location</p>
                                <p className="value">#20, 5th Cross Rd, Kullappa Colony, Jeevan Bhima Nagar, Bengaluru - 560017</p>
                            </Col>
                        </Row>
                        <Row className="contact-detail-wrapper">
                            <Col className="contact-icon" sm="2" md="2" lg="2">
                                <i className="fa fa-3x fa-linkedin-square" aria-hidden="true"></i>
                            </Col>
                            <Col className="contact-type" sm="10" md="10" lg="10">
                                <p className="title">LinkedIn</p>
                                <p className="value">
                                    <a href="https://www.linkedin.com/in/praveen-kumar-76aaba117" target="_blank" rel="noreferrer">
                                        View Professional Profile
                                    </a>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
                </Row>
                {/* <ErrorBoundary>
                    <div className="App">
                        <QuoteGenerator />
                    </div>
                </ErrorBoundary> */}
          
            </>
          
          
        );
    }
}

export default Contact;