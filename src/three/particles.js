import * as THREE from 'three';
import { getDeviceTier } from '../utils/device.js';

export class WorldParticles {
  constructor(scene) {
    this.scene = scene;
    this.tier = getDeviceTier();

    const particleCount = this.tier === 'HIGH' ? 800 : (this.tier === 'MEDIUM' ? 400 : 180);
    this.geometry = new THREE.BufferGeometry();
    
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const goldColor = new THREE.Color(0xffd700);
    const ivoryColor = new THREE.Color(0xf4ebdd);
    const emberColor = new THREE.Color(0xff8c42);

    for (let i = 0; i < particleCount; i++) {
      // Position around camera trajectory
      positions[i * 3 + 0] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = Math.random() * 18 - 1;
      positions[i * 3 + 2] = Math.random() * 32 - 4;

      // Subtle float velocity
      velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.015;
      velocities[i * 3 + 1] = Math.random() * 0.012 + 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;

      // Color variation (glowing gold, warm ivory, sunset ember)
      const mix = Math.random();
      const chosenColor = mix < 0.6 ? goldColor : (mix < 0.85 ? ivoryColor : emberColor);
      colors[i * 3 + 0] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;

      sizes[i] = Math.random() * 4.0 + 1.5;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    this.velocities = velocities;

    // Create custom particle point texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(244, 235, 221, 0.8)');
    grad.addColorStop(0.8, 'rgba(185, 154, 90, 0.2)');
    grad.addColorStop(1, 'rgba(185, 154, 90, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    this.material = new THREE.PointsMaterial({
      size: 0.28,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.points = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.points);
  }

  update(time = 0, scrollProgress = 0) {
    const pos = this.geometry.attributes.position;
    const count = pos.count;

    for (let i = 0; i < count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      y += this.velocities[i * 3 + 1];
      x += Math.sin(time + i) * 0.004;
      z += Math.cos(time + i) * 0.004;

      // Wrap around bounds
      if (y > 18) y = -1;
      if (x > 18) x = -18;
      if (x < -18) x = 18;

      pos.setXYZ(i, x, y, z);
    }

    pos.needsUpdate = true;

    // Opacity shift on sunset
    if (scrollProgress > 0.75) {
      this.material.opacity = 0.95;
      this.material.size = 0.35;
    } else {
      this.material.opacity = 0.8;
      this.material.size = 0.28;
    }
  }
}
