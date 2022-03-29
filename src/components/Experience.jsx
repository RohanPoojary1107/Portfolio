import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  companyImg,
  row,
  companyName,
  jobTitle,
  companyImgCol,
} from "./Experience.module.css";
import Header from "./SectionHeader";
import { EXP_LIST } from "../data";

const MyExperience = ({ data }) => {
  return (
    <div id="experience">
      <Header sectionName="experience" />
      {EXP_LIST.map(({ company, link, title, duration, imgName, desc }) => {
        let image = "";

        if (imgName === "wattpad") {
          image = getImage(data.wattpad.childImageSharp);
        } else if (imgName === "rbc") {
          image = getImage(data.rbc.childImageSharp);
        } else {
          image = getImage(data.icube.childImageSharp);
        }

        return (
          <Row className={`row ${row}`} key={imgName}>
            <Col
              className="align-self-center"
              xs={{ span: 12, order: "last" }}
              sm={10}
              md={{ span: true, order: "first" }}
            >
              <div className={companyName}>
                <a href={link}>{company}</a>
              </div>
              <div className={jobTitle}>
                {title} | {duration}
              </div>
              <ul>
                {desc.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </Col>
            <Col
              className={`col align-self-center ${companyImgCol}`}
              xs={{ span: 12, order: "first" }}
              md={{ span: true, order: "last" }}
            >
              <GatsbyImage
                image={image}
                alt={imgName}
                imgClassName={companyImg}
                aria-hidden
              />
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default function Experience(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          wattpad: file(relativePath: { eq: "wattpad.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          rbc: file(relativePath: { eq: "rbc.png" }) {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          icube: file(relativePath: { eq: "icube.png" }) {
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
      render={(data) => <MyExperience data={data} {...props} />}
    />
  );
}
