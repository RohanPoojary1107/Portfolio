import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { StaticImage } from 'gatsby-plugin-image'
import { logo, nav } from './Navbar.module.css'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" variant="light" className={`navbar ${nav}`}>
      <Container>
        <Navbar.Brand
          className="font-weight-medium gradient-text"
          as={Link}
          to="/"
        >
          <StaticImage
            alt="Rohan Poojary logo"
            src="../images/rohan.png"
            className={logo}
            loading="eager"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="#about" style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="#experience" style={{ color: "black" }}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/fun" style={{ color: "black" }}>
              Projects
            </Nav.Link>
            <Nav.Link
              href=""
              target="_blank"
              className="font-weight-medium"
              style={{ color: "black" }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
