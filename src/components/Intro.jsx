import React from "react";
import Typist from "react-typist";
import "./Intro.module.css";
import "./Typist.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { introTitle, shortIntro, row, imgCol } from "./Intro.module.css";

const MyIntro = ({ data, theme }) => {
  const image =
    theme === "light"
      ? getImage(data.rohanColor.childImageSharp)
      : getImage(data.rohanGray.childImageSharp);

  return (
    <Row className={`row ${row}`}>
      <Col
        className="align-self-center"
        xs={{ span: 12, order: "last" }}
        md={{ order: "first" }}
      >
        <Typist avgTypingDelay={120} startDelay={500} className={introTitle}>
          Hey, I'm Rohan.
        </Typist>
        <div className={shortIntro}>
          I'm passionate about making the web more accessible and I enjoy
          pushing myself outside my comfort zone.
        </div>
      </Col>
      <Col
        className={`col ${imgCol}`}
        xs={{ span: 12, order: "first" }}
        md={{ order: "last" }}
      >
        <GatsbyImage image={image} alt="Rohan Poojary" aria-hidden />
      </Col>
    </Row>
  );
};

export default function Intro(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          rohanColor: file(relativePath: { eq: "rohan-color.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          rohanGray: file(relativePath: { eq: "rohan-gray.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      `}
      render={(data) => <MyIntro data={data} {...props} />}
    />
  );
}
