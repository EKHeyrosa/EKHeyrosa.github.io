export default function Navbar() {
    return (
        <header className="navbar-section">
            <div className="navbar-content">
                <a className="navbar-name">
                    <a href="#about" className="navbar-about-link">
                        Elijah Kent Heyrosa
                    </a>
                </a>
                <nav className="navbar-links">
                    <a href="#skills" className="navbar-skills-link">
                        Skills
                    </a>
                    {/* <a href="#projects" className="navbar-projects-link">
                        Works
                    </a> */}
                    <a href="#contact" className="navbar-contact-link">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}