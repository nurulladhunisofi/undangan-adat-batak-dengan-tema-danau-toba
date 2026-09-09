import { lerp, clamp } from '../utils/animation.js';

export class AnimationManager {
  constructor({ scene, camera, lighting, fog, water, particles, environment, parallax }) {
    this.worldScene = scene;
    this.worldCamera = camera;
    this.worldLighting = lighting;
    this.worldFog = fog;
    this.worldWater = water;
    this.worldParticles = particles;
    this.worldEnvironment = environment;
    this.parallax = parallax;

    this.currentScroll = 0;
    this.targetScroll = 0;
    this.scrollProgress = 0;
    this.clock = { start: performance.now() };

    this.isRunning = false;
    this.onScroll = this.onScroll.bind(this);
    this.loop = this.loop.bind(this);

    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.updateScrollTarget();
  }

  updateScrollTarget() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = (document.documentElement.scrollHeight - window.innerHeight) || 1;
    this.targetScroll = clamp(scrollY / maxScroll, 0, 1);
  }

  onScroll() {
    this.updateScrollTarget();
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    requestAnimationFrame(this.loop);
  }

  stop() {
    this.isRunning = false;
  }

  loop(timestamp) {
    if (!this.isRunning) return;

    const time = (timestamp - this.clock.start) * 0.001;

    // Smooth Scroll Progress Interpolation
    this.currentScroll = lerp(this.currentScroll, this.targetScroll, 0.08);
    this.scrollProgress = this.currentScroll;

    // Update Mouse/Touch Parallax
    const mouseParallax = this.parallax.update();

    // Update Three.js World Components
    this.worldCamera.update(this.scrollProgress, mouseParallax);
    this.worldLighting.update(this.scrollProgress, time);
    this.worldFog.update(this.scrollProgress);
    this.worldWater.update(time, this.scrollProgress);
    this.worldParticles.update(time, this.scrollProgress);
    this.worldEnvironment.update(this.scrollProgress, mouseParallax, time);

    // Render Scene
    this.worldScene.render();

    // Update DOM Scroll Elements & Navigation
    this.updateDomElements(this.scrollProgress);

    requestAnimationFrame(this.loop);
  }

  updateDomElements(progress) {
    // Reveal section elements based on scroll intersection
    const sections = document.querySelectorAll('.wedding-section');
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
      if (inView) {
        section.classList.add('visible');
      }
    });

    // Update Navigation Active Node
    const navItems = document.querySelectorAll('.nav-dot');
    const total = navItems.length;
    if (total > 0) {
      const activeIdx = Math.min(Math.floor(progress * total), total - 1);
      navItems.forEach((dot, idx) => {
        if (idx === activeIdx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  dispose() {
    this.stop();
    window.removeEventListener('scroll', this.onScroll);
  }
}
