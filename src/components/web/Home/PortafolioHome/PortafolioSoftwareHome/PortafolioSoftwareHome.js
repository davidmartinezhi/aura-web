import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import vanttec from "../../../../../assets/img/branding/vanttecwebpage.png";
import ternium from "../../../../../assets/img/branding/Ternium.png";

//logos
import vanttecLogo from "../../../../../assets/img/clientes-logos/vanttec.png";
import terniumLogo from "../../../../../assets/img/clientes-logos/Ternium_Logo.svg.png";
export default function PortafolioSoftwareHome() {
  return (
    <>
      <Row className="projects-card-body-row">
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                <img className="logo-brand" src={vanttecLogo} alt="vantteclogo"/>
                  <h3>Desarrollo Web</h3>
                  <p>Pagina principal de la organización y competidora en competencias internacionales <b>Roboboat</b> y <b>RoboSub</b>.</p>
                  <Button className="pb-3" href={"https://vanttec.com/"} target="_blank">Visitar pagina web</Button>
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
                  <img className="logo-brand" src={terniumLogo} alt="ternium logo"/>
                  <h3>Visualización de Gas Metano Mediante Mapas de Calor.</h3>
                  <p>Mapas de calor actualizados en tiempo real y personalizables mediante herramientas de filtros y análisis de datos.
                     Con el fin de prevenir contingencias en las plantas de producción de acero de Ternium.</p>

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
