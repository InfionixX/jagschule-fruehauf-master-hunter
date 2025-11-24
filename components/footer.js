class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1a1a1a;
                    color: white;
                    padding: 4rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .footer-logo img {
                    height: 50px;
                    margin-right: 1rem;
                    border-radius: 50%;
                }
                
                .footer-logo-text {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #40534C;
}
                
                .footer-about p {
                    margin-bottom: 1.5rem;
                    color: #a1a1aa;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-links a {
                    color: white;
                    background-color: #333;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s;
                }
                
                .social-links a:hover {
                    background-color: #40534C;
}
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-links a {
                    color: #a1a1aa;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-links a:hover {
                    color: #b45309;
                }
                
                .footer-contact p {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #a1a1aa;
                    margin-bottom: 1rem;
                }
                
                .copyright {
                    max-width: 1200px;
                    margin: 3rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid #333;
                    text-align: center;
                    color: #a1a1aa;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-about">
                    <div class="footer-logo">
                        <img src="assets/_pictures/44636800604.png" alt="Jagdschule Frühauf Logo">
                        <span class="footer-logo-text">Jagdschule Frühauf</span>
                    </div>
                    <p>Die Jagdschule mit den meisten Erfahrungswerten!</p>
                    <div class="social-links">
                        <a href="https://www.facebook.com/jagdschule.fruehauf/"><i data-feather="facebook"></i></a>
                        <a href="https://www.instagram.com/jagdschule_fruehauf/"><i data-feather="instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-links-container">
                    <h3 class="footer-heading">Quick Links</h3>
                    <div class="footer-links">
                        <a href="#about">Über Uns</a>
                        <a href="#teachers">Unsere Dozenten</a>
                        <a href="#story">Erfahrungen</a>
                        <a href="#courses">Unsere Kurse</a>
                        <a href="#contact">Kontakt</a>
                    </div>
                </div>
                
                <div class="footer-contact">
                    <h3 class="footer-heading">Kontaktiere Uns</h3>
                    <p><i data-feather="map-pin"></i>Alte Dorfstraße 18, 98553 Schleusingen, Deutschland</p>
                    <p><i data-feather="phone"></i> +49 89 1234567</p>
                    <p><i data-feather="mail"></i> Tel: 036841 31193 | Mobil: 0170 5474789 </p>
                </div>
            </div>
            <div class="copyright">
                &copy; ${new Date().getFullYear()} Jagdschule Frühauf. All rights reserved.
                <legal-popups></legal-popups>
            </div>
`;
        // Initialize Feather Icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

customElements.define('custom-footer', CustomFooter);
