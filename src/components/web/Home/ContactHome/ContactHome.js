import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";
import './ContactHome.scss'
export default function ContactHome() {
  return (
    <Container fluid className="contacto-home" id="contacto">
      <Row className="contacto-home-titulo pt-5">
        <h1>Contacto</h1>
      </Row>
      <Row className="contact-home-row">
        <Col xs={12} md={6} className="contact-home-row-col">
        <h1>Siguenos</h1>
          <div className="social-media-home">
          
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
          </Col>
          <Col xs={12} md={6}>
          
          <div className="contact-info-home">
          <h1>Contactanos</h1>
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
  )
}
