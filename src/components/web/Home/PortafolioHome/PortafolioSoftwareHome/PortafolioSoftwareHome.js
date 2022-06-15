import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import vanttec from "../../../../../assets/img/branding/vanttecwebpage.png";
import ternium from "../../../../../assets/img/branding/Ternium.png";
import "./PortafolioSoftwareHome.scss";

export default function PortafolioSoftwareHome() {
  return (
      <Row>
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                  <h2>Vanttec</h2>
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
                  <h2>Ternium</h2>
                  <p>bla bla bla.</p>

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

  );
}
