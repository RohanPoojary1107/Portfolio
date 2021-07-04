import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import react from "../images/react.svg";
import { github, code, twitter, linkedin, mail } from "../icons.js";
import {
  socialIcons,
  row,
  credits,
  reactIcon,
  madeBy,
  socials,
  mailIcon,
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="31.499"
            viewBox="0 0 31.5 31.499"
            className={socialIcons}
            dangerouslySetInnerHTML={{ __html: linkedin }}
          />
        </a>
        <a
          href="https://github.com/RohanPoojary1107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33.75"
            height="27.001"
            viewBox="0 0 33.75 27.001"
            className={socialIcons}
            dangerouslySetInnerHTML={{ __html: github }}
          />
        </a>
        <a href="mailto:rohanpoojary10@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.178"
            height="27"
            viewBox="0 0 34.178 27"
            className={`${socialIcons} ${mailIcon}`}
            dangerouslySetInnerHTML={{ __html: mail }}
          />
        </a>
        <a
          href="https://twitter.com/Rohan_1107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="29.239"
            viewBox="0 0 36 29.239"
            className={socialIcons}
            dangerouslySetInnerHTML={{ __html: twitter }}
          />
        </a>
      </Col>
      <Col xs={12} sm={6} className={`col ${credits}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.004"
          height="35.997"
          viewBox="0 0 45.004 35.997"
          className={reactIcon}
          dangerouslySetInnerHTML={{ __html: code }}
        />
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
