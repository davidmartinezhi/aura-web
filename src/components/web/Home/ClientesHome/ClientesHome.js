import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import testLogo from "../../../../assets/img/logo/Negro/Aura_Negro.png"
import './ClientesHome.scss'

export default function ClientesHome() {
  return (
    <Container fluid className="clientes-home">
        <Row className='clientes-home-titulo pt-5'>
          <h1>Clientes</h1>
        </Row>
        <Row>
        <Col xs={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={testLogo} alt="tec de monterrey logo" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={testLogo} alt="tec de monterrey logo" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={testLogo} alt="tec de monterrey logo" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={testLogo} alt="tec de monterrey logo" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={testLogo} alt="tec de monterrey logo" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={testLogo} alt="tec de monterrey logo" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  )
}