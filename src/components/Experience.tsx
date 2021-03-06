import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import {
  companyImg,
  row,
  companyName,
  jobTitle,
  companyImgCol,
} from "./Experience.module.css";
import Header from "./SectionHeader";
import { EXP_LIST } from "../data";

type MyExperienceProps = {
  data: {
    wattpad: {
      childImageSharp: IGatsbyImageData
    },
    rbc: {
      childImageSharp: IGatsbyImageData
    },
    icube: {
      childImageSharp: IGatsbyImageData
    }
  }
}

const MyExperience = ({ data }: MyExperienceProps) => {
  return (
    <div id="experience">
      <Header sectionName="experience" />
      {EXP_LIST.map(({ company, link, title, duration, imgName, desc }) => {
        let image: IGatsbyImageData | undefined;

        if (imgName === "wattpad") {
          image = getImage(data.wattpad.childImageSharp);
        } else if (imgName === "rbc") {
          image = getImage(data.rbc.childImageSharp);
        } else {
          image = getImage(data.icube.childImageSharp);
        }

        if(!image) return null;

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

export default function Experience() {
  return (
    <StaticQuery
      query={graphql`
        query {
          wattpad: file(relativePath: { eq: "wattpad.webp" }) {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          rbc: file(relativePath: { eq: "rbc.webp" }) {
            childImageSharp {
              gatsbyImageData(
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          icube: file(relativePath: { eq: "icube.webp" }) {
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
      render={(data) => <MyExperience data={data} />}
    />
  );
}
