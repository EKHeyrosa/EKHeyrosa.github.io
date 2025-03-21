import { skills } from "../data/data.js";

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-section-content">
                <h1 className="skills-section-title">
                    Skills & Technologies
                </h1>
                <div className="skills-section-skills">
                    {skills.map((skill) => (
                        <div key={skill} className="skills-section-skill">
                            <div >
                                <span className="skills-section-skill-content">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}