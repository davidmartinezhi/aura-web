import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Row, Col } from "react-bootstrap";

import './MainBannerParticles.scss'

export default function MainBannerParticles() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Container fluid className="main-banner-p">
    <div className="main-banner-p__dark">
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
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#fff"],
            },
            links: {
              color: [
                "#fff",
                "#87CEEB",
                "#ffff00",
                "#ffa500",
                "#FE9AB6",
                "#90E0F7",
              ],
              //white, sky blue, yellow, orange, pink, blue
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      >

      </Particles>
      </div>


          </Container>

  );
}
