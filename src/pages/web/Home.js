import React from 'react';
import { Row, Col } from "react-bootstrap";
import MainBanner from '../../components/web/MainBanner/MainBanner';
import MainBannerParticles from '../../components/web/MainBannerParticles/MainBannerParticles';
import NosotrosHome from '../../components/web/Home/NosotrosHome/NosotrosHome';

export default function Home() {
  return (
    <>
        {/* Banner Home */}
        <MainBannerParticles>
        <Row>
          <Col xs={1} sm={2} />
          <Col xs={10} sm={8}>
            <h2>
              Consultoría y <br/>Servicios Digitales
            </h2>
            <h3>
              Haremos Lo Que Sea Por Tu Negocio
            </h3>
          </Col>
          <Col xs={1} sm={2} />
        </Row>
        </MainBannerParticles>

        {/* Nosotros */}
        <NosotrosHome/>

        {/* Servicios */}

        {/* Portafolio */}

        {/* Clientes */}

        {/* Contacto */}
    </>
  )
}
