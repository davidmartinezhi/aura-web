import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";

//Portfolio fotos
import suiza from "../../../../../assets/img/branding/PITT.png";
import ubiquete from "../../../../../assets/img/branding/PITQ.png";
import riegoSolido from "../../../../../assets/img/branding/28 de Junio_Mesa de trabajo 1 (2).jpg";

//Social media logos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook,
  } from "@fortawesome/free-brands-svg-icons";

//logos
import suizaLogo from "../../../../../assets/img/clientes-logos/joyeriaSuiza.jpeg";
import ubiqueteLogo from "../../../../../assets/img/clientes-logos/ubiquete.PNG";
import riegoSolidoLogo from "../../../../../assets/img/clientes-logos/riego-solido.jpg";

export default function PortafolioMarketingHome() {
  return (
    <>
      <Row className="projects-card-body-row">
        <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                  <img
                    className="logo-brand"
                    src={ubiqueteLogo}
                    alt="ubiquete logo"
                  />
                  <h3>Redes Sociales y Marketing Digital</h3>
                  <div className="social-media">
                    {" "}
                    <a
                      href="https://www.instagram.com/ubiquitesoftware/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="brand-card">
                  <Card.Img src={ubiquete} alt="ubiquete" />
                  <Card.ImgOverlay className="text-center"></Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                  <img
                    className="logo-brand"
                    src={suizaLogo}
                    alt="joyeria suiza"
                  />
                  <h3>Redes Sociales y Marketing Digital</h3>
                  <div className="social-media">
                    {" "}
                    <a
                      href="www.facebook.com/SuizaTorreon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                      href="https://www.instagram.com/joyeriasuiza/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="brand-card">
                  <Card.Img src={suiza} alt="joyeria suiza" />
                  <Card.ImgOverlay className="text-center"></Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                  <img
                    className="logo-brand"
                    src={riegoSolidoLogo}
                    alt="riego solido logo"
                  />
                  <h3>Redes Sociales y Marketing Digital</h3>
                  <div className="social-media">
                    {" "}
                    <a
                      href="https://www.instagram.com/riegosolidomx/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="brand-card">
                  <Card.Img src={riegoSolido} alt="riego solido" />
                  <Card.ImgOverlay className="text-center"></Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
}
