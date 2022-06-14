import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoAuraWhite from "../../../assets/img/logo/Blanco/Aura_Blanco.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";

import Newsletter from "../Newsletter/Newsletter";

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
          <h1>Newsletter</h1>
          <Newsletter />
        </Col>
        <Col className="footer-row-col">
          <h1>Contáctanos</h1>
          <div className="social-media">
            {" "}
            <a
              href="https://www.facebook.com/auraconsultoriamx"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/aura_consultoria"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="contact-info">
            {" "}
            <a
              href="mailto:auraconsultoriayservicios@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>auraconsultoriayservicios@gmail.com</span>
            </a>
            <a
              href="tel:+528711169694"
              target="_blank"
              rel="noreferrer"
            >
              <span>+52 871 116 9694</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
