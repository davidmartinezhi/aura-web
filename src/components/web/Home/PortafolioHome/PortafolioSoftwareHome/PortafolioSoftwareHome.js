import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import vanttec from "../../../../../assets/img/branding/vanttecwebpage.png";
import ternium from "../../../../../assets/img/branding/Ternium.png";

export default function PortafolioSoftwareHome() {
  return (
    <>
      <Row className="projects-card-body-row">
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                  <h3>Vanttec</h3>
                  <p>Desarrollo Web para competencias internacionales Roboboat y Robosub.</p>

                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="brand-card">
                  <Card.Img src={vanttec} alt="roboboat" />
                  <Card.ImgOverlay className="text-center"></Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                  <h3>Ternium</h3>
                  <p>Visualización de Gas Metano Mediante Mapas de Calor</p>
                  <p>Mapa de calor con información actualizada en tiempo real y personalizable mediante herramientas de filtros y análisis de datos.
                     Prevenir contingencias en las plantas de producción de acero de Ternium.</p>

                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="brand-card">
                  <Card.Img src={ternium} alt="roboboat" />
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
