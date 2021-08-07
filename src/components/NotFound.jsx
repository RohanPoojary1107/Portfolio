import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";
import { column } from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Row>
      <Col className={`col ${column}`}>
        <h1>Page Not Found!</h1>
        <p>Sorry, but the page you were looking for could not be found.</p>
        <Button as={Link} to="/">
          Return Home
        </Button>
      </Col>
    </Row>
  );
};

export default NotFound;
