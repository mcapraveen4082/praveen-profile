/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';


class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return (
          <div className="Head-section-main">
              <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">Praveen@info</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/githubprofile">Github Profile</Nav.Link>
                          <Nav.Link href="/contactus">Contact</Nav.Link>
                          <NavDropdown title="Companies" id="basic-nav-dropdown">
                              <NavDropdown.Item href="/company/vyapar">Simply Vyapar Apps Pvt Ltd</NavDropdown.Item>
                              <NavDropdown.Item href="/company/licious">Licious</NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
        );
    }
}

export default Header;