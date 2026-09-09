import * as THREE from 'three';

export class WorldWater {
  constructor(scene) {
    this.scene = scene;

    // Water Plane Geometry
    const geometry = new THREE.PlaneGeometry(120, 160, 48, 48);
    geometry.rotateX(-Math.PI / 2);

    // Lake water material with specular shimmer and transparency
    this.material = new THREE.MeshStandardMaterial({
      color: 0x123b4a,
      roughness: 0.15,
      metalness: 0.65,
      transparent: true,
      opacity: 0.88,
      flatShading: false
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.position.set(0, -1.2, 0);
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);

    // Save initial vertex positions for wave calculations
    this.positionAttribute = geometry.attributes.position;
    this.initialY = new Float32Array(this.positionAttribute.count);
    for (let i = 0; i < this.positionAttribute.count; i++) {
      this.initialY[i] = this.positionAttribute.getY(i);
    }
  }

  update(time = 0, scrollProgress = 0) {
    // Animate gentle water waves on Lake Toba
    const count = this.positionAttribute.count;
    const waveSpeed = 1.2;
    
    for (let i = 0; i < count; i++) {
      const u = this.positionAttribute.getX(i);
      const v = this.positionAttribute.getZ(i);
      
      const wave = Math.sin(u * 0.2 + time * waveSpeed) * 0.08 +
                   Math.cos(v * 0.15 + time * (waveSpeed * 0.8)) * 0.06 +
                   Math.sin((u + v) * 0.1 + time * 0.5) * 0.04;
                   
      this.positionAttribute.setY(i, this.initialY[i] + wave);
    }
    
    this.positionAttribute.needsUpdate = true;
    
    // Color shift at sunset
    if (scrollProgress > 0.7) {
      const t = (scrollProgress - 0.7) / 0.3;
      this.material.color.setHex(0x123b4a).lerp(new THREE.Color(0x5c2b20), t * 0.7);
    } else {
      this.material.color.setHex(0x123b4a);
    }
  }
}
