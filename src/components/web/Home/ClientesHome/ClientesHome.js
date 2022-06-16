import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


//Logos
import testLogo from "../../../../assets/img/logo/Negro/Aura_Negro.png"
import naoraLogo from "../../../../assets/img/clientes-logos/naroa.png"
import ubiqueteLogo from "../../../../assets/img/clientes-logos/ubiquete.PNG"
import riegoSolidoLogo from "../../../../assets/img/clientes-logos/riego-solido.jpg"
import joyeriaSuizaLogo from "../../../../assets/img/clientes-logos/joyeriaSuiza.jpeg"
import vanttecLogo from "../../../../assets/img/clientes-logos/vanttec.png"
import terniumLogo from "../../../../assets/img/clientes-logos/Ternium_Logo.svg.png"
import './ClientesHome.scss'

export default function ClientesHome() {
  return (
    <Container fluid className="clientes-home" id="clientes">
        <Row className='clientes-home-titulo pt-5'>
          <h1>Clientes</h1>
        </Row>
        <Row>
        <Col xs={12} sm={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={terniumLogo} alt="tec de monterrey logo" />
                {/* <div className="client-card-overlay">
              <Button className='mt-2'><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>   */}
              </Card.Body>
            </Card>
          </Col>
        <Col xs={12} sm={6} md={3}>
            <Card className="client-card">
            
              <Card.Body className="client-card-body">
                
                <img className="client-card-logo" src={naoraLogo} alt="tec de monterrey logo" />
                {/* <div className="client-card-overlay">
              <Button className='mt-2'><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>                */}
              </Card.Body>

            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={joyeriaSuizaLogo} alt="tec de monterrey logo" />
                {/* <div className="client-card-overlay">
              <Button className='mt-2'><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>   */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={vanttecLogo} alt="tec de monterrey logo" />
                {/* <div className="client-card-overlay">
              <Button className='mt-2'><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>   */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={ubiqueteLogo} alt="tec de monterrey logo" />
                {/* <div className="client-card-overlay">
              <Button className='mt-2'><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>   */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Card className="client-card">
              <Card.Body className="client-card-body">
                <img className="client-card-logo" src={riegoSolidoLogo} alt="tec de monterrey logo" />
                {/* <div className="client-card-overlay">
              <Button className='mt-2'><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button>
              </div>   */}
              </Card.Body>
            </Card>
          </Col>

        </Row>
    </Container>
  )
}