import { projects } from "../data/data.js";

export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-section-content">
                <h1 className="projects-section-title">
                    My Works
                </h1>
                <div className="projects-section-projects">
                    {projects.map((project) => (
                        <div key={project} className="projects-card">
                            <img src={project.image} alt="" />
                            <div className="projects-card-details">
                                <span className="project-card-title">{project.title}</span> 
                                <hr />
                                <div className="btn project-card-desc-buttons">
                                    <div>{project.description}</div> 
                                    <a href={project.link} className="project-github-button">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}