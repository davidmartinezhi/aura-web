import React, { useState } from "react";
import {Container, Offcanvas, Nav, Navbar as NavbarBootstrap } from "react-bootstrap";

//Logo
import logoVanttec from "../../../assets/img/logo/Blanco/Aura_Blanco.png";
import logoVanttecWhite from "../../../assets/img/logo/Blanco/Aura_Blanco.png";

import './Navbar.scss'

function Navbar() {

  const [navbar, setNavBar] = useState(false);
  const [top, setTop] = useState("dark");
  const [logo, setLogo] = useState(logoVanttecWhite)

  const changeBackground = () => {
    if(window.scrollY < 57 && window.innerWidth > 912){
      setNavBar(false);
      setTop("dark");
      setLogo(logoVanttecWhite);
    }else{
      setNavBar(true);
      setTop("light");
      setLogo(logoVanttec);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <Container fluid>
      <NavbarBootstrap
        variant={top}
        fixed="top"
        key={"md"}
        bg={navbar ? "light" : ""}
        expand={"lg"}
        className="mb-0"
      >
        <Container fluid>
          <NavbarBootstrap.Brand href="/">
            <img className="logo-navbar" src={logo} alt="Vanttec logo" />
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <NavbarBootstrap.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <a href="/home">
                  <img
                    className="logo-navbar"
                    src={logoVanttec}
                    alt="Vanttec logo"
                  />
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/nosotros">Sobre Aura</Nav.Link>
                <Nav.Link href="/servicios">Servicios</Nav.Link>
                <Nav.Link href="/portafolio">Portafolio</Nav.Link>
                <Nav.Link href="/clientes">Clientes</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </NavbarBootstrap.Offcanvas>
        </Container>
      </NavbarBootstrap>
    </Container>
  );
}

export default Navbar;