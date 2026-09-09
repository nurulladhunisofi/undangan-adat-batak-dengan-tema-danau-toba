import * as THREE from 'three';
import { isMobile } from '../utils/device.js';
import { lerp } from '../utils/animation.js';

export class WorldCamera {
  constructor() {
    const fov = isMobile() ? 65 : 50;
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 1000);
    
    // Initial camera position
    this.camera.position.set(0, 1.5, 24);
    this.targetLookAt = new THREE.Vector3(0, 1.0, 0);
    this.currentLookAt = new THREE.Vector3(0, 1.0, 0);
    this.camera.lookAt(this.currentLookAt);

    // Dynamic Waypoints across scroll progress [0.00 to 1.00]
    this.waypoints = [
      { p: 0.00, pos: [0, 1.6, 24.0], look: [0, 1.2, 0] },     // Scene 01: Opening
      { p: 0.08, pos: [0.3, 1.8, 21.0], look: [0, 1.3, 0] },   // Scene 02: Ayat Suci
      { p: 0.16, pos: [-0.6, 1.4, 18.0], look: [-0.3, 1.2, 0] }, // Scene 03: Couple
      { p: 0.24, pos: [0.8, 1.7, 15.5], look: [0.4, 1.4, 0] },  // Scene 04: Culture
      { p: 0.32, pos: [-0.5, 1.3, 13.0], look: [-0.2, 1.1, 0] },// Scene 05: Our Story
      { p: 0.40, pos: [0.0, 1.5, 10.5], look: [0, 1.3, 0] },   // Scene 06: Akad Nikah
      { p: 0.48, pos: [0.7, 1.2, 8.5], look: [0.3, 1.1, 0] },  // Scene 07: Resepsi Adat
      { p: 0.56, pos: [-0.4, 1.6, 7.0], look: [-0.1, 1.4, 0] },// Scene 08: Cultural Journey
      { p: 0.64, pos: [0.5, 1.3, 6.0], look: [0.2, 1.2, 0] },  // Scene 09: Gallery
      { p: 0.72, pos: [-0.3, 1.7, 5.2], look: [0, 1.5, 0] },   // Scene 10: Countdown
      { p: 0.80, pos: [0.4, 1.4, 4.5], look: [0.1, 1.2, 0] },  // Scene 11: Location
      { p: 0.88, pos: [-0.2, 1.5, 3.8], look: [0, 1.3, 0] },   // Scene 12: RSVP
      { p: 0.94, pos: [0.3, 1.3, 3.2], look: [0.1, 1.2, 0] },  // Scene 13: Wedding Gift
      { p: 1.00, pos: [0.0, 1.8, 2.5], look: [0, 1.6, -10] }   // Scene 14: Closing Sunset
    ];
  }

  update(scrollProgress, mouseParallax = { x: 0, y: 0 }) {
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

    // Find bounding keyframes
    let prev = this.waypoints[0];
    let next = this.waypoints[this.waypoints.length - 1];

    for (let i = 0; i < this.waypoints.length - 1; i++) {
      if (clampedProgress >= this.waypoints[i].p && clampedProgress <= this.waypoints[i + 1].p) {
        prev = this.waypoints[i];
        next = this.waypoints[i + 1];
        break;
      }
    }

    const segmentProgress = (clampedProgress - prev.p) / (next.p - prev.p || 1);
    const ease = segmentProgress * segmentProgress * (3 - 2 * segmentProgress); // Smoothstep

    const targetX = lerp(prev.pos[0], next.pos[0], ease) + mouseParallax.x * 0.4;
    const targetY = lerp(prev.pos[1], next.pos[1], ease) - mouseParallax.y * 0.3;
    const targetZ = lerp(prev.pos[2], next.pos[2], ease);

    this.camera.position.x = lerp(this.camera.position.x, targetX, 0.08);
    this.camera.position.y = lerp(this.camera.position.y, targetY, 0.08);
    this.camera.position.z = lerp(this.camera.position.z, targetZ, 0.08);

    const lookX = lerp(prev.look[0], next.look[0], ease) + mouseParallax.x * 0.2;
    const lookY = lerp(prev.look[1], next.look[1], ease) - mouseParallax.y * 0.15;
    const lookZ = lerp(prev.look[2], next.look[2], ease);

    this.currentLookAt.x = lerp(this.currentLookAt.x, lookX, 0.08);
    this.currentLookAt.y = lerp(this.currentLookAt.y, lookY, 0.08);
    this.currentLookAt.z = lerp(this.currentLookAt.z, lookZ, 0.08);

    this.camera.lookAt(this.currentLookAt);
  }
}
