import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import { companyImg, row, companyName, jobTitle } from "./Experience.module.css"
import Header from "./SectionHeader";

const Experience = () => {
  return (
    <div id="experience">
      <Header sectionName={`<experience />`} />
      <Row className={`row ${row}`}>
        <Col className="align-self-center" xs={{ span: 12, order: "last" }} md={{ order: "first" }}>
          <div className={companyName}>Wattpad</div>
          <div className={jobTitle}>Associate Engineer | May 2021 - Present</div>
          <ul>
            <li>
              Develop responsive websites for clients using HTML, CSS, PHP and
              MySQL.
            </li>
            <li>
              Create wordpress plugins using PHP and JavaScript to speed up
              project implementation.
            </li>
            <li>
              Implemented website by following technical Search Engine
              Optimization (SEO) guidelines.
            </li>
          </ul>
        </Col>
        <Col className="align-self-center" xs={{ span: 12, order: "first" }} md={{ order: "last" }}>
          <StaticImage alt="Icube utm" src="../images/wattpad.png" imgClassName={companyImg}/>
        </Col>
      </Row>
      <Row className={`row ${row}`}>
        <Col className="align-self-center" xs={{ span: 12, order: "last" }} md={{ order: "first" }}>
          <div className={companyName}>ICUBE UTM</div>
          <div className={jobTitle}>Software Developer | Sept 2020 - Feb 2021</div>
          <ul>
            <li>
              Develop responsive websites for clients using HTML, CSS, PHP and
              MySQL.
            </li>
            <li>
              Create wordpress plugins using PHP and JavaScript to speed up
              project implementation.
            </li>
            <li>
              Implemented website by following technical Search Engine
              Optimization (SEO) guidelines.
            </li>
          </ul>
        </Col>
        <Col className="align-self-center" xs={{ span: 12, order: "first" }} md={{ order: "last" }}>
          <StaticImage alt="Icube utm" src="../images/icube.png" imgClassName={companyImg}/>
        </Col>
      </Row>
      <Row className={`row ${row}`}>
        <Col className="align-self-center" xs={{ span: 12, order: "last" }} md={{ order: "first" }}>
          <div className={companyName}>Royal Bank of Canada (RBC)</div>
          <div className={jobTitle}>Quality Engineer Intern | May 2020 - Aug 2020</div>
          <ul>
            <li>
              Worked on the Client Cards team to automate UI Testing, authoring
              350+ test cases, highest by an intern in the team.
            </li>
            <li>
              Developed automation scripts in Python with Selenium, increasing
              automated test coverage by 48%.
            </li>
            <li>
              Developed understandable, reliable and maintainable test suites in
              collaboration with the QA team and executed tests using CI/CD
              Tools like Jenkins.
            </li>
            <li>Check out my recommendation here!</li>
          </ul>
        </Col>
        <Col xs={{ span: 12, order: "first" }} md={{ order: "last" }}>
          <StaticImage alt="Icube utm" src="../images/rbc.png" imgClassName={companyImg}/>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
