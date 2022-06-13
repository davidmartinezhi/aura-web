import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import testPhoto from "../../../../assets/img/stars.jpg";
import brandingPhoto from "../../../../assets/img/jpg/branding.jpg";
import brandingPhoto2 from "../../../../assets/img/jpg/branding2.jpg";
import marketingPhoto from "../../../../assets/img/jpg/marketing.jpg";
import webPhoto from "../../../../assets/img/jpg/webdev.jpg";
import softwarePhoto from "../../../../assets/img/jpg/software.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import "./ServiciosHome.scss";

export default function ServiciosHome() {
  return (
    <Container fluid className="servicios-home">
      <Row className="servicios-home-titulo pt-5">
        <h1>Servicios</h1>
      </Row>
      <Row className="servicios-home-servicio">
      <Col sm={5} lg={3}>
          <Card >
            <Card.Img variant="top" src={brandingPhoto2} />
            <Card.Body>
              <Card.Title><h3>Branding</h3></Card.Title>
              <Card.Text>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
              </Card.Text>
              <div className="more-btn">
              <Button className='mt-2'><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              
              </div>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} lg={3}>
          <Card >
            <Card.Img variant="top" src={marketingPhoto} />
            <Card.Body>
              <Card.Title><h3>Márketing Digital</h3></Card.Title>
              <Card.Text>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
              </Card.Text>
              <div className="more-btn">
              <Button><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} lg={3}>
          <Card >
            <Card.Img variant="top" src={webPhoto} />
            <Card.Body>
              <Card.Title><h3>Aplicaciones Web</h3></Card.Title>
              <Card.Text>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
              </Card.Text>
              <div className="more-btn">
              <Button><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={5} lg={3}>
          <Card>
            <Card.Img variant="top" src={softwarePhoto} />
            <Card.Body>
              <Card.Title><h3>Desarrollo de Software</h3></Card.Title>
              <Card.Text>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
              </Card.Text>
              <div className="more-btn">
              <Button><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>
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
