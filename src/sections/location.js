import { weddingConfig } from '../config/wedding.js';

export function renderLocation() {
  const container = document.getElementById('section-location');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header">
      <p class="section-tag">DENAH &amp; LOKASI</p>
      <h2 class="section-title">Lokasi Acara</h2>
      <p class="section-desc">Petunjuk menuju tempat pelaksanaan Akad Nikah dan Resepsi Pernikahan.</p>
      <div class="section-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>
    </div>

    <div class="location-grid">
      <!-- Akad Location -->
      <div class="glass-card location-card">
        <div class="location-card-header">
          <span class="location-badge">LOKASI 1</span>
          <h3 class="location-title">Akad Nikah</h3>
        </div>
        <p class="location-venue-name">${weddingConfig.akad.venue}</p>
        <p class="location-address-text">${weddingConfig.akad.address}</p>

        <div class="location-btn-wrapper">
          <a href="${weddingConfig.akad.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" aria-label="Buka Google Maps Akad">
            <span class="btn-icon">🗺️</span>
            <span class="btn-text">BUKA GOOGLE MAPS</span>
          </a>
        </div>
      </div>

      <!-- Reception Location -->
      <div class="glass-card location-card">
        <div class="location-card-header">
          <span class="location-badge cultural-badge">LOKASI 2</span>
          <h3 class="location-title">Resepsi Adat</h3>
        </div>
        <p class="location-venue-name">${weddingConfig.reception.venue}</p>
        <p class="location-address-text">${weddingConfig.reception.address}</p>

        <div class="location-btn-wrapper">
          <a href="${weddingConfig.reception.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" aria-label="Buka Google Maps Resepsi">
            <span class="btn-icon">🗺️</span>
            <span class="btn-text">BUKA GOOGLE MAPS</span>
          </a>
        </div>
      </div>
    </div>
  `;
}
