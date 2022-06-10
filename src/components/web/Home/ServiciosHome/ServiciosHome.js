import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ServiciosHome.scss";

export default function ServiciosHome() {
  return (
    <Container fluid className="servicios-home">
      <Row className="servicios-home-titulo pt-5 pb-5">
        <h1>Servicios</h1>
      </Row>

      {/* Branding */}
      <Row className="servicios-home-servicio">
      <Col className="p-3">
            <h2>Branding</h2>
            <p className="m-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col></Col>
      </Row>

      {/* Márketing digital */}
      <Row className="servicios-home-servicio">

        <Col></Col>
        <Col className="p-3">
            <h2>Márketing digital</h2>
            <p className="m-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>
      {/* Desarrollo Web */}
      <Row className="servicios-home-servicio">
      <Col className="p-3">
            <h2>Desarrollo Web y Aplicaciones</h2>
            <p className="m-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col></Col>
      </Row>
      {/* Desarrollo de Software */}
      <Row className="servicios-home-servicio">

        <Col></Col>
        <Col className="p-3">
            <h2>Software a la medida</h2>
            <p className="m-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>
    </Container>
  );
}
