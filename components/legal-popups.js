class LegalPopups extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .legal-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          .legal-links a {
            color: #a1a1aa;
            text-decoration: none;
            cursor: pointer;
            transition: color 0.3s;
          }
          .legal-links a:hover {
            color: white;
          }
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
        </style>
        <div class="legal-links">
          <a id="impressum-link">Impressum</a>
          <a id="datenschutz-link">Datenschutz</a>
        </div>
        
        <div class="popup-overlay" id="impressum-popup">
          <div class="popup-content">
            <button class="close-btn" id="close-impressum">×</button>
            <h2>Impressum</h2>
            <h3>Angaben gemäß § 5 TMG:</h3>
            <p>Jagdschule Frühauf GmbH<br>
            Waldstraße 45<br>
            83700 Bavaria<br>
            Deutschland</p>
            
            <p><strong>Vertreten durch:</strong><br>
            Dieter Frühauf</p>
            
            <p><strong>Kontakt:</strong><br>
            Telefon: +49 89 1234567<br>
            E-Mail: info@jagdschule-fruehauf.de</p>
            
            <p><strong>Registereintrag:</strong><br>
            Eintragung im Handelsregister.<br>
            Registergericht: München<br>
            Registernummer: HRB 123456</p>
            
            <p><strong>Umsatzsteuer-ID:</strong><br>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
            DE123456789</p>
            
            <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
            Dieter Frühauf<br>
            Waldstraße 45<br>
            83700 Bavaria</p>
          </div>
        </div>
        
        <div class="popup-overlay" id="datenschutz-popup">
          <div class="popup-content">
            <button class="close-btn" id="close-datenschutz">×</button>
            <h2>Datenschutzerklärung</h2>
            <h3>1. Datenschutz auf einen Blick</h3>
            <p><strong>Allgemeine Hinweise</strong><br>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
            
            <h3>2. Hosting</h3>
            <p><strong>Externes Hosting</strong><br>
            Diese Website wird bei einem externen Dienstleister gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
            
            <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
            <p><strong>Datenschutz</strong><br>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.</p>
            
            <h3>4. Datenerfassung auf unserer Website</h3>
            <p><strong>Kontaktformular</strong><br>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
            
            <h3>5. Rechte der betroffenen Person</h3>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.</p>
            
            <h3>6. Analyse-Tools</h3>
            <p>Diese Website verwendet keine Analyse-Tools.</p>
          </div>
        </div>
      `;
  
      // Add event listeners
      this.shadowRoot.getElementById('impressum-link').addEventListener('click', () => {
        this.shadowRoot.getElementById('impressum-popup').style.display = 'flex';
      });
      
      this.shadowRoot.getElementById('datenschutz-link').addEventListener('click', () => {
        this.shadowRoot.getElementById('datenschutz-popup').style.display = 'flex';
      });
      
      this.shadowRoot.getElementById('close-impressum').addEventListener('click', () => {
        this.shadowRoot.getElementById('impressum-popup').style.display = 'none';
      });
      
      this.shadowRoot.getElementById('close-datenschutz').addEventListener('click', () => {
        this.shadowRoot.getElementById('datenschutz-popup').style.display = 'none';
      });
      
      // Close when clicking outside content
      this.shadowRoot.getElementById('impressum-popup').addEventListener('click', (e) => {
        if (e.target === this.shadowRoot.getElementById('impressum-popup')) {
          this.shadowRoot.getElementById('impressum-popup').style.display = 'none';
        }
      });
      
      this.shadowRoot.getElementById('datenschutz-popup').addEventListener('click', (e) => {
        if (e.target === this.shadowRoot.getElementById('datenschutz-popup')) {
          this.shadowRoot.getElementById('datenschutz-popup').style.display = 'none';
        }
      });
    }
  }
  
  customElements.define('legal-popups', LegalPopups);