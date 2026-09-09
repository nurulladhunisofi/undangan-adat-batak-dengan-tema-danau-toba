export function renderGallery() {
  const container = document.getElementById('section-gallery');
  if (!container) return;

  const photos = [
    { src: 'assets/gallery/photo-01.webp', title: 'Puncak Bukit Holbung Samosir', desc: 'Menatap masa depan bersama di ketinggian Danau Toba' },
    { src: 'assets/gallery/photo-02.webp', title: 'Huta Siallagan', desc: 'Menjunjung adat istiadat dan kearifan leluhur Batak' },
    { src: 'assets/gallery/photo-03.webp', title: 'Senja di Tepian Danau', desc: 'Ketenangan dan kehangatan dalam setiap detik perjalanan' },
    { src: 'assets/gallery/photo-04.webp', title: 'Perahu Solu Tradisional', desc: 'Berlayar menyusuri riak danau nan jernih' },
    { src: 'assets/gallery/photo-05.webp', title: 'Lembah Bakkara', desc: 'Hamparan hijau yang menyejukkan hati' },
    { src: 'assets/gallery/photo-06.webp', title: 'Bunga Restu & Ulos', desc: 'Rangkaian doa dan lambang perlindungan keluarga' },
    { src: 'assets/gallery/photo-07.webp', title: 'Tenun Ulos Sadum', desc: 'Sentuhan benang emas yang sarat makna kemuliaan' },
    { src: 'assets/gallery/photo-08.webp', title: 'Gugusan Pegunungan Samosir', desc: 'Saksi bisu janji suci ikatan cinta kami' }
  ];

  let currentPhotoIndex = 0;

  const cardsHtml = photos.map((photo, i) => `
    <div class="gallery-card glass-card" data-index="${i}" tabindex="0" role="button" aria-label="Lihat foto ${photo.title}">
      <div class="gallery-img-container">
        <img src="${photo.src}" alt="${photo.title}" class="gallery-img" loading="lazy" />
        <div class="gallery-overlay-hover">
          <span class="view-icon">🔍</span>
          <p class="gallery-hover-title">${photo.title}</p>
        </div>
      </div>
      <div class="gallery-card-footer">
        <span class="gallery-num">0${i + 1}</span>
        <span class="gallery-caption">${photo.title}</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="section-header">
      <p class="section-tag">GALERI MEMORI</p>
      <h2 class="section-title">Dokumentasi Cinta</h2>
      <p class="section-desc">Momen-momen indah yang terukir manis di sepanjang lanskap megah Danau Toba.</p>
      <div class="section-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>
    </div>

    <div class="gallery-grid">
      ${cardsHtml}
    </div>

    <!-- Enhanced Responsive Lightbox Modal -->
    <div id="gallery-lightbox" class="lightbox-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="lightbox-dialog glass-card">
        <!-- Top Controls -->
        <div class="lightbox-header">
          <span id="lightbox-counter" class="lightbox-counter">01 / 08</span>
          <button id="lightbox-close-btn" class="lightbox-close-btn" aria-label="Tutup Galeri">✕</button>
        </div>

        <!-- Image & Nav Buttons -->
        <div class="lightbox-body">
          <button id="lightbox-prev-btn" class="lightbox-nav-btn prev" aria-label="Foto Sebelumnya">&#10094;</button>
          
          <div class="lightbox-img-wrapper">
            <img id="lightbox-img" src="" alt="Preview Foto Galeri" />
          </div>

          <button id="lightbox-next-btn" class="lightbox-nav-btn next" aria-label="Foto Selanjutnya">&#10095;</button>
        </div>

        <!-- Footer Info -->
        <div class="lightbox-footer">
          <h3 id="lightbox-title" class="lightbox-title"></h3>
          <p id="lightbox-desc" class="lightbox-desc"></p>
        </div>
      </div>
    </div>
  `;

  // Attach Lightbox event handlers
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  function showPhoto(idx) {
    if (idx < 0) idx = photos.length - 1;
    if (idx >= photos.length) idx = 0;
    currentPhotoIndex = idx;

    const photo = photos[currentPhotoIndex];
    lightboxImg.src = photo.src;
    lightboxTitle.textContent = photo.title;
    lightboxDesc.textContent = photo.desc;
    lightboxCounter.textContent = `0${currentPhotoIndex + 1} / 0${photos.length}`;
  }

  function openLightbox(idx) {
    showPhoto(idx);
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-card').forEach((card) => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openLightbox(idx);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPhoto(currentPhotoIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showPhoto(currentPhotoIndex + 1); });

  // Backdrop click to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPhoto(currentPhotoIndex - 1);
    if (e.key === 'ArrowRight') showPhoto(currentPhotoIndex + 1);
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        // Swiped Left -> Next
        showPhoto(currentPhotoIndex + 1);
      } else {
        // Swiped Right -> Prev
        showPhoto(currentPhotoIndex - 1);
      }
    }
  }
}
