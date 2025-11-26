class FAQPopup extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: none;
          z-index: 2000;
          align-items: center;
          justify-content: center;
        }
        .popup-content {
          background: white;
          padding: 2rem;
          border-radius: 0.5rem;
          max-width: 800px;
          max-height: 80vh;
          overflow-y: auto;
          color: #333;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .faq-item {
          margin-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 1rem;
        }
        .faq-question {
          font-weight: bold;
          font-size: 1.1rem;
          color: #40534C;
          margin-bottom: 0.5rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-answer {
          color: #666;
          padding-left: 1rem;
          display: none;
        }
        .faq-answer.show {
          display: block;
        }
        h2 {
          color: #40534C;
          margin-bottom: 1.5rem;
          text-align: center;
        }
      </style>
      <div class="popup-overlay" id="faq-popup">
        <div class="popup-content">
          <button class="close-btn" id="close-faq-popup">×</button>
          <h2>Häufig gestellte Fragen</h2>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Welche Voraussetzungen gibt es für den Grundkurs zur Jägerprüfung?</span>
              <i data-feather="chevron-down"></i>
            </div>
            <div class="faq-answer">
              Für unseren Grundkurs zur Jägerprüfung sind keine Vorkenntnisse im Jagen erforderlich. Die Teilnehmer müssen jedoch mindestens 18 Jahre alt sein und eine grundlegende Zuverlässigkeitsprüfung für den Umgang mit Schusswaffen bestehen.
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Welche Ausrüstung muss ich für die Kurse mitbringen?</span>
              <i data-feather="chevron-down"></i>
            </div>
            <div class="faq-answer">
              Für den Gruppenkurs sowie für den Individualkurs stellen wir alle notwendigen Ausrüstungen, einschließlich Waffen und Munition, zur Verfügung. Geeignete Outdoor-Bekleidung und sind jedoch für anstehende Reviergänge von Vorteil.
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Wie lautet die Stornierungsrichtlinie?</span>
              <i data-feather="chevron-down"></i>
            </div>
            <div class="faq-answer">
              Bei Abschluss des Ausbildungsvertrages wird über die entsprechende Stornierungsdauer informiert.
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Bieten Sie Unterkünfte für Teilnehmer an?</span>
              <i data-feather="chevron-down"></i>
            </div>
            <div class="faq-answer">
              Die Jagdschule selbst nicht, jedoch gibt es zahlreiche Unterkünfte in der nährenen Umgebung.
              <br>Empfehlungen:</br>
              <ul>
                <li><a href="https://www.schuetzenhofxxl.de/" target="_blank" rel="noopener">Hotel Schützenhof XXL</a></li>
                <li><a href="https://www.hotel-waldschloss.de/" target="_blank" rel="noopener">Hotel Waldschloss</a></li>
            </div>
          </div>
          
          <div class="faq-item">
            <div class="faq-question">
              <span>Wie lange ist die Zertifizierung gültig?</span>
              <i data-feather="chevron-down"></i>
            </div>
            <div class="faq-answer">
              Die bestandene Jagdscheinprüfung ist unbefristet gültig. 
            </div>
          </div>
        </div>
      </div>
    `;

    const closeBtn = this.shadowRoot.getElementById('close-faq-popup');
    const overlay = this.shadowRoot.getElementById('faq-popup');
    const questions = this.shadowRoot.querySelectorAll('.faq-question');

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });

    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        answer.classList.toggle('show');
        if (answer.classList.contains('show')) {
          feather.replace();
          icon.setAttribute('data-feather', 'chevron-up');
        } else {
          feather.replace();
          icon.setAttribute('data-feather', 'chevron-down');
        }
        feather.replace();
      });
    });

    // Expose a method to show the popup
    this.show = () => {
      overlay.style.display = 'flex';
      feather.replace();
    };
  }
}

customElements.define('faq-popup', FAQPopup);