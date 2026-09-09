import { weddingConfig } from '../config/wedding.js';

export function renderCouple() {
  const container = document.getElementById('section-couple');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header">
      <p class="section-tag">PASANGAN MEMPELAI</p>
      <h2 class="section-title">Sang Pengantin</h2>
      <p class="section-desc">
        Dengan memohon ridha dan rahmat Allah SWT, kami menyatukan dua hati dan dua keluarga dalam ikatan pernikahan yang suci.
      </p>
    </div>

    <div class="couple-grid">
      <!-- Groom Card -->
      <div class="glass-card couple-card groom-card">
        <div class="couple-avatar-wrapper">
          <img src="assets/gallery/groom.webp" alt="${weddingConfig.groom.name}" class="couple-avatar" loading="lazy" />
          <div class="avatar-ring"></div>
        </div>
        
        <h3 class="couple-name">${weddingConfig.groom.name}</h3>
        <p class="couple-marga">Marga: ${weddingConfig.groom.marga}</p>
        
        <div class="couple-parents">
          <p class="parent-title">Putra Pertama dari:</p>
          <p class="parent-name">${weddingConfig.groom.father}</p>
          <p class="parent-name">&amp; ${weddingConfig.groom.mother}</p>
        </div>

        <p class="couple-bio">${weddingConfig.groom.bio}</p>
      </div>

      <!-- Center Cultural Symbol -->
      <div class="couple-center-divider">
        <span class="heart-symbol">&amp;</span>
        <div class="vertical-gold-line"></div>
      </div>

      <!-- Bride Card -->
      <div class="glass-card couple-card bride-card">
        <div class="couple-avatar-wrapper">
          <img src="assets/gallery/bride.webp" alt="${weddingConfig.bride.name}" class="couple-avatar" loading="lazy" />
          <div class="avatar-ring"></div>
        </div>
        
        <h3 class="couple-name">${weddingConfig.bride.name}</h3>
        <p class="couple-marga">Marga: ${weddingConfig.bride.marga}</p>
        
        <div class="couple-parents">
          <p class="parent-title">Putri Kedua dari:</p>
          <p class="parent-name">${weddingConfig.bride.father}</p>
          <p class="parent-name">&amp; ${weddingConfig.bride.mother}</p>
        </div>

        <p class="couple-bio">${weddingConfig.bride.bio}</p>
      </div>
    </div>
  `;
}
