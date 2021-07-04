import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { StaticImage } from "gatsby-plugin-image";
import { logo, nav, changeMode, modeIcon } from "./Navbar.module.css";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
import rohanLight from "../images/rohan.png";
import rohanDark from "../images/rohanWhite.png"

const NavBar = ({ theme, toggleTheme }) => {

  const lightMode = theme === 'light';

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      className={`navbar ${nav}`}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          alt="Rohan Poojary logo"
          src={lightMode ? rohanLight : rohanDark}
          className={logo}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="#about" style={{ color: lightMode ? 'black': 'white' }}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to="#experience" style={{ color: lightMode ? 'black': 'white' }}>
            Experience
          </Nav.Link>
          <Nav.Link as={Link} to="#projects" style={{ color: lightMode ? 'black': 'white'}}>
            Projects
          </Nav.Link>
          <Nav.Link
            href=""
            target="_blank"
            className="font-weight-medium"
            style={{ color: lightMode ? 'black': 'white' }}
          >
            Resume
          </Nav.Link>
          <button className={changeMode} onClick={() => toggleTheme()}>
            <img
              alt="dark mode"
              src={theme === "light" ? moon : sun}
              className={modeIcon}
            />
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
