import * as THREE from 'three';
import { lerp } from '../utils/animation.js';

export class WorldFog {
  constructor(scene) {
    this.scene = scene;
    
    // Atmospheric Fog
    this.fogColor = new THREE.Color(0xb8d5e5);
    this.scene.fog = new THREE.FogExp2(this.fogColor, 0.025);

    this.colors = {
      morning: new THREE.Color(0xc0d8e8),
      day: new THREE.Color(0xdce7ec),
      sunset: new THREE.Color(0xc97a55)
    };
  }

  update(scrollProgress) {
    const p = Math.max(0, Math.min(1, scrollProgress));

    if (p < 0.4) {
      const t = p / 0.4;
      this.fogColor.lerpColors(this.colors.morning, this.colors.day, t);
      this.scene.fog.density = lerp(0.022, 0.018, t);
    } else if (p < 0.75) {
      const t = (p - 0.4) / 0.35;
      this.fogColor.lerpColors(this.colors.day, this.colors.sunset, t * 0.5);
      this.scene.fog.density = lerp(0.018, 0.024, t);
    } else {
      const t = (p - 0.75) / 0.25;
      this.fogColor.lerpColors(this.colors.day, this.colors.sunset, t);
      this.scene.fog.density = lerp(0.024, 0.032, t);
    }

    this.scene.fog.color.copy(this.fogColor);
  }
}
