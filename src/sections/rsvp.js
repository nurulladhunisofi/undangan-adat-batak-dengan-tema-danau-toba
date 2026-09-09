import { weddingConfig } from '../config/wedding.js';

export function renderRSVP() {
  const container = document.getElementById('section-rsvp');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-card rsvp-card">
      <div class="section-header">
        <p class="section-tag">KONFIRMASI KEHADIRAN</p>
        <h2 class="section-title">RSVP</h2>
        <p class="section-desc">Mohon konfirmasikan kehadiran Anda untuk membantu kelancaran acara pernikahan kami.</p>
        <div class="section-divider">
          <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
        </div>
      </div>

      <form id="rsvp-form" class="rsvp-form">
        <div class="form-group">
          <label for="rsvp-name" class="form-label">Nama Lengkap</label>
          <input type="text" id="rsvp-name" class="form-input" placeholder="Masukkan nama lengkap Anda" required />
        </div>

        <div class="form-group">
          <label class="form-label">Konfirmasi Kehadiran</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="rsvp-attendance" value="Hadir" checked />
              <span class="radio-custom"></span>
              <span class="radio-text">Saya Akan Hadir</span>
            </label>
            <label class="radio-label">
              <input type="radio" name="rsvp-attendance" value="Tidak Hadir" />
              <span class="radio-custom"></span>
              <span class="radio-text">Maaf, Tidak Bisa Hadir</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="rsvp-message" class="form-label">Ucapan &amp; Doa Restu</label>
          <textarea id="rsvp-message" class="form-textarea" rows="4" placeholder="Tuliskan ucapan dan doa terbaik untuk kedua mempelai..."></textarea>
        </div>

        <div class="form-submit-wrapper">
          <button type="submit" class="btn-primary" aria-label="Kirim Konfirmasi via WhatsApp">
            <span class="btn-icon">💬</span>
            <span class="btn-text">KIRIM VIA WHATSAPP</span>
          </button>
        </div>
      </form>
    </div>
  `;

  // Attach submit handler
  const form = document.getElementById('rsvp-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('rsvp-name').value.trim();
      const attendance = document.querySelector('input[name="rsvp-attendance"]:checked')?.value || 'Hadir';
      const message = document.getElementById('rsvp-message').value.trim() || '-';

      if (!name) return;

      const groom = weddingConfig.groom.nickname;
      const bride = weddingConfig.bride.nickname;
      const phone = weddingConfig.rsvp.whatsapp;

      const text = `Halo, saya ${name}.\n\nKonfirmasi kehadiran untuk pernikahan ${groom} & ${bride}.\n\nKehadiran: ${attendance}\n\nUcapan:\n${message}`;
      const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;

      window.open(waUrl, '_blank');
    });
  }
}
