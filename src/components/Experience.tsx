import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  companyImg,
  row,
  companyName,
  jobTitle,
  companyImgCol,
} from "./Experience.module.css";
import Header from "./SectionHeader";
import { EXP_LIST } from "../data";
import { useExperienceImage } from "../hooks/useExperienceImage";

const Experience = () => {
  const images = useExperienceImage();

  return (
    <div id="experience">
      <Header sectionName="experience" />
      {EXP_LIST.map(({ company, link, title, duration, imgName, desc }) => (
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
              image={images[`${imgName}`]}
              alt={imgName}
              imgClassName={companyImg}
              aria-hidden
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Experience;
