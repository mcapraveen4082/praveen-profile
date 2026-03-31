/* eslint-disable no-useless-constructor */
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="Head-section-main sticky top-0 z-30 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <Navbar bg="light" expand="lg" className="items-center px-2 py-2 sm:px-3 lg:px-6 lg:py-3">
        <Navbar.Brand href="/" className="text-sm font-bold sm:text-base lg:text-xl">
          Praveen Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto items-center gap-1 pb-2 pt-2 lg:gap-1 lg:pb-0 lg:pt-0">
            <Nav.Link href="/" className="rounded px-2 py-1 text-sm lg:px-3 lg:py-2 lg:text-base">
              Home
            </Nav.Link>
            <Nav.Link href="/jobs" className="rounded px-2 py-1 text-sm lg:px-3 lg:py-2 lg:text-base">
              Jobs
            </Nav.Link>
            <Nav.Link href="/githubprofile" className="rounded px-2 py-1 text-sm lg:px-3 lg:py-2 lg:text-base">
              Github Profile
            </Nav.Link>
            <Nav.Link href="/contactus" className="rounded px-2 py-1 text-sm lg:px-3 lg:py-2 lg:text-base">
              Contact
            </Nav.Link>
            <NavDropdown
              title="Companies"
              id="basic-nav-dropdown"
              className="rounded text-sm lg:px-3 lg:py-2 lg:text-base"
            >
              <NavDropdown.Item href="/company/vyapar">Simply Vyapar Apps Pvt Ltd</NavDropdown.Item>
              <NavDropdown.Item href="/company/licious">Licious</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

