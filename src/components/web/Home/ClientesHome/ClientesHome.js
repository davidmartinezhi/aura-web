import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import './ClientesHome.scss'

export default function ClientesHome() {
  return (
    <Container fluid className="clientes-home">
        <Row className='clientes-home-titulo'>
          <h1>Clientes</h1>
        </Row>
    </Container>
  )
}