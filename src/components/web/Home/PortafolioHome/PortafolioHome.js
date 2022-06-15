import React, {useState} from "react";
import { Container, Row, Col, Carousel, Button, Card, Nav } from "react-bootstrap";
import {CSSTransition, SwitchTransition} from 'react-transition-group';
//Components
import PortafolioBrandingHome from "./PortafolioBrandingHome/PortafolioBrandingHome";
import PortafolioMarketingHome from "./PortafolioMarketingHome/PortafolioMarketingHome";
import PortafolioSoftwareHome from "./PortafolioSoftwareHome/PortafolioSoftwareHome";

import "./PortafolioHome.scss";

export default function PortafolioHome() {
  const [serviceToShow, setServiceToShow] = useState("1");
  return (
    <Container fluid className="portafolio-home" id="portafolio">
      <Row className="portafolio-home-titulo pt-5">
        <h1>Portafolio</h1>
      </Row>
      <Row>
          <Card
            className="projects-card"
            style={{ backgroundColor: "transparent" }}
          >
            <Card.Header>
              <Nav
                variant="pills"
                justify
                defaultActiveKey={serviceToShow}
                activeKey={serviceToShow}
                onSelect={(selectedKey) => {
                  setServiceToShow(selectedKey);
                }}
              >
                <Nav.Item className="project-item">
                  <Nav.Link eventKey={1}>Branding</Nav.Link>
                </Nav.Item>
                <Nav.Item className="project-item">
                  <Nav.Link eventKey={2}>Marketing Digital</Nav.Link>
                </Nav.Item>
                <Nav.Item className="project-item">
                  <Nav.Link eventKey={3}>Desarrollo de Software</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body className="projects-card-body">
            <SwitchTransition mode={"out-in"}>
            <CSSTransition
            key={serviceToShow}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="my-node"
          >
    
              
              {serviceToShow === "1" ? (
                <PortafolioBrandingHome/>
              ) : serviceToShow === "2" ? (
                <PortafolioMarketingHome/>
              ) : (
                <PortafolioSoftwareHome/>
              )}
              
              </CSSTransition>
              </SwitchTransition>
            </Card.Body>
          </Card>
        </Row>
      </Container>
  );
}



function RoboSubCard() {
  return (
    <Row className="vehicules-card-row">
      <h1>Coming Soon...</h1>
    </Row>
  );
}

function DroneCard() {
  return (
    <Row className="vehicules-card-row">
    <h1>Coming Soon...</h1>
  </Row>
  );
}
function SDV() {
  return (
    <Row className="vehicules-card-row">
    <h1>Coming Soon...</h1>
  </Row>
  );
}
