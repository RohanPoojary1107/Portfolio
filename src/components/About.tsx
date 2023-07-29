import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Header from "./SectionHeader";
import { btn } from "./About.module.css";
import { ABOUT } from "../data";
import { Theme, useTheme } from "../utilities/theme";

const About = ({ resume }: { resume: string }) => {
  const [theme] = useTheme();
  const btnVariant = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

  return (
    <Row id="about">
      <Col xs={12} md={10}>
        <Header sectionName="about me" />
        <p dangerouslySetInnerHTML={{ __html: ABOUT }}></p>
        <Button href={resume} className={btn} variant={`outline-${btnVariant}`}>
          Check out my resume!
        </Button>
      </Col>
    </Row>
  );
};

export default About;
