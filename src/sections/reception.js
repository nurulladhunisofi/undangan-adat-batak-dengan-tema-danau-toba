import { weddingConfig } from '../config/wedding.js';

export function renderReception() {
  const container = document.getElementById('section-reception');
  if (!container) return;

  container.innerHTML = `
    <div class="event-card-container">
      <div class="glass-card event-card cultural-event-card">
        <div class="card-badge cultural-badge">PESTA UNJUK &amp; SYUKURAN</div>
        
        <div class="event-icon-top">
          <img src="assets/decorative/gorga-divider.svg" alt="Gorga Motif" class="svg-divider-small" />
        </div>

        <h2 class="event-title">${weddingConfig.reception.title}</h2>
        <p class="event-day-date">${weddingConfig.reception.date}</p>
        <p class="event-time"><span class="clock-icon">🕒</span> ${weddingConfig.reception.time}</p>

        <div class="card-gold-divider"></div>

        <div class="event-venue-block">
          <h4 class="venue-name">${weddingConfig.reception.venue}</h4>
          <p class="venue-address">${weddingConfig.reception.address}</p>
        </div>

        <p class="event-cultural-note">
          &ldquo;Horas! Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.&rdquo;
        </p>

        <div class="event-action-wrapper">
          <a href="${weddingConfig.reception.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" aria-label="Lihat Lokasi Resepsi">
            <span class="btn-icon">📍</span>
            <span class="btn-text">LIHAT LOKASI RESEPSI</span>
          </a>
        </div>
      </div>
    </div>
  `;
}
