class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                nav {
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(10px);
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #40534C;
}
                
                .logo img {
                    height: 60px;
                    margin-right: 1rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-links a {
                    color: #333;
                    font-weight: 600;
                    text-decoration: none;
                    position: relative;
                    padding: 0.5rem 0;
                    transition: color 0.3s;
                }
                
                .dropdown {
                    position: relative;
                    display: inline-block;
                }
                
                .dropdown-toggle {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                
                .dropdown-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background: white;
                    min-width: 200px;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
                    border-radius: 0.5rem;
                    padding: 0.5rem 0;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                    z-index: 100;
                }
                
                .dropdown-menu a {
                    display: block;
                    padding: 0.75rem 1.5rem;
                    color: #333;
                    transition: all 0.2s;
                }
                
                .dropdown-menu a:hover {
                    background: #f5f5f5;
                    color: #40534C;
                }
                
                .dropdown:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
.nav-links a:hover {
                    color: #b45309;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #40534C;
transition: width 0.3s;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                .mobile-menu-btn {
                    display: none;
                    background: #40534C;
                    border: 2px solid white;
                    border-radius: 8px;
                    padding: 12px 10px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                }
                
                .mobile-menu-btn:hover {
                    background: #1A3636;
                    transform: scale(1.05);
                }
                
                .hamburger {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 24px;
                    height: 18px;
                }
                
                .hamburger-line {
                    display: block;
                    height: 2px;
                    width: 100%;
                    background: white;
                    transition: all 0.3s ease;
                }
                
                .nav-links.active + .mobile-menu-btn .hamburger-line:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                
                .nav-links.active + .mobile-menu-btn .hamburger-line:nth-child(2) {
                    opacity: 0;
                }
                
                .nav-links.active + .mobile-menu-btn .hamburger-line:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }
@media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 80px;
                        left: 0;
                        right: 0;
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1.5rem;
                        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
                        transform: translateY(-150%);
                        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                        z-index: 999;
                    }
                    
                    .dropdown-menu {
                        position: static;
                        box-shadow: none;
                        padding: 0;
                        margin-top: 0.5rem;
                        margin-left: 1rem;
                        opacity: 1;
                        visibility: visible;
                        transform: none;
                        display: none;
                    }
                    
                    .dropdown-menu a {
                        padding: 0.5rem 0;
                    }
                    
                    .dropdown.active .dropdown-menu {
                        display: block;
                    }
.nav-links.active {
                        transform: translateY(0);
                    }
                    
                    .nav-links a {
                        padding: 0.75rem;
                        border-bottom: 1px solid #f3f3f3;
                    }
                    
                    .nav-links a:hover::after {
                        width: 0;
                    }
                    .mobile-menu-btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .dropdown-toggle i {
                        transition: transform 0.3s;
                    }
                    
                    .dropdown.active .dropdown-toggle i {
                        transform: rotate(180deg);
                    }
.logo img {
                        height: 60px;
                    }
                }
</style>
            <nav>
                <div class="nav-container">
                    <a href="/" class="logo">
<img src="assets/_pictures/44636800604-removebg-preview.png" alt="Jagdschule Frühauf Logo">
                    </a>
                <div class="nav-links">
                    <a href="/#about">Über Uns</a>
                    <a href="/#teachers">Unsere Dozenten</a>
                    <a href="/#story">Erfahrungen</a>
                    <div class="dropdown">
                        <a href="/#courses" class="dropdown-toggle">Unsere Kurse <i data-feather="chevron-down"></i></a>
                        <div class="dropdown-menu">
                            <a href="/basic-course.html">Gruppenkurs</a>
                            <a href="/advanced-course.html">Individualkurs</a>
                        </div>
                    </div>
                    <a href="/#contact">Kontakt</a>
</div>
                    <button class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="Toggle menu">
                        <span class="hamburger">
                            <span class="hamburger-line"></span>
                            <span class="hamburger-line"></span>
                            <span class="hamburger-line"></span>
                        </span>
                    </button>
</div>
            </nav>
        `;
        // Initialize Feather Icons and mobile menu toggle
        if (typeof feather !== 'undefined') {
            feather.replace();
            const menuToggle = this.shadowRoot.getElementById('mobile-menu-toggle');
            const navLinks = this.shadowRoot.querySelector('.nav-links');
            const menuIcon = this.shadowRoot.getElementById('menu-icon');
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            // Handle dropdown toggle on mobile
            const dropdownToggles = this.shadowRoot.querySelectorAll('.dropdown-toggle');
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        const dropdown = toggle.parentElement;
                        dropdown.classList.toggle('active');
                    }
                });
            });
}
}
}

customElements.define('custom-navbar', CustomNavbar);