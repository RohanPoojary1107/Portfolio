import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./SectionHeader";
import { aboutMe } from "./About.module.css";
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
