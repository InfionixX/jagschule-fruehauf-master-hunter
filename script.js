
// Add hunting grounds to navbar links
document.querySelectorAll('custom-navbar').forEach(navbar => {
    const shadow = navbar.shadowRoot || navbar;
    const navLinks = shadow.querySelector('.nav-links');
    const contactLink = shadow.querySelector('a[href="#contact"]');
    
    if (navLinks && contactLink) {
        const huntingGroundsLink = document.createElement('a');
        huntingGroundsLink.href = '#hunting-grounds';
        huntingGroundsLink.textContent = 'Hunting Grounds';
        navLinks.insertBefore(huntingGroundsLink, contactLink);
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Animation observer
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Add animation classes to all sections
    document.querySelectorAll('section').forEach((section, index) => {
        section.classList.add('animate-on-scroll');
        if (index > 0) {
            section.classList.add(`delay-${index % 4}`);
        }
        observer.observe(section);
    });

    // Animate other elements
    document.querySelectorAll('.animate-element').forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.classList.add(`delay-${index % 4}`);
        observer.observe(el);
    });
}
// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Teacher popup functionality
    const teacherPopup = document.querySelector('teacher-popup');
    document.querySelectorAll('.learn-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const teacherData = JSON.parse(this.dataset.teacher);
            teacherPopup.showTeacher(teacherData);
        });
    });
});
// Image carousel functionality
function initCarousel(selector) {
    const carousels = document.querySelectorAll(selector);
    carousels.forEach(carousel => {
        const container = carousel.closest('.relative');
        const slides = carousel.querySelectorAll('img');
        const prevBtn = container.querySelector('.carousel-prev');
        const nextBtn = container.querySelector('.carousel-next');
        const indicators = container.querySelectorAll('.carousel-indicator');
        
        let currentIndex = 0;
        const slideCount = slides.length;
        
        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('bg-opacity-100');
                    indicator.classList.remove('bg-opacity-50');
                } else {
                    indicator.classList.remove('bg-opacity-100');
                    indicator.classList.add('bg-opacity-50');
                }
            });
        }
        
        // Navigation buttons
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        });
        
        // Indicators
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                currentIndex = parseInt(indicator.dataset.index);
                updateCarousel();
            });
        });
        
        // Auto-rotate if more than one slide
        if (slideCount > 1) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % slideCount;
                updateCarousel();
            }, 5000);
        }
        
        // Initialize
        updateCarousel();
    });
}
// Contact form handling
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const fileInput = document.getElementById('enrollment-form');
    
    if (fileInput.files.length > 0) {
        formData.append('enrollmentForm', fileInput.files[0]);
    }
    
    // In a real implementation, you would send this to your backend
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Thank you for your application! We will review your enrollment form and contact you soon.');
    this.reset();
    fileInput.value = '';
});
// Course card hover effect
const courseCards = document.querySelectorAll('#courses > div > div > div');
courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('ul').classList.add('slide-up');
    });
});