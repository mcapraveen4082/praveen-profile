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
                            A person who can develop both client and server software. In addition to mastering HTML and CSS, 
                            I also know how to: Program a browser (like using <b>JavaScript, jQuery, ReactJs, or NextJs</b>) Program a server (like using <b>PHP Laravel, Node, or NestJs</b>)
                        </p>
                    </div>
                </div>
                <div className="block-3">
                    <div className="sticky3">
                        <p className='tech-skills'>

                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParallaxEffect;