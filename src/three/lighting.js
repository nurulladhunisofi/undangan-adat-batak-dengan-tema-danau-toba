import * as THREE from 'three';
import { lerp } from '../utils/animation.js';

export class WorldLighting {
  constructor(scene) {
    this.scene = scene;

    // Ambient Light
    this.ambientLight = new THREE.AmbientLight(0xddeef8, 1.2);
    this.scene.add(this.ambientLight);

    // Hemisphere Light (Sky vs Ground reflection)
    this.hemiLight = new THREE.HemisphereLight(0x89c2d9, 0x24382c, 0.8);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // Main Directional Sun Light
    this.dirLight = new THREE.DirectionalLight(0xfff3d6, 1.5);
    this.dirLight.position.set(20, 40, 30);
    this.scene.add(this.dirLight);

    // Warm Lantern Point Lights (Heritage glow)
    this.pointLight1 = new THREE.PointLight(0xff9933, 2.0, 25);
    this.pointLight1.position.set(-4, 3, 10);
    this.scene.add(this.pointLight1);

    this.pointLight2 = new THREE.PointLight(0xffb042, 2.0, 25);
    this.pointLight2.position.set(4, 3, 5);
    this.scene.add(this.pointLight2);

    // Colors for transitions
    this.colors = {
      morningSky: new THREE.Color(0xddeef8),
      morningSun: new THREE.Color(0xfff3d6),
      weddingSky: new THREE.Color(0xffe6c2),
      weddingSun: new THREE.Color(0xffcc66),
      sunsetSky: new THREE.Color(0xff7744),
      sunsetSun: new THREE.Color(0xff4422)
    };
  }

  update(scrollProgress, time = 0) {
    const p = Math.max(0, Math.min(1, scrollProgress));
    
    // Subtle lantern flicker
    const flicker1 = 1.8 + Math.sin(time * 4) * 0.2 + Math.sin(time * 9) * 0.1;
    const flicker2 = 1.8 + Math.cos(time * 3.5) * 0.2 + Math.cos(time * 7) * 0.1;
    this.pointLight1.intensity = flicker1;
    this.pointLight2.intensity = flicker2;

    if (p < 0.4) {
      // Morning -> Golden Wedding
      const t = p / 0.4;
      this.ambientLight.color.lerpColors(this.colors.morningSky, this.colors.weddingSky, t);
      this.dirLight.color.lerpColors(this.colors.morningSun, this.colors.weddingSun, t);
      this.ambientLight.intensity = lerp(1.2, 1.4, t);
    } else if (p < 0.8) {
      // Golden Wedding Midday
      const t = (p - 0.4) / 0.4;
      this.ambientLight.color.lerpColors(this.colors.weddingSky, this.colors.weddingSky, t);
      this.dirLight.color.lerpColors(this.colors.weddingSun, this.colors.sunsetSun, t);
      this.ambientLight.intensity = lerp(1.4, 1.2, t);
    } else {
      // Sunset Closing
      const t = (p - 0.8) / 0.2;
      this.ambientLight.color.lerpColors(this.colors.weddingSky, this.colors.sunsetSky, t);
      this.dirLight.color.lerpColors(this.colors.weddingSun, this.colors.sunsetSun, t);
      this.ambientLight.intensity = lerp(1.2, 0.9, t);
      this.dirLight.intensity = lerp(1.5, 2.2, t);
    }
  }
}
