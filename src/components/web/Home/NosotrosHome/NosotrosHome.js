import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import testPhoto from "../../../../assets/img/stars.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./NosotrosHome.scss";

export default function NosotrosHome() {
  return (
    <Container fluid className="nosotros-home">
      <Row className="nosotros-home-titulo pt-5">
        <h1>Nosotros</h1>
      </Row>
      <Row>
        <div className="nosotros-home-caption">
          <p className="m-3">
            Impulsados por ideas nuevas y atrevidas, con un gran
            conocimiento tecnológico, y experiencia con clientes de alto perfil.
            Siempre siguiendo nuestros valores de confianza, respeto, transparencia y
            coherencia. 
            Proveemos un conglomerado de servicios redondos que cubren todas las
            necesidades de nuestros clientes en esta nueva era digital, al
            brindar soluciones innovadoras y a la medida para desafíos
            específicos de sus negocios y así colaborar con su óptimo
            desarrollo.

          </p>

          {/* <Button className=" mt-3 mb-3">
            <span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight} />{" "}
          </Button> */}
        </div>
      </Row>
      {/* <Row className="nosotros-home-stats pt-3">
          <Col  md={3}>
            <Card className="nosotros-card">
              <Card.Body className="nosotros-card-body">
                <Card.Title>2020</Card.Title>
                <Card.Subtitle>Fundada</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="nosotros-card">
              <Card.Body className="nosotros-card-body">
                <Card.Title>2020</Card.Title>
                <Card.Subtitle>Fundada</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col  md={3}>
            <Card className="nosotros-card">
              <Card.Body className="nosotros-card-body">
                <Card.Title>2020</Card.Title>
                <Card.Subtitle>Fundada</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
    </Container>
  );
}
