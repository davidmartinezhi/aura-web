import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import './PortafolioHome.scss'

export default function PortafolioHome() {
  return (
    <Container fluid className="portafolio-home">
        <Row className='portafolio-home-titulo'>
          <h1>Portafolio</h1>
        </Row>
    </Container>
  )
}