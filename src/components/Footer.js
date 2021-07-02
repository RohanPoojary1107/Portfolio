import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import twitter from "../images/twitter.svg";
import mail from "../images/mail.svg";
import react from "../images/react.svg";
import code from "../images/code.svg";
import {
  socialIcons,
  row,
  credits,
  reactIcon,
  madeBy,
  socials
} from "./Footer.module.css";

const Footer = () => {
  return (
    <Row className={`row ${row}`}>
      <Col xs={12} sm={6} className={`col ${socials}`}>
        <a
          href="https://www.linkedin.com/in/rohanpoojary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className={socialIcons} />
        </a>
        <a
          href="https://github.com/RohanPoojary1107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" className={socialIcons} />
        </a>
        <a
          href="mailto:rohanpoojary10@gmail.com"
        >
          <img src={mail} alt="mail" className={socialIcons} />
        </a>
        <a
          href="https://twitter.com/Rohan_1107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" className={socialIcons} />
        </a>
      </Col>
      <Col xs={12} sm={6} className={`col ${credits}`}>
        <img src={code} alt="developed" className={reactIcon}/>
        <span className={madeBy}>by Rohan Poojary using</span>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={react} alt="react" className={reactIcon} />
        </a>
      </Col>
    </Row>
  );
};

export default Footer;
