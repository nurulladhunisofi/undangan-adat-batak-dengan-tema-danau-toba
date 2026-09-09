export function renderQuote() {
  const container = document.getElementById('section-quote');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-card quote-card">
      <div class="card-ornament-top">
        <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
      </div>

      <p class="arabic-quote" dir="rtl">
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </p>

      <blockquote class="quote-translation">
        &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.&rdquo;
      </blockquote>

      <p class="quote-source">QS. Ar-Rum : 21</p>

      <div class="card-ornament-bottom">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider-small" />
      </div>
    </div>
  `;
}
