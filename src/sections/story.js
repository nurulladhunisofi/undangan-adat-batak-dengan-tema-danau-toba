import { weddingConfig } from '../config/wedding.js';

export function renderStory() {
  const container = document.getElementById('section-story');
  if (!container) return;

  const timelineHtml = weddingConfig.story.map((item, index) => {
    const isEven = index % 2 === 0;
    return `
      <div class="timeline-item ${isEven ? 'left' : 'right'}">
        <div class="timeline-node">
          <span class="node-pulse"></span>
          <span class="node-year">${item.year}</span>
        </div>
        <div class="timeline-card glass-card">
          <span class="timeline-badge">${item.year}</span>
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-header">
      <p class="section-tag">KISAH KAMI</p>
      <h2 class="section-title">Perjalanan Dua Hati</h2>
      <p class="section-desc">Setiap langkah takdir menuntun kami menuju janji suci di hadapan Allah SWT.</p>
      <div class="section-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>
    </div>

    <div class="timeline-wrapper">
      <div class="timeline-line"></div>
      ${timelineHtml}
    </div>
  `;
}
