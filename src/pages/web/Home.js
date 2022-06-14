import React from 'react';
import { Row, Col } from "react-bootstrap";
import MainBanner from '../../components/web/MainBanner/MainBanner';
import MainBannerParticles from '../../components/web/MainBannerParticles/MainBannerParticles';
import NosotrosHome from '../../components/web/Home/NosotrosHome/NosotrosHome';
import ServiciosHome from '../../components/web/Home/ServiciosHome/ServiciosHome';
import PortafolioHome from '../../components/web/Home/PortafolioHome/PortafolioHome';
import ClientesHome from '../../components/web/Home/ClientesHome/ClientesHome';
import ContactHome from '../../components/web/Home/ContactHome/ContactHome';
export default function Home() {
  return (
    <>
        {/* Banner Home */}
        <MainBannerParticles>
        <Row>
          <Col xs={1} sm={2} />
          <Col xs={10} sm={8}>
            <h2>
              EVOLUCIONA A LA<br/>  NUEVA ERA DIGITAL
            </h2>
            <h3>
              Digitaliza Tu Negocio Con Nosotros
            </h3>
          </Col>
          <Col xs={1} sm={2} />
        </Row>
        </MainBannerParticles>

        {/* Nosotros */}
        <NosotrosHome/>

        {/* Servicios */}
        <ServiciosHome/>

        {/* Portafolio */}
        <PortafolioHome/>

        {/* Clientes */}
        <ClientesHome />

        {/* Contacto */}
        <ContactHome />
    </>
  )
}
