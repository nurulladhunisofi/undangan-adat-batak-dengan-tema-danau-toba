// Styles
import './styles/global.css';
import './styles/typography.css';
import './styles/navigation.css';
import './styles/sections.css';
import './styles/responsive.css';

// Three.js World
import { WorldScene } from './three/scene.js';
import { WorldCamera } from './three/camera.js';
import { WorldLighting } from './three/lighting.js';
import { WorldFog } from './three/fog.js';
import { WorldWater } from './three/water.js';
import { WorldParticles } from './three/particles.js';
import { WorldEnvironment } from './three/environment.js';
import { ParallaxController } from './three/parallax.js';
import { AnimationManager } from './three/animation.js';

// DOM Sections
import { renderOpening } from './sections/opening.js';
import { renderQuote } from './sections/quote.js';
import { renderCouple } from './sections/couple.js';
import { renderCulture } from './sections/culture.js';
import { renderStory } from './sections/story.js';
import { renderAkad } from './sections/akad.js';
import { renderReception } from './sections/reception.js';
import { renderCulturalJourney } from './sections/culturalJourney.js';
import { renderGallery } from './sections/gallery.js';
import { renderCountdown } from './sections/countdown.js';
import { renderLocation } from './sections/location.js';
import { renderRSVP } from './sections/rsvp.js';
import { renderGift } from './sections/gift.js';
import { renderClosing } from './sections/closing.js';

// Music
import { initMusic } from './music/youtube.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render all UI sections
  renderOpening();
  renderQuote();
  renderCouple();
  renderCulture();
  renderStory();
  renderAkad();
  renderReception();
  renderCulturalJourney();
  renderGallery();
  renderCountdown();
  renderLocation();
  renderRSVP();
  renderGift();
  renderClosing();

  // 2. Initialize Music toggle handler
  initMusic();

  // 3. Initialize Three.js Fullscreen Scene
  const canvas = document.getElementById('webgl-canvas');
  const worldScene = new WorldScene(canvas);
  const worldCamera = new WorldCamera();
  const worldLighting = new WorldLighting(worldScene.scene);
  const worldFog = new WorldFog(worldScene.scene);
  const worldWater = new WorldWater(worldScene.scene);
  const worldParticles = new WorldParticles(worldScene.scene);
  const worldEnvironment = new WorldEnvironment(worldScene.scene);
  const parallax = new ParallaxController();

  worldScene.camera = worldCamera.camera;

  const animationManager = new AnimationManager({
    scene: worldScene,
    camera: worldCamera,
    lighting: worldLighting,
    fog: worldFog,
    water: worldWater,
    particles: worldParticles,
    environment: worldEnvironment,
    parallax: parallax
  });

  animationManager.start();

  // 4. Preloader Simulation & Entrance
  simulateLoading(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
    }
  });
});

function simulateLoading(onComplete) {
  const percentEl = document.getElementById('preloader-percent');
  let current = 0;

  const interval = setInterval(() => {
    current += Math.floor(Math.random() * 15) + 5;
    if (current >= 100) {
      current = 100;
      if (percentEl) percentEl.textContent = '100%';
      clearInterval(interval);
      setTimeout(onComplete, 400);
    } else {
      if (percentEl) percentEl.textContent = `${current}%`;
    }
  }, 50);
}
