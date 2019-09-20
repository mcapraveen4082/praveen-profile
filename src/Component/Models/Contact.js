import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../css/contact_css.css";

class Contact extends Component{
    constructor(){
        super();
    }
    render(){
        return (
          <Row className="Contact-section-main">
              <Col className="wrapper-contact" sm="12" md="4" lg="4">
                  <Row className="contact-head-block">
                      <Col className="contact-head" sm="12" md="12" lg="12">
                          <i className="fa fa-2x fa-address-book addr-icon" aria-hidden="true"></i>
                          <div className="head-section">
                              <p>Contact Support</p>
                          </div>

                      </Col>
                  </Row>
                 <div className="contact-container-block">
                     <Row className="contact-detail-wrapper">
                         <Col className="contact-icon" sm="2" md="2" lg="2">
                             <i className="fa fa-3x fa-volume-control-phone" aria-hidden="true"></i>
                         </Col>
                         <Col className="contact-type" sm="10" md="10" lg="10">
                                <p className="title">Call Now</p>
                                <p className="value">8940970374</p>
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
                             <p className="title">Mailing Address</p>
                             <p className="value">#20, 5th Cross Rd, Kullappa Colony, Jeevan Bhima Nagar, Bengaluru - 560017</p>
                         </Col>
                     </Row>
                 </div>
              </Col>
          </Row>
        );
    }
}

export default Contact;