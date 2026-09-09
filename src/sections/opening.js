import { weddingConfig } from '../config/wedding.js';
import { startMusicOnOpen } from '../music/youtube.js';

export function renderOpening() {
  const container = document.getElementById('section-opening');
  if (!container) return;

  container.innerHTML = `
    <div class="opening-content">
      <div class="opening-ornament">
        <img src="assets/decorative/gorga-divider.svg" alt="Batak Gorga Divider" class="svg-divider" />
      </div>
      
      <p class="opening-subtitle">THE WEDDING OF</p>
      
      <h1 class="opening-title">
        <span class="groom-title">${weddingConfig.groom.nickname}</span>
        <span class="ampersand">&amp;</span>
        <span class="bride-title">${weddingConfig.bride.nickname}</span>
      </h1>
      
      <p class="opening-date">${weddingConfig.wedding.day}, ${formatDateDisplay(weddingConfig.wedding.date)}</p>
      <p class="opening-location">Danau Toba, Sumatera Utara</p>

      <div class="opening-btn-wrapper">
        <button id="btn-open-invitation" class="btn-primary" aria-label="Buka Undangan">
          <span class="btn-icon">💌</span>
          <span class="btn-text">BUKA UNDANGAN</span>
        </button>
      </div>

      <div class="scroll-hint">
        <span class="mouse-icon"></span>
        <span class="hint-text">GULIR KE BAWAH</span>
      </div>
    </div>
  `;

  // Attach button event
  const openBtn = document.getElementById('btn-open-invitation');
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      // Start music
      startMusicOnOpen();

      // Smooth scroll to next section
      const nextSection = document.getElementById('section-quote');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Hide opening button wrapper with fade
      openBtn.classList.add('opened');
    });
  }
}

function formatDateDisplay(dateStr) {
  const [year, month, day] = dateStr.split('-');
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}
