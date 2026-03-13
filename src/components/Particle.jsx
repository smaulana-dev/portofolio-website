import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        background: {
          color: "#0f172a", // ensures the background matches your theme
        },
        particles: {
          number: { value: 30 },      // fewer particles for subtlety
          size: { value: 2 },         // smaller dots
          color: { value: "#3b82f6" }, // blue accent
          links: { enable: true, color: "#3b82f6", distance: 100, opacity: 0.2 },
          move: { enable: true, speed: 0.2 }, // slower movement
          opacity: { value: 0.3 },     // subtle visibility
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false }, // no click effect
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // behind content
      }}
    />
  );
};

export default ParticlesBackground;