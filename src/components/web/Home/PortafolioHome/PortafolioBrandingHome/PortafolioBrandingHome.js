import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import naora from "../../../../../assets/img/branding/naroa.png";

export default function PortafolioBrandingHome() {
  return (
    <>
      <Row className="projects-card-body-row">
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
            <Row className="brands-card-row">
              <Col xs={12} lg={6} className="brand-data">
                <Row className="brand-data-stats">
                  <h4>Nombre Proyecto</h4>
                  <ul>
                    <li>
                      <span className="brand-data-stats-year-2020">
                        Posible elemento
                      </span>{" "}
                      1
                    </li>
                    <li>
                      <span className="brand-data-stats-year-2020">
                        Posible elemento
                      </span>{" "}
                      2
                    </li>
                    <li>
                      <span className="brand-data-stats-year-2020">
                        Posible elemento
                      </span>{" "}
                      3
                    </li>
                  </ul>
                </Row>
              </Col>
              <Col xs={12} lg={6}>
                <Card className="brand-card">
                  <Card.Img src={naora} alt="roboboat" />
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
