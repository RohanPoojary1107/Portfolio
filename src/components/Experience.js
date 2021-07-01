import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StaticImage } from "gatsby-plugin-image";
import { companyImg } from "./Experience.module.css"
import Header from "./SectionHeader";

const Experience = () => {
  return (
    <div className="experience">
      <Header sectionName={`<experience />`} />
      <Row>
        <Col xs={{ span: 12, order: "last" }} md={{ order: "first" }}>
          <div>Wattpad</div>
          <div>Associate Engineer</div>
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
        <Col xs={{ span: 12, order: "first" }} md={{ order: "last" }}>
          <StaticImage alt="Icube utm" src="../images/wattpad.png" imgClassName={companyImg}/>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: "last" }} md={{ order: "first" }}>
          <div>ICUBE UTM</div>
          <div>Software Developer</div>
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
        <Col xs={{ span: 12, order: "first" }} md={{ order: "last" }}>
          <StaticImage alt="Icube utm" src="../images/icube.png" imgClassName={companyImg}/>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, order: "last" }} md={{ order: "first" }}>
          <div>Royal Bank of Canada (RBC)</div>
          <div>Quality Engineer Intern</div>
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
              Automated Mainframe application testing by implementing automated
              scripts using Java, LeanFT and Cucumber.
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
