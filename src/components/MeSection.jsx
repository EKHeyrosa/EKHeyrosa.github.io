export default function MeSection() {
    return (
        <section id="meSection" className="me-section">
            <div className="me-section-content-box">
                <div className="me-section-content">
                    {/* <p className="section-title">Hey, I am</p> */}
                    <h1 className="me-section-title">
                        Elijah Kent Heyrosa
                    </h1>
                    <p className="me-section-description">
                        Web Developer with hands-on experience across a wide range of programming languages and 
                        development frameworks. Strong problem-solving abilities, collaborative mindset, and a solid 
                        foundation of transferable soft skills.
                    </p>
                </div>
                {/* <button className="btn btn-primary">View My Work</button> */}
            </div>
            <div className="me-section-img">
                <img src=".\img\elijah-image1.jpg" alt="Portrait of me" />
            </div>
        </section>
    );
}