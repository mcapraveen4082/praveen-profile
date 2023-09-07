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
                               <p>I'm Praveen Kumar</p>
                               <p>Software Engineer</p>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="block-2">
                    <div className="sticky2">Praveen Kumar Here</div>
                </div>
                <div className="block-3">
                    <div className="sticky3">Lobortis & nostrud</div>
                </div>
            </div>
        );
    }
}

export default ParallaxEffect;