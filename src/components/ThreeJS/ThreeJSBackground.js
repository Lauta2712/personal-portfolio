import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = () => {
  useEffect(() => {
    // Configuración de la escena
    const scene = new THREE.Scene();
    
    // Configuración de la cámara
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Configuración del renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Configuración de la geometría y el material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    
    // Añadir el cubo a la escena
    scene.add(cube);

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotar el cubo
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Renderizar la escena
      renderer.render(scene, camera);
    };

    // Lanzar la animación
    animate();

    // Limpiar al desmontar el componente
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // No renderizar nada en el DOM directamente
};

export default ThreeJSBackground;