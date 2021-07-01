import React from "react";
import Typist from "react-typist";
import "./Intro.module.css";
import "./Typist.css";
import { StaticImage } from "gatsby-plugin-image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Intro = () => {
  return (
     <Row>
        <Col className="align-self-center" xs={{span: 12, order: "last"}} md={{order: "first"}}>
            <Typist avgTypingDelay={120}>Hey, I'm Rohan.</Typist>
            <div className="short-intro">
            I'm passionate about making the web more accessbile and I enjoy
            pushing myself outside the comfort zone.
            </div>
        </Col>
        <Col xs={{span: 12, order: "first"}} md={{order: "last"}}>
            <StaticImage
            alt="Rohan Poojary smiling"
            src="../images/main-color.png"
            loading="eager"
            />
        </Col>
     </Row>
  );
};

export default Intro;
