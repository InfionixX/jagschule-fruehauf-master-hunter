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
          <p>Büchsenmacherei & Jagdschule Marko Frühauf<br>
          Rappelsdorf - Alte Dorfstraße 18<br>
          98553 Schleusingen<br>
          Deutschland</p>
          
          <p><strong>Vertreten durch:</strong><br>
          Marko Frühauf</p>
          
          <p><strong>Kontakt:</strong><br>
          Telefon:  036841/31193<br>
          Mobil:  0170/5474789<br>
          E-Mail: info@jagdschule-fruehauf.de</p>
          
          <p><strong>Registereintrag:</strong><br>
          Eintragung im Handelsregister.<br>
          Registergericht: München<br>
          Registernummer: HRB 123456</p>
          
          <p><strong>Umsatzsteuer-ID:</strong><br>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br>
          USt.-ID.: DE 201852098</p>
          
          <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br>
          Marko Frühauf<br>
          Rappelsdorf - Alte Dorfstraße 18<br>
          98553 Schleusingen</p>

          <p><strong>Links:</strong><br>
          Im Sinne des Urteils des Landgerichts Hamburg vom 12. Mai 1998 (AZ 312 O 85/98 - Haftung für Links) distanzieren wir uns ausdrücklich von den Inhalten aller externen Verbindungen ("Links"), auf die direkt oder indirekt verwiesen wird. Ausgenommen sind die Inhalte die eindeutig mit Jagdschule Frühauf bzw. dem entsprechenden Logo gekennzeichnet sind.
          </p>

          <p><strong>Urheberrecht und Copyright:</strong><br>
          Alle Rechte vorbehalten. Warenzeichen und Markennamen gehören ihren jeweiligen Eigentümern und dienen hier nur zur Veranschaulichung. Design, Quellcode, Banner, Grafiken, Fotos usw. unterliegen dem Urheberrecht  des jeweiligen Autors oder Eigentümer von Marko Frühauf. Sämtliche auf dieser Webseite wiedergegebenen Abbildungen und Texte sind urheberrechtlich geschützt. Alle Rechte der Verbreitung bzw. Sendung auch durch Film, Funk und Fernsehen sowie durch Übermittlung in Computernetzwerken jeder Art, fotomechanische Wiedergabe, Ton- und Datenträger jeder Art, auszugsweisen Nachdruck oder Einspeicherung und Rückgewinnung in Datenverarbeitungsanlagen aller Art sind vorbehalten und bedürfen der schriftlichen Zustimmung ihrer Eigentümer. Das Anzeigen unserer Webseite inklusive aller per Link verbundenen Seiten in externen Frameseiten ist untersagt. Zuwiderhandlungen unterliegen den Strafbestimmungen des Urheberrechtsgesetzes.
          </p>
        </div>
      </div>
      
      <div class="popup-overlay" id="datenschutz-popup">
        <div class="popup-content">
          <button class="close-btn" id="close-datenschutz">×</button>
          <h2>Datenschutzerklärung</h2>
          <h3>1. Datenschutz auf einen Blick</h3>
          <p><strong>Allgemeine Hinweise</strong><br>
          Die Firma Büchsenmacherei & Jagdschule Marko Frühauf gewährleistet, dass die anfallenden Kundendaten lediglich im Zusammenhang mit der Abwicklung der Kundenanfragen erhebt, bearbeitet, speichert und nutzt sowie nur zu internen Zwecken. Eine Weitergabe der Adressen an Dritte und insbesondere an gewerbliche Adressenhändler oder andere Unternehmen ist ausgeschlossen.
          <br>
          Soweit der Kunde eine aktive Datennutzung für interne Zwecke durch die Firma Büchsenmacherei & Jagdschule Marko Frühauf nicht möchte, ist der Kunde gemäß § 28 Absatz 4 Bundesdatenschutzgesetz (BDSG) berechtigt, dieser Nutzung und Verarbeitung jederzeit zu widersprechen. Hierzu genügt es, eine entsprechenden E-Mail an mf@gebrueder-fruehauf.de zu senden. Der besondere Fall einer gesetzlich vorgeschriebenen Datensperrung anstelle einer Datenlöschung gemäß § 35 Absatz 3 Bundesdatenschutzgesetz (BDSG) bleibt hierbei unberührt.
          <br>
          Datenübermittlung und -protokollierung zu systeminternen und statistischen Zwecken
          <br>
          Der Internet-Browser des Kunden übermittelt beim Zugriff auf diese Website aus technischen Gründen automatisch Daten an den Webserver.
          <br>
          Jeder Datensatz besteht aus dem Datum und Uhrzeit des Zugriffs, URL der verweisenden Webseite, abgerufene Datei, Menge der gesendeten Daten, Browsertyp und -version, Betriebssystem sowie der IP-Adresse des Kunden. Eine Zuordnung dieser Daten zu einer bestimmten Person ist nicht möglich. Die gespeicherten Daten werden nur intern und ausschließlich zu statistischen Zwecken ausgewertet.
          </p>
          
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
          
          <h3>6. Einsatz von Cookies</h3>
          <p>Beim ersten Besuch auf diese Website durch den Kunden wird ein Cookie an den Browser des Kunden gesendet. Dieses wird auf der Festplatte des Kunden gespeichert. Das Cookie dient bei einem erneuten Besuch ausschließlich der Feststellung, ob dieser Kunde diese Website schon einmal besucht hat.</p>

          <h3>7. Verwendung von Facebook-Plugins</h3>
          <p>Die Firma Büchsenmacherei & Jagdschule Marko Frühauf verwendet Plugins des sozialen Netzwerkes facebook.com. Betreiber ist Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA ("Facebook").
          
          <br>
          Wenn der Kunde mit einem Plugin die Website der Firma Büchsenmacherei & Jagdschule Marko Frühauf aufruft, wird eine Verbindung zu den Facebook-Servern hergestellt und dabei das Plugin durch Mitteilung an Ihren Browser auf der Internetseite dargestellt. Hierdurch wird an den Facebook-Server übermittelt, dass der Kunde die Website der Firma Büchsenmacherei & Jagdschule Marko Frühauf besucht hat. Ist der Kunde dabei als Mitglied bei Facebook eingeloggt, ordnet Facebook diese Information dem persönlichen Facebook-Benutzerkonto des Kunden zu.

          <br>
          Bei der Nutzung der Plugin-Funktionen (z.B. Anklicken des „Gefällt mir“-Buttons, Abgabe eines Kommentars) werden diese Informationen ebenfalls dem Facebook-Konto des Kunden zugeordnet, welches der Kunde nur durch Ausloggen vor Nutzung des Plugins verhindern kann.

          <br>
          Nähere Informationen zur Erhebung und Nutzung der Daten durch Facebook, über Rechte und Möglichkeiten zum Schutz der Privatsphäre des Kunden sind in den Datenschutzhinweisen von Facebook zu finden.

          <br>
          Der Kunde erklärt sich mit der Nutzung dieser Website mit den erläuterten Punkten „Verwendung von Facebook-Plugins“ einverstanden.
          </p>

          <h3>8. Auskunbftsrecht</h3>
          <p><strong>Auskunft, Löschung, Sperrung</strong><br>
          Der Kunde hat das Recht, gemäß § 34 Bundesdatenschutzgesetz (BDSG), Auskunft über die zu seiner Person gespeicherten Daten zu erhalten. Auf Anforderung teilt die Firma Büchsenmacherei & Jagdschule Marko Frühauf dem Kunden entsprechend geltendem Recht in schriftlicher Form mit, welche persönlichen Daten des Kunden bei der Firma Büchsenmacherei & Jagdschule Marko Frühauf gespeichert sind. Diese Auskunft ist unentgeltlich. mf@gebrueder-fruehauf.de.
          </p>

          <h3>9. Datenschutzbeauftragter</h3>
          <p>Datenschutzbeauftragter gemäß § 4 f Absatz 1 Satz 1 Bundesdatenschutzgesetz (BDSG)
          <br>
          Marko FrühaufRappelsdorf - Alte Dorfstraße 18D-98553 SchleusingenTelefon +49 36841-31993E-Mai mf@gebrueder-fruehauf.de
          </p>

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