import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container } from "react-bootstrap";

import "./MainBannerParticles.scss";

export default function MainBannerParticles({ children }) {
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
    <>
      <Container fluid className="main-banner-p">
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        height={"100vh"}
        style={{display:"absolute"}}
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
                quantity: 2,
              },
              repulse: {
                distance: 150,
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
                "#000",
                "#fff",
                "#87CEEB",
                "#ffff00",
                "#ffa500",
                "#FE9AB6",
                "#90E0F7",
              ],
              //black, white, sky blue, yellow, orange, pink, blue
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 2,
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
              value: 100,
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
          fullScreen:false,
          zLayers: 100
        }}
      >
       
        
        </Particles>  
      <div className="main-banner-p__dark">
      
      
      {children}
        
      </div>
   
    
      </Container>

    </>
  );
}
