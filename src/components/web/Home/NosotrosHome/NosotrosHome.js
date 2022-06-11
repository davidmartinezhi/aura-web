import React from 'react'
import { Container, Row, Col, Button, Card} from "react-bootstrap";
import testPhoto from "../../../../assets/img/stars.jpg"
import './NosotrosHome.scss'

export default function NosotrosHome() {
  return (
    <Container fluid className="nosotros-home">
        <Row className='nosotros-home-titulo pt-5'>
          <h1>Nosotros</h1>
        </Row>
        <Row>
          <div className="nosotros-home-caption">
          <p className="m-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Button className="mb-3" ><span>Conocer más</span></Button>
          </div>
          </Row>
          <Row className="nosotros-home-stats pt-3">
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
        </Row>
    </Container>
  )
}
