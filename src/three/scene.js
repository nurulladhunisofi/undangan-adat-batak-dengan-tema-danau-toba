import * as THREE from 'three';
import { getDeviceTier } from '../utils/device.js';

export class WorldScene {
  constructor(canvas) {
    this.canvas = canvas;
    this.tier = getDeviceTier();
    
    // Create Three.js Scene
    this.scene = new THREE.Scene();
    
    // Create Renderer
    const maxDPR = this.tier === 'HIGH' ? Math.min(window.devicePixelRatio, 2) : 1;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: this.tier !== 'LOW',
      alpha: true,
      powerPreference: 'high-performance'
    });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(maxDPR);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Window Resize Binding
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer.setSize(width, height);
    if (this.camera) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }

  render() {
    if (this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  dispose() {
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
  }
}
