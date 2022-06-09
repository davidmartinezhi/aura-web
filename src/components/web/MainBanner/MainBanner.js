import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import './MainBanner.scss'

export default function MainBanner() {
  return (
      
    <Container fluid className="main-banner">
      <div className="main-banner__dark">
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <h2>
              Aprender nuevas <br /> tecnologías web y mobiles
            </h2>
            <h3>
              A través de cursos practicos y actualizados, creados por <br />
              profesionales con años de experiencia.
            </h3>
          </Col>
          <Col xs={2} />
        </Row>
      </div>
    </Container>
  )
}
