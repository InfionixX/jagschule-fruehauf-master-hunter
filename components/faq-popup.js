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
            <h2>Frequently Asked Questions</h2>
            
            <div class="faq-item">
              <div class="faq-question">
                <span>What are the prerequisites for the Basic Hunter Certification course?</span>
                <i data-feather="chevron-down"></i>
              </div>
              <div class="faq-answer">
                No prior hunting experience is required for our Basic Hunter Certification course. However, participants must be at least 18 years old and pass a basic background check for firearm handling.
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <span>What equipment do I need to bring for the courses?</span>
                <i data-feather="chevron-down"></i>
              </div>
              <div class="faq-answer">
                For the Basic Hunter Certification, we provide all necessary equipment including firearms and ammunition. You only need to bring appropriate outdoor clothing and footwear. For advanced courses, we'll provide a detailed equipment list upon enrollment.
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <span>Are the courses available in English?</span>
                <i data-feather="chevron-down"></i>
              </div>
              <div class="faq-answer">
                Yes, all our courses are conducted in both German and English. Our instructors are fluent in both languages and course materials are provided in both languages as well.
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <span>What is the cancellation policy?</span>
                <i data-feather="chevron-down"></i>
              </div>
              <div class="faq-answer">
                You may cancel your enrollment up to 14 days before the course start date for a full refund. Cancellations within 14 days will receive a 50% refund. No refunds are available after the course begins.
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <span>Do you offer accommodation for students?</span>
                <i data-feather="chevron-down"></i>
              </div>
              <div class="faq-answer">
                Yes, we have on-campus lodging available at an additional cost. Alternatively, we can provide recommendations for nearby hotels and guesthouses to suit various budgets.
              </div>
            </div>
            
            <div class="faq-item">
              <div class="faq-question">
                <span>How long is the certification valid?</span>
                <i data-feather="chevron-down"></i>
              </div>
              <div class="faq-answer">
                The Basic Hunter Certification is valid for life, though we recommend periodic refresher courses. Some specialized certifications (like certain safety certifications) may require renewal every 3-5 years depending on regional regulations.
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