import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as THREE from 'three';
import Typewriter from 'typewriter-effect';
import './Header.css';

function Stars() {
  const groupRef = useRef();

  useEffect(() => {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 2500;
    const positions = [];

    for (let i = 0; i < starCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        -Math.random() * 100
      );
    }

    starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xE0DAE7,
      size: 0.5,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    groupRef.current.add(stars);
  }, []);

  useFrame(() => {
    groupRef.current.rotation.y += 0.00005;
  });

  return <group ref={groupRef}></group>;
}

function Asteroids() {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.children.forEach((asteroid, index) => {
      asteroid.position.add(asteroid.userData.velocity);
      asteroid.rotation.x += 0.02;
      asteroid.rotation.y += 0.02;

      if (asteroid.position.length() > 100) {
        groupRef.current.remove(asteroid);
      }
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const asteroidGeometry = new THREE.DodecahedronGeometry(Math.random() * 0.5 + 0.2, 0);
      const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0xE0DAE7 });
      const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

      const side = Math.random() > 0.5 ? 1 : -1;
      asteroid.position.x = side * (Math.random() * 30 + 20);
      asteroid.position.y = (Math.random() - 0.5) * 20;
      asteroid.position.z = (Math.random() - 0.5) * 20;

      asteroid.userData.velocity = new THREE.Vector3(
        -side * (Math.random() * 0.05 + 0.02),
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );

      groupRef.current.add(asteroid);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <group ref={groupRef}></group>
  );
}

const Hero = () => {
  return (
    <div className="hero-container">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Stars />
        <Asteroids />
      </Canvas>
      <div className="hero-content">
        <h1>Adam Del grosso</h1>
        <div className="typewriter-text">
          <Typewriter
            options={{
              strings: ['Développeur Front-End.', 'Rédacteur.'],
              autoStart: true,
              loop: true,
              cursor: '|',
              delay: 75,
            }}
          />
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/adam-del-grosso/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="https://github.com/LeFloppa" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="mailto:adamdelgrosso69@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
