import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import react from "../static/react.svg";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { github, code, twitter, linkedin, mail } from "../icons";
import {
  socialIcons,
  row,
  credits,
  reactIcon,
  madeBy,
  socials,
  mailIcon,
  linkedIn,
} from "./Footer.module.css";

const Footer = () => {
  return (
    <Row className={`row ${row}`}>
      <Col xs={12} sm={6} className={`col ${socials}`}>
        <OutboundLink
          href="https://www.linkedin.com/in/rohanpoojary/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="31.499"
            viewBox="0 0 31.5 31.499"
            className={`${socialIcons} ${linkedIn}`}
            dangerouslySetInnerHTML={{ __html: linkedin }}
            aria-hidden
          />
        </OutboundLink>
        <OutboundLink
          href="https://github.com/RohanPoojary1107"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33.75"
            height="27.001"
            viewBox="0 0 33.75 27.001"
            className={socialIcons}
            dangerouslySetInnerHTML={{ __html: github }}
            aria-hidden
          />
        </OutboundLink>
        <OutboundLink href="mailto:rohanpoojary10@gmail.com" aria-label="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.178"
            height="27"
            viewBox="0 0 34.178 27"
            className={`${socialIcons} ${mailIcon}`}
            dangerouslySetInnerHTML={{ __html: mail }}
            aria-hidden
          />
        </OutboundLink>
        <OutboundLink
          href="https://twitter.com/Rohan_1107"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="29.239"
            viewBox="0 0 36 29.239"
            className={socialIcons}
            dangerouslySetInnerHTML={{ __html: twitter }}
            aria-hidden
          />
        </OutboundLink>
      </Col>
      <Col xs={12} sm={6} className={`col ${credits}`}>
        <div className="visually-hidden">
          Developed by Rohan Poojary using React
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45.004"
          height="35.997"
          viewBox="0 0 45.004 35.997"
          className={reactIcon}
          dangerouslySetInnerHTML={{ __html: code }}
          aria-hidden
        />
        <span className={madeBy} aria-hidden>
          by Rohan using
        </span>
        <OutboundLink
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React"
        >
          <img src={react} alt="react" className={reactIcon} />
        </OutboundLink>
      </Col>
    </Row>
  );
};

export default Footer;
