import React from "react";
import ParticleConfig from "./config/particle-config"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    

    return (
        // <Particles params={ParticleConfig}></Particles>
        <Particles init={particlesInit} options={
            ParticleConfig
          } />
    
    );
}
