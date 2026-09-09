import { weddingConfig } from '../config/wedding.js';
import { copyToClipboard } from '../utils/clipboard.js';

export function renderGift() {
  const container = document.getElementById('section-gift');
  if (!container) return;

  container.innerHTML = `
    <div class="gift-container glass-card">
      <div class="section-header">
        <p class="section-tag">TANDA KASIH</p>
        <h2 class="section-title">Wedding Gift</h2>
        <p class="section-desc">
          Doa restu Anda merupakan karunia terindah bagi kami. Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih secara digital, dapat melalui rekening berikut:
        </p>
        <div class="section-divider">
          <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
        </div>
      </div>

      <div class="bank-cards-grid">
        <!-- Primary Bank -->
        <div class="bank-card">
          <div class="bank-card-chip"></div>
          <p class="bank-name">${weddingConfig.gift.bank}</p>
          <p id="acc-num-1" class="bank-acc-num">${weddingConfig.gift.accountNumber}</p>
          <p class="bank-holder">a.n. ${weddingConfig.gift.accountName}</p>

          <button id="btn-copy-acc-1" class="btn-copy" aria-label="Salin Nomor Rekening 1">
            <span class="copy-icon">📋</span>
            <span class="copy-text">SALIN NOMOR REKENING</span>
          </button>
        </div>

        <!-- Secondary Bank (if configured) -->
        ${weddingConfig.gift.bankSecondary ? `
          <div class="bank-card bank-card-secondary">
            <div class="bank-card-chip"></div>
            <p class="bank-name">${weddingConfig.gift.bankSecondary}</p>
            <p id="acc-num-2" class="bank-acc-num">${weddingConfig.gift.accountNumberSecondary}</p>
            <p class="bank-holder">a.n. ${weddingConfig.gift.accountNameSecondary}</p>

            <button id="btn-copy-acc-2" class="btn-copy" aria-label="Salin Nomor Rekening 2">
              <span class="copy-icon">📋</span>
              <span class="copy-text">SALIN NOMOR REKENING</span>
            </button>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  // Attach copy event listeners
  const btnCopy1 = document.getElementById('btn-copy-acc-1');
  if (btnCopy1) {
    btnCopy1.addEventListener('click', () => {
      copyToClipboard(weddingConfig.gift.accountNumber, 'Nomor rekening BSI berhasil disalin');
    });
  }

  const btnCopy2 = document.getElementById('btn-copy-acc-2');
  if (btnCopy2) {
    btnCopy2.addEventListener('click', () => {
      copyToClipboard(weddingConfig.gift.accountNumberSecondary, 'Nomor rekening BCA berhasil disalin');
    });
  }
}
