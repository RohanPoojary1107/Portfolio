import React from "react";
import Header from "./SectionHeader";
import Row from "react-bootstrap/Row";
import { aboutMe } from "./About.module.css";
import Col from "react-bootstrap/Col";

import { ABOUT } from "../data";

const About = () => {
  return (
    <Row id="about">
      <Col xs={12} md={10}>
        <Header sectionName="about me" />
        <p className={aboutMe} dangerouslySetInnerHTML={{ __html: ABOUT }}></p>
      </Col>
    </Row>
  );
};

export default About;
