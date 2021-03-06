import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  logo,
  nav,
  changeMode,
  modeIcon,
  imgWrapper,
  sunRings,
  starTop,
  starBottom,
} from "./Navbar.module.css";
import { useTheme } from "../utilities/theme";

import moon from "../static/images/moon.svg";
import topStar from "../static/images/top-star.svg";
import bottomStar from "../static/images/bottom-star.svg";
import sun from "../static/images/sun.svg";
import sunRing from "../static/images/glow.svg";
import rohanLight from "../static/images/rohan.webp";
import rohanDark from "../static/images/rohanWhite.webp";

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
            >
              Resume
            </Nav.Link>
            <button className={changeMode} onClick={toggleTheme}>
              <div className={imgWrapper}>
                <img
                  alt={`toggle ${theme === "light" ? "dark" : "light"} mode`}
                  src={theme === "light" ? moon : sun}
                  className={modeIcon}
                />
                {!lightMode && (
                  <img className={sunRings} src={sunRing} alt="" />
                )}
                {lightMode && (
                  <>
                    <img className={starTop} src={topStar} alt="" />
                    <img className={starBottom} src={bottomStar} alt="" />
                  </>
                )}
              </div>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
