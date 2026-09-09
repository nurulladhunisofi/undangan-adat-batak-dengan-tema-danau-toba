export function renderCulturalJourney() {
  const container = document.getElementById('section-cultural-journey');
  if (!container) return;

  container.innerHTML = `
    <div class="journey-overlay glass-card">
      <p class="section-tag">CULTURAL JOURNEY</p>
      <h2 class="journey-title">Janji Suci di Tepian Danau Toba</h2>
      <p class="journey-text">
        Melintasi perbukitan hijau Samosir, diselimuti kabut pagi yang teduh, dan diiringi alunan doa restu dari para tetua adat dan keluarga besar.
      </p>
      <div class="journey-decor">
        <span class="decor-dot"></span>
        <span class="decor-line"></span>
        <span class="decor-dot"></span>
      </div>
    </div>
  `;
}
