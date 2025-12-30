export default function Footer() {
    return (
        <section id="footer" className="footer-section">
            <div className="footer-content">
                <hr className="footer-hr-line"></hr>
                <nav className="footer-nav-links">
                    <a href="#about" className="footer-about-link">
                        About me
                    </a>
                    <a href="#skills" className="footer-skills-link">
                        Skills
                    </a>
                    {/* <a href="#projects" className="footer-projects-link">
                        Works
                    </a> */}
                    <a href="#contact" className="footer-contact-link">
                        Contact
                    </a>
                </nav>
                <p className="footer-copyright-text">
                    @2025 Elijah Kent Heyrosa.
                </p>
            </div>
        </section>
    );
}