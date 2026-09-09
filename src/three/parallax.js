import { lerp } from '../utils/animation.js';

export class ParallaxController {
  constructor() {
    this.mouse = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.smooth = 0.05;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    window.addEventListener('touchmove', this.onTouchMove, { passive: true });
  }

  onMouseMove(e) {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    this.target.x = (e.clientX - halfW) / halfW;
    this.target.y = (e.clientY - halfH) / halfH;
  }

  onTouchMove(e) {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      this.target.x = ((touch.clientX - halfW) / halfW) * 0.5;
      this.target.y = ((touch.clientY - halfH) / halfH) * 0.5;
    }
  }

  update() {
    this.mouse.x = lerp(this.mouse.x, this.target.x, this.smooth);
    this.mouse.y = lerp(this.mouse.y, this.target.y, this.smooth);
    return this.mouse;
  }

  dispose() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('touchmove', this.onTouchMove);
  }
}
