import { weddingConfig } from '../config/wedding.js';

let countdownInterval = null;

export function renderCountdown() {
  const container = document.getElementById('section-countdown');
  if (!container) return;

  container.innerHTML = `
    <div class="countdown-card glass-card">
      <div class="card-ornament-top">
        <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
      </div>

      <p class="section-tag">MENUJU HARI BAHAGIA</p>
      <h2 class="section-title countdown-heading">Hitung Mundur</h2>
      <p class="countdown-date-badge">${weddingConfig.wedding.day}, ${formatDateDisplay(weddingConfig.wedding.date)}</p>

      <div class="countdown-timer-grid">
        <div class="timer-box">
          <span id="cd-days" class="timer-num">00</span>
          <span class="timer-label">HARI</span>
        </div>
        <div class="timer-colon">:</div>
        <div class="timer-box">
          <span id="cd-hours" class="timer-num">00</span>
          <span class="timer-label">JAM</span>
        </div>
        <div class="timer-colon">:</div>
        <div class="timer-box">
          <span id="cd-minutes" class="timer-num">00</span>
          <span class="timer-label">MENIT</span>
        </div>
        <div class="timer-colon">:</div>
        <div class="timer-box">
          <span id="cd-seconds" class="timer-num">00</span>
          <span class="timer-label">DETIK</span>
        </div>
      </div>

      <div class="calendar-btn-wrapper">
        <a id="btn-add-calendar" href="#" target="_blank" rel="noopener noreferrer" class="btn-primary btn-outline" aria-label="Simpan ke Google Calendar">
          <span class="btn-icon">📅</span>
          <span class="btn-text">SIMPAN DI GOOGLE CALENDAR</span>
        </a>
      </div>
    </div>
  `;

  setupCountdownTicker();
  setupCalendarLink();
}

function setupCountdownTicker() {
  if (countdownInterval) clearInterval(countdownInterval);

  const targetDate = new Date(`${weddingConfig.wedding.date}T08:30:00+07:00`).getTime();

  function updateTicker() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTicker();
  countdownInterval = setInterval(updateTicker, 1000);
}

function setupCalendarLink() {
  const calBtn = document.getElementById('btn-add-calendar');
  if (!calBtn) return;

  const title = encodeURIComponent(`Pernikahan ${weddingConfig.groom.nickname} & ${weddingConfig.bride.nickname}`);
  const details = encodeURIComponent(`Pernikahan Adat Batak Islam ${weddingConfig.groom.name} & ${weddingConfig.bride.name} di Danau Toba`);
  const location = encodeURIComponent(`${weddingConfig.akad.venue}, ${weddingConfig.akad.address}`);
  
  // Format YYYYMMDDTHHmmssZ
  const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261024T013000Z/20261024T100000Z&details=${details}&location=${location}`;
  calBtn.href = calUrl;
}

function formatDateDisplay(dateStr) {
  const [year, month, day] = dateStr.split('-');
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${year}`;
}
