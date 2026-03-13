const skills = ["JavaScript", "C/C++", "HTML", "CSS", "React", "Node.js", "RageMP"];

function About() {
    return (
        <section id="about" className="about">
            <div className="about-content" data-aos="fade-right">
                <h2>About</h2>

                    <p>Electrical engineer with over 10 years of professional experience, 
                    currently transitioning into software development. I enjoy building 
                    systems that solve real-life problems, from web applications to multiplayer 
                    game server logic
                    </p>

                    <div className="skills">
                        {skills.map((skill, index) => (
                            <span
                            key={skill}
                            className="skill-badge"
                            data-aos="fade-right"
                            data-aos-delay={index * 50}
                            >
                            {skill}
                            </span>
                        ))}
                        
                        
                    </div>
            </div>
            
        </section>
    )
}

export default About