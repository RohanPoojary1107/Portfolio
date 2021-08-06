import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { logo, nav, changeMode, modeIcon, imgWrapper, sunRings, starTop, starBottom } from "./Navbar.module.css";
import moon from "../images/moon.svg";
import topStar from "../images/top-star.svg";
import bottomStar from "../images/bottom-star.svg";
import sun from "../images/sun.svg";
import sunRing from "../images/glow.svg"
import rohanLight from "../images/rohan.png";
import rohanDark from "../images/rohanWhite.png"


const NavBar = ({ theme, toggleTheme }) => {

  const lightMode = theme === 'light';
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
  }`);

  const resume = data.allFile.edges[0];

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant={theme}
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
            href={resume.node.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-weight-medium"
            style={{ color: lightMode ? 'black': 'white' }}
          >
            Resume
          </Nav.Link>
          <button className={changeMode} onClick={() => toggleTheme()}>
            <div className={imgWrapper}>
              <img
                alt={`toggle ${theme} mode`}
                src={theme === "light" ? moon : sun}
                className={modeIcon}
              />
              {!lightMode && <img className={sunRings} src={sunRing} alt="" />}
              {lightMode && 
              <>
              <img className={starTop} src={topStar} alt="" /> 
              <img className={starBottom} src={bottomStar} alt="" /> 
              </>}
            </div>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
