import { weddingConfig } from '../config/wedding.js';

export function renderClosing() {
  const container = document.getElementById('section-closing');
  if (!container) return;

  container.innerHTML = `
    <div class="closing-content glass-card">
      <div class="card-ornament-top">
        <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
      </div>

      <p class="closing-thanks">
        Terima kasih telah menjadi bagian dari hari bahagia dan perjalanan suci kami.
      </p>

      <div class="closing-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>

      <h2 class="closing-couple-names">
        <span>${weddingConfig.groom.nickname}</span>
        <span class="amp">&amp;</span>
        <span>${weddingConfig.bride.nickname}</span>
      </h2>

      <p class="closing-family-note">
        Keluarga Besar Siregar &amp; Keluarga Besar Nasution
      </p>

      <p class="closing-love-tag">WITH LOVE &amp; GRATITUDE</p>
      
      <div class="closing-footer-note">
        <p>Janji Suci di Tepian Danau Toba &bull; 2026</p>
      </div>
    </div>
  `;
}
