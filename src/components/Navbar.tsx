import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby";

import { Theme, useTheme } from "../utilities/theme";
import ThemeToggleButton from "./ThemeToggleButton";

import { logo, nav } from "./Navbar.module.css";
import rohanLight from "../images/rohan.webp";
import rohanDark from "../images/rohanWhite.webp";

type NavBarProps = {
  resume: string;
};

const NavBar = ({ resume }: NavBarProps) => {
  const [theme] = useTheme();

  const lightMode = theme === Theme.LIGHT;
  const linkStyle = lightMode ? "black" : "white";

  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar
        collapseOnSelect
        expand="sm"
        variant={theme}
        className={`navbar ${nav}`}
      >
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Rohan Poojary logo"
            height="25px"
            width="125px"
            src={lightMode ? rohanLight : rohanDark}
            className={logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="#about" style={{ color: linkStyle }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="#experience" style={{ color: linkStyle }}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="#projects" style={{ color: linkStyle }}>
              Projects
            </Nav.Link>
            <Nav.Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-weight-medium"
              aria-label="Resume"
              style={{ color: linkStyle }}
            >
              Resume
            </Nav.Link>
            <ThemeToggleButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
