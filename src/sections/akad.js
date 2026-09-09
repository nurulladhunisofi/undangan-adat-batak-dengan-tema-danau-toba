import { weddingConfig } from '../config/wedding.js';

export function renderAkad() {
  const container = document.getElementById('section-akad');
  if (!container) return;

  container.innerHTML = `
    <div class="event-card-container">
      <div class="glass-card event-card sacred-card">
        <div class="card-badge">PROSESI SAKRAL</div>
        
        <div class="event-icon-top">
          <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
        </div>

        <h2 class="event-title">${weddingConfig.akad.title}</h2>
        <p class="event-day-date">${weddingConfig.akad.date}</p>
        <p class="event-time"><span class="clock-icon">🕒</span> ${weddingConfig.akad.time}</p>

        <div class="card-gold-divider"></div>

        <div class="event-venue-block">
          <h4 class="venue-name">${weddingConfig.akad.venue}</h4>
          <p class="venue-address">${weddingConfig.akad.address}</p>
        </div>

        <div class="event-action-wrapper">
          <a href="${weddingConfig.akad.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary btn-outline" aria-label="Lihat Lokasi Akad">
            <span class="btn-icon">📍</span>
            <span class="btn-text">LIHAT LOKASI AKAD</span>
          </a>
        </div>
      </div>
    </div>
  `;
}
