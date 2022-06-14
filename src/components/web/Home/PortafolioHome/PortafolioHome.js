import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import testPhoto from "../../../../assets/img/stars.jpg";
import naroa from "../../../../assets/img/branding/naroa.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

import "./PortafolioHome.scss";

export default function PortafolioHome() {
  return (
    <Container fluid className="portafolio-home" id="portafolio">
      <Row className="portafolio-home-titulo pt-5">
        <h1>Portafolio</h1>
      </Row>
      <Row>
        <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
          <div className="overlay-area">
              <img className="d-block w-75" src={naroa} alt="Naroa" />
            </div>
            <Carousel.Caption>
            <h2 className="p-3">Branding</h2>
            {/* <Button className="m-3"><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="overlay-area">
              <img className="d-block w-75" src={naroa} alt="Naroa" />
            </div>
            <Carousel.Caption>
            <h2 className="p-3">Branding</h2>
            {/* <Button className="m-3"><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="overlay-area">
              <img className="d-block w-75" src={naroa} alt="Naroa" />
            </div>
            <Carousel.Caption>
              <h2 className="p-3">Branding</h2>
              {/* <Button className="m-3"><span>Conocer más</span> <FontAwesomeIcon icon={faArrowRight}/> </Button> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
