import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useStaticQuery, graphql } from "gatsby";

import { useTheme } from "../utilities/theme";
import ThemeToggleButton from "./ThemeToggleButton";

import { logo, nav } from "./Navbar.module.css";
import rohanLight from "../images/rohan.webp";
import rohanDark from "../images/rohanWhite.webp";

type NavBarProps = {
  toggleTheme: () => void;
};

const NavBar = ({ toggleTheme }: NavBarProps) => {
  const theme = useTheme();
  const lightMode = theme === "light";

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const resume = data.allFile.edges[0];

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
            <Nav.Link
              as={Link}
              to="#about"
              style={{ color: lightMode ? "black" : "white" }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#experience"
              style={{ color: lightMode ? "black" : "white" }}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="#projects"
              style={{ color: lightMode ? "black" : "white" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href={resume.node.publicURL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-weight-medium"
              style={{ color: lightMode ? "black" : "white" }}
              aria-label="Resume"
            >
              Resume
            </Nav.Link>
            <ThemeToggleButton onClick={toggleTheme} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
