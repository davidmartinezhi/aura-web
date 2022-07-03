import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import naora from "../../../../../assets/img/branding/naroa.png";
import naoraLogo from "../../../../../assets/img/clientes-logos/naroaColor.png";

export default function PortafolioBrandingHome() {
  return (
    <>
      <Row className="projects-card-body-row">
        <Carousel variant="dark" indicators={false} controls={false}>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                <img className="logo-brand" src={naoraLogo} alt="naora logo"/>
                  <h3>Branding de Marca</h3>
                  <p>Diseño de Identidad Corporativa de la mano con el cliente.</p>
                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="brand-card">
                  <Card.Img src={naora} alt="naora" />
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
