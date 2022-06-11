import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoAuraWhite from "../../../assets/img/logo/Blanco/Aura_Blanco.png";

import "./Footer.scss";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="brand">
          <img className="brand-logo" src={logoAuraWhite} alt="Aura logo" />
        </Col>
      </Row>
      <Row className="footer-row">
        <Col className="footer-row-col">
          {" "}
          <h1>Social Media</h1>
        </Col>
        <Col className="footer-row-col">
          {" "}
          <h1>Newsletter</h1>
        </Col>
      </Row>
    </Container>
  );
}
