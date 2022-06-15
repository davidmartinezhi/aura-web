import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import testPhoto from "../../../../assets/img/stars.jpg";
import consultingPhoto from "../../../../assets/img/jpg/consultory.jpg";
import brandingPhoto2 from "../../../../assets/img/jpg/branding.jpg";
import marketingPhoto from "../../../../assets/img/jpg/marketing2.jpg";
import webPhoto from "../../../../assets/img/jpg/webdev.jpg";
import softwarePhoto from "../../../../assets/img/jpg/software.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ServiciosHome.scss";

export default function ServiciosHome() {
  return (
    <Container fluid className="servicios-home" id="servicios">
      <Row className="servicios-home-titulo pt-5">
        <h1>Servicios</h1>
      </Row>
      <Row className="servicios-home-servicio">
        <Col sm={5} xl={3}>
          <Card>
            <Card.Img variant="top" src={consultingPhoto} />
            <Card.Body>
              <Card.Title>
                <h3>Consultoría</h3>
              </Card.Title>
              <Card.Text>
                <p>
                  Comprometidos con encontrar{" "}
                  <b>Las Soluciones Específicas Que Tu Negocio Necesita</b>.
                  Generamos estrategias que buscan generar mejores rendimientos
                  para tu empresa, utilizando los servicios digitales que
                  ofrecemos.
                </p>
              </Card.Text>
              {/* <div className="more-btn">
              <Button><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div> */}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} xl={3}>
          <Card>
            <Card.Img variant="top" src={brandingPhoto2} />
            <Card.Body>
              <Card.Title>
                <h3>Branding</h3>
              </Card.Title>
              <Card.Text>
                <p>
                  Encontramos la identidad única de tu empresa para de esta
                  manera generar <b>Valor y Rentabilidad</b> a tu marca y nos
                  encargamos de todo el proceso. Incluyendo proceso creativo y
                  trámites de registro e identidad empresarial.
                </p>
              </Card.Text>
              {/* <div className="more-btn">
              <Button><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              
              </div> */}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} xl={3}>
          <Card>
            <Card.Img variant="top" src={marketingPhoto} />
            <Card.Body>
              <Card.Title>
                <h3>Marketing Digital</h3>
              </Card.Title>
              <Card.Text>
                <p>
                  Aplicamos estrategias de comercialización llevadas a cabo en
                  los medios digitales.
                  <br />
                  Generamos estrategias específicas para cada uno de nuestros
                  clientes, ofreciendo así; <b>Ideas Que Rompen Redes</b>.
                </p>
              </Card.Text>
              {/* <div className="more-btn">
              <Button><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div> */}
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} xl={3}>
          <Card>
            <Card.Img variant="top" src={webPhoto} />
            <Card.Body>
              <Card.Title>
                <h3>Desarrollo de Software</h3>
              </Card.Title>
              <Card.Text>
                <p>
                  Desarrollo integral de código para{" "}
                  <b>Crear, Actualizar y/o Optimizar</b> el corazón informativo
                  de tu negocio. Desarrollamos lo que tu negocio necesite;
                  Incluyendo desarrollo de bases de datos, aplicaciones web,
                  aplicaciones móviles y más.
                </p>
              </Card.Text>
              {/* <div className="more-btn">
              <Button><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* 
      <Row className="servicios-home-servicio">
      <Col className="p-3">
            <h2>Branding</h2>
            <p className="m-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col></Col>
      </Row>

      <Row className="servicios-home-servicio">

        <Col></Col>
        <Col className="p-3">
            <h2>Márketing digital</h2>
            <p className="m-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>
      <Row className="servicios-home-servicio">
      <Col className="p-3">
            <h2>Desarrollo Web y Aplicaciones</h2>
            <p className="m-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col></Col>
      </Row>
      
      <Row className="servicios-home-servicio">

        <Col></Col>
        <Col className="p-3">
            <h2>Software a la medida</h2>
            <p className="m-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row> */}
    </Container>
  );
}
