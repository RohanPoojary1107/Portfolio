import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { introTitle, shortIntro, row, imgCol } from "./Intro.module.css";
import { useTheme, Theme } from "../utilities/theme";

import { INTRO } from "../data";

type MyIntroProps = {
  rohanColor: {
    childImageSharp: IGatsbyImageData;
  };
  rohanGray: {
    childImageSharp: IGatsbyImageData;
  };
};

const MyIntro = () => {
  const data: MyIntroProps = useStaticQuery(graphql`
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
  `);

  const image =
    useTheme() === Theme.LIGHT
      ? getImage(data.rohanColor.childImageSharp)
      : getImage(data.rohanGray.childImageSharp);

  if (!image) return null;

  return (
    <Row className={`row ${row}`}>
      <Col
        className="align-self-center"
        xs={{ span: 12, order: "last" }}
        md={{ span: true, order: "first" }}
      >
        <h1 className={introTitle}>{INTRO.title}</h1>
        <div className={shortIntro}>{INTRO.subTitle}</div>
      </Col>
      <Col
        className={`col ${imgCol}`}
        xs={{ span: 12, order: "first" }}
        md={{ span: true, order: "last" }}
      >
        <GatsbyImage image={image} alt="Rohan Poojary" aria-hidden />
      </Col>
    </Row>
  );
};

export default MyIntro;
