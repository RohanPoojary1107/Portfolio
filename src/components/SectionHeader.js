import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({ sectionName }) => {
  return (
    <Row bsPrefix="section-header">
      <Col>
        <span className="section-title">{sectionName}</span>
      </Col>
    </Row>
  );
};

export default Header;
