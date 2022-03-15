import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";
import {
  companyImg,
  row,
  companyName,
  jobTitle,
  companyImgCol,
} from "./Experience.module.css";
import Header from "./SectionHeader";

const jobList = [
  {
    company: "Wattpad",
    link: "https://www.wattpad.com",
    title: "Associate Engineer",
    duration: "May 2021 - Present",
    imgName: "wattpad",
    desc: [
      "Develop a fully responsive web application using React at massive scale (more than 2 billion daily requests and 90+ million users).",
      "Collaborate with product, design and senior engineers to build new experiences for users.",
    ],
  },
  {
    company: "ICUBE UTM",
    link: "https://icubeutm.ca/",
    title: "Software Developer",
    duration: "Sept 2020 - Feb 2021",
    imgName: "icube",
    desc: [
      "Develop responsive websites for clients using HTML, CSS, JavaScript and MySQL.",
      "Create wordpress plugins using PHP and JavaScript to speed up project implementation.",
      "Implemented websites by following accessibility and Search Engine Optimization (SEO) guidelines.",
    ],
  },
  {
    company: "Royal Bank of Canada",
    link: "https://www.rbcroyalbank.com/personal.html",
    title: "Quality Engineer Intern",
    duration: "May 2020 - Aug 2020",
    imgName: "rbc",
    desc: [
      "Worked on the Client Cards team to automate UI Testing, authoring 350+ test cases, highest by an intern in the team.",
      "Developed automation scripts in Python with Selenium, increasing automated test coverage by 48%.",
      "Developed understandable, reliable and maintainable test suites in collaboration with the QA team and executed tests using CI/CD Tools like Jenkins.",
    ],
  },
];

const MyExperience = ({ data }) => {
  return (
    <div id="experience">
      <Header sectionName="experience" />
      {jobList.map(({ company, link, title, duration, imgName, desc }) => {
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
