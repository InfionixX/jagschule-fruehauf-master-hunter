class ContactPopup extends HTMLElement {
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
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
        }
        input, textarea {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
        }
        button[type="submit"] {
          background-color: #40534C;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 1rem;
        }
      </style>
      <div class="popup-overlay" id="contact-popup">
        <div class="popup-content">
          <button class="close-btn" id="close-contact-popup">×</button>
          <h2 class="text-2xl font-bold mb-4">Enrollment Form</h2>
          <form class="contact-form">
            <div class="form-group">
              <label for="popup-lastname">Last Name*</label>
              <input type="text" id="popup-lastname" required>
            </div>
            <div class="form-group">
              <label for="popup-surname">Surname*</label>
              <input type="text" id="popup-surname" required>
            </div>
            <div class="form-group">
              <label for="popup-email">Email Address*</label>
              <input type="email" id="popup-email" required>
            </div>
            <div class="form-group">
              <label for="popup-phone">Mobile Number</label>
              <input type="tel" id="popup-phone">
            </div>
            <div class="form-group">
              <label for="popup-message">Additional Information</label>
              <textarea id="popup-message" rows="4"></textarea>
            </div>
            <div class="form-group">
              <button type="submit">Submit Enrollment</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const closeBtn = this.shadowRoot.getElementById('close-contact-popup');
    const overlay = this.shadowRoot.getElementById('contact-popup');
    const form = this.shadowRoot.querySelector('.contact-form');

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Handle form submission
      alert('Thank you for your enrollment request! We will contact you soon.');
      overlay.style.display = 'none';
      form.reset();
    });

    // Expose a method to show the popup
    this.show = () => {
      overlay.style.display = 'flex';
    };
  }
}

customElements.define('contact-popup', ContactPopup);