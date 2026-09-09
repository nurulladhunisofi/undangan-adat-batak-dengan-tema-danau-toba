import { weddingConfig } from '../config/wedding.js';

export function renderCulture() {
  const container = document.getElementById('section-culture');
  if (!container) return;

  container.innerHTML = `
    <div class="culture-container">
      <div class="section-header">
        <p class="section-tag">${weddingConfig.culture.title}</p>
        <h2 class="section-title">${weddingConfig.culture.subtitle}</h2>
        <div class="section-divider">
          <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
        </div>
      </div>

      <div class="culture-content-grid">
        <div class="culture-text-block glass-card">
          <p class="culture-lead">${weddingConfig.culture.description}</p>
          <blockquote class="culture-quote">&ldquo;${weddingConfig.culture.quote}&rdquo;</blockquote>
        </div>

        <div class="culture-features-grid">
          <!-- Feature 1: Gorga -->
          <div class="culture-feature-card glass-card">
            <div class="feature-img-wrapper">
              <img src="assets/culture/batak-gorga.webp" alt="Gorga Batak" class="feature-img" loading="lazy" />
            </div>
            <h4 class="feature-title">Gorga Batak</h4>
            <p class="feature-text">Ukiran sakral penuh filosofi perlindungan (Singa-singa), kemakmuran (Boraspati), dan keindahan hidup yang bermartabat.</p>
          </div>

          <!-- Feature 2: Ulos -->
          <div class="culture-feature-card glass-card">
            <div class="feature-img-wrapper">
              <img src="assets/culture/ulos-pattern.webp" alt="Ulos Batak" class="feature-img" loading="lazy" />
            </div>
            <h4 class="feature-title">Ulos Hela &amp; Sadum</h4>
            <p class="feature-text">Simbol kehangatan cinta kasih, restu tulus orang tua, dan ikatan kekeluargaan yang tak lekang oleh waktu.</p>
          </div>

          <!-- Feature 3: Rumah Bolon -->
          <div class="culture-feature-card glass-card">
            <div class="feature-img-wrapper">
              <img src="assets/culture/batak-house.webp" alt="Rumah Bolon" class="feature-img" loading="lazy" />
            </div>
            <h4 class="feature-title">Rumah Bolon</h4>
            <p class="feature-text">Arsitektur megah peninggalan leluhur yang berdiri kokoh di tepian Danau Toba sebagai lambang persatuan dan keharmonisan.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
