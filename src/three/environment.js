import * as THREE from 'three';
import { lerp } from '../utils/animation.js';

export class WorldEnvironment {
  constructor(scene) {
    this.scene = scene;
    this.loader = new THREE.TextureLoader();
    this.layers = [];

    this.initLayers();
  }

  createLayerPlane(texturePath, width, height, position, options = {}) {
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: options.opacity !== undefined ? options.opacity : 1.0,
      roughness: options.roughness !== undefined ? options.roughness : 0.8,
      metalness: options.metalness !== undefined ? options.metalness : 0.1,
      side: THREE.DoubleSide,
      depthWrite: options.depthWrite !== undefined ? options.depthWrite : false
    });

    const texture = this.loader.load(
      texturePath,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        material.map = tex;
        material.needsUpdate = true;
      },
      undefined,
      (err) => {
        // Fallback to JPG if WebP fails on older WebGL/mobile
        if (texturePath.endsWith('.webp')) {
          const fallbackPath = texturePath.replace('.webp', '.jpg');
          this.loader.load(fallbackPath, (fallbackTex) => {
            fallbackTex.colorSpace = THREE.SRGBColorSpace;
            material.map = fallbackTex;
            material.needsUpdate = true;
          });
        }
      }
    );

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position.x || 0, position.y || 0, position.z || 0);
    if (options.rotation) {
      mesh.rotation.set(options.rotation.x || 0, options.rotation.y || 0, options.rotation.z || 0);
    }
    
    this.scene.add(mesh);

    const layerObj = {
      mesh,
      material,
      initialPos: { ...mesh.position },
      parallaxFactor: options.parallaxFactor || 0.1,
      fadeInProgress: options.fadeInProgress,
      fadeOutProgress: options.fadeOutProgress,
      baseOpacity: options.opacity !== undefined ? options.opacity : 1.0
    };

    this.layers.push(layerObj);
    return layerObj;
  }

  initLayers() {
    // 1. BACKGROUND: Distant Sky & Mountains Panorama (Z: -30 to -20)
    this.skyMorning = this.createLayerPlane('assets/environment/lake-toba.webp', 90, 45, { x: 0, y: 10, z: -32 }, {
      parallaxFactor: 0.02,
      opacity: 1.0
    });

    this.skySunset = this.createLayerPlane('assets/environment/sunset.webp', 90, 45, { x: 0, y: 10, z: -31.5 }, {
      parallaxFactor: 0.02,
      opacity: 0.0
    });

    // 2. MID BACKGROUND: Samosir Mountain Ridges & Rolling Hills (Z: -18 to -10)
    this.mountains = this.createLayerPlane('assets/environment/mountains.webp', 65, 32, { x: 0, y: 6, z: -18 }, {
      parallaxFactor: 0.05,
      opacity: 0.95
    });

    this.hills = this.createLayerPlane('assets/nature/hill.webp', 50, 24, { x: -6, y: 3, z: -12 }, {
      parallaxFactor: 0.08,
      opacity: 0.9
    });

    // 3. MIDGROUND: Batak Houses (Rumah Bolon), Traditional Solu Boat, Wedding Arch (Z: -5 to 12)
    this.batakHouseLeft = this.createLayerPlane('assets/culture/batak-house.webp', 14, 11, { x: -7.5, y: 2.5, z: 2 }, {
      parallaxFactor: 0.18,
      opacity: 0.98
    });

    this.batakHouseRight = this.createLayerPlane('assets/culture/batak-house.webp', 12, 9.5, { x: 8.5, y: 2.0, z: -2 }, {
      parallaxFactor: 0.18,
      opacity: 0.95
    });

    this.soluBoat = this.createLayerPlane('assets/culture/batak-boat.webp', 11, 6.2, { x: -3.5, y: -0.2, z: 8 }, {
      parallaxFactor: 0.15,
      opacity: 0.95
    });

    this.weddingArch = this.createLayerPlane('assets/wedding/floral-decoration.webp', 10, 8, { x: 3.2, y: 2.2, z: 9 }, {
      parallaxFactor: 0.22,
      opacity: 0.95
    });

    // 4. FOREGROUND: Lakeside Stones, Grass, Ambient Decorative Details (Z: 14 to 22)
    this.stoneLeft = this.createLayerPlane('assets/nature/stone.webp', 6.5, 4.5, { x: -6.0, y: -0.4, z: 16 }, {
      parallaxFactor: 0.35,
      opacity: 0.95
    });

    this.grassRight = this.createLayerPlane('assets/nature/tall-grass.webp', 7.5, 5.0, { x: 5.5, y: -0.2, z: 18 }, {
      parallaxFactor: 0.40,
      opacity: 0.9
    });
  }

  update(scrollProgress, mouseParallax = { x: 0, y: 0 }, time = 0) {
    const p = Math.max(0, Math.min(1, scrollProgress));

    // Transition sky from morning to sunset at closing scenes
    if (p > 0.65) {
      const sunsetAlpha = (p - 0.65) / 0.35;
      this.skySunset.material.opacity = lerp(0.0, 1.0, sunsetAlpha);
      this.skyMorning.material.opacity = lerp(1.0, 0.1, sunsetAlpha);
    } else {
      this.skySunset.material.opacity = 0.0;
      this.skyMorning.material.opacity = 1.0;
    }

    // Gentle floating motion on Batak boat
    if (this.soluBoat) {
      this.soluBoat.mesh.position.y = this.soluBoat.initialPos.y + Math.sin(time * 1.5) * 0.08;
      this.soluBoat.mesh.rotation.z = Math.sin(time * 1.2) * 0.015;
    }

    // Parallax translation per layer
    this.layers.forEach((layer) => {
      const factor = layer.parallaxFactor;
      const targetX = layer.initialPos.x + mouseParallax.x * factor * 2.5;
      const targetY = layer.initialPos.y + mouseParallax.y * factor * 1.5;

      layer.mesh.position.x = lerp(layer.mesh.position.x, targetX, 0.08);
      layer.mesh.position.y = lerp(layer.mesh.position.y, targetY, 0.08);
    });
  }
}
