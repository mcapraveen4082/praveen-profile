import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../App.css';


class Footer extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="Footer-section-main">
                <footer className="page-footer font-small">

                    <div className="container text-center text-md-left">

                        <Row className="text-center">
                            <Col md={4} className="mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4"><i className="fa fa-lg fa-phone" aria-hidden="true"></i>&nbsp; &nbsp; Call</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Nav.Link href="#!">Mob : 8940970374</Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="#!">Mob : 8840415576</Nav.Link>
                                    </li>
                                </ul>

                            </Col>

                            <Col md={4} className="mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4"><i className="fa fa-lg fa-envelope-o" aria-hidden="true"></i>&nbsp; &nbsp; Contact</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Nav.Link href="#!">mca.praveen4082@gmail.com</Nav.Link>
                                    </li>
                                </ul>

                            </Col>


                            <Col md={4} className="mx-auto">

                                <h5 className="font-weight-bold text-uppercase mt-3 mb-4"><i className="fa fa-lg fa-comments-o" aria-hidden="true"></i>&nbsp; &nbsp; Follow Me</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Nav.Link href="https://www.linkedin.com/in/praveen-kumar-76aaba117" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i>&nbsp; LinkedIn</Nav.Link>
                                    </li>
                                    <li>
                                        <Nav.Link href="https://github.com/mcapraveen4082" target="_blank"><i className="fa fa-lg fa-github" aria-hidden="true"></i>&nbsp; Github</Nav.Link>
                                    </li>
                                </ul>

                            </Col>

                        </Row>

                    </div>

                    <div className="footer-copyright text-center py-3">© 2018 Copyright: &nbsp;&nbsp;
                        <a href="https://mdbootstrap.com/education/bootstrap/"> mca.praveen4082@gmail.com</a>
                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;