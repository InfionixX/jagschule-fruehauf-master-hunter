class TeacherPopup extends HTMLElement {
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
          background: rgba(0, 0, 0, 0.8);
          display: none;
          z-index: 2000;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .popup-content {
          background: white;
          border-radius: 0.5rem;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          color: #40534C;
        }
        .teacher-profile {
          display: grid;
          grid-template-columns: 300px 1fr;
        }
        .teacher-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 0.5rem 0 0 0.5rem;
        }
        .teacher-details {
          padding: 3rem;
        }
        .teacher-name {
          font-size: 2rem;
          font-weight: 700;
          color: #40534C;
          margin-bottom: 0.5rem;
        }
        .teacher-title {
          font-size: 1.25rem;
          color: #D6BD98;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        .teacher-bio {
          color: #555;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .teacher-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .stat-item {
          text-align: center;
          padding: 1rem;
          background: #f8f8f8;
          border-radius: 0.5rem;
        }
        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #40534C;
        }
        .stat-label {
          font-size: 0.875rem;
          color: #777;
        }
        .teacher-expertise h3 {
          font-size: 1.25rem;
          color: #40534C;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .expertise-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .expertise-item {
          background: #40534C;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .teacher-profile {
            grid-template-columns: 1fr;
          }
          .teacher-image {
            height: 300px;
            border-radius: 0.5rem 0.5rem 0 0;
          }
          .teacher-details {
            padding: 2rem;
          }
          .teacher-stats {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="popup-overlay" id="teacher-popup">
        <div class="popup-content">
          <button class="close-btn" id="close-teacher-popup">×</button>
          <div class="teacher-profile">
            <img id="teacher-popup-image" class="teacher-image" src="" alt="">
            <div class="teacher-details">
              <h2 id="teacher-popup-name" class="teacher-name"></h2>
              <p id="teacher-popup-title" class="teacher-title"></p>
              <p id="teacher-popup-bio" class="teacher-bio"></p>
              
              <div class="teacher-stats">
                <div class="stat-item">
                  <div class="stat-number" id="teacher-years">20+</div>
                  <div class="stat-label">Erfahrung</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number" id="teacher-students">1000+</div>
                  <div class="stat-label">Schüler unterichtet</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number" id="teacher-certifications">5</div>
                  <div class="stat-label">Auszeichnungen</div>
                </div>
              </div>
              
              <div class="teacher-expertise">
                <h3>Bereiche meiner Expertise</h3>
                <div class="expertise-list" id="teacher-expertise"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const closeBtn = this.shadowRoot.getElementById('close-teacher-popup');
    const overlay = this.shadowRoot.getElementById('teacher-popup');

    closeBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.style.display = 'none';
      }
    });

    // Expose a method to show the popup with teacher data
    this.showTeacher = (teacherData) => {
      const { 
        name, 
        title, 
        bio, 
        image, 
        years, 
        students, 
        certifications, 
        expertise 
      } = teacherData;
      
      this.shadowRoot.getElementById('teacher-popup-image').src = image;
      this.shadowRoot.getElementById('teacher-popup-name').textContent = name;
      this.shadowRoot.getElementById('teacher-popup-title').textContent = title;
      this.shadowRoot.getElementById('teacher-popup-bio').textContent = bio;
      this.shadowRoot.getElementById('teacher-years').textContent = years;
      this.shadowRoot.getElementById('teacher-students').textContent = students;
      this.shadowRoot.getElementById('teacher-certifications').textContent = certifications;
      
      const expertiseContainer = this.shadowRoot.getElementById('teacher-expertise');
      expertiseContainer.innerHTML = '';
      expertise.forEach(item => {
        const expertiseItem = document.createElement('span');
        expertiseItem.className = 'expertise-item';
        expertiseItem.textContent = item;
        expertiseContainer.appendChild(expertiseItem);
      });
      
      overlay.style.display = 'flex';
    };
  }
}

customElements.define('teacher-popup', TeacherPopup);