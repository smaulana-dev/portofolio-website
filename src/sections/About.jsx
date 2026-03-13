const skills = ["JavaScript", "C/C++", "HTML", "CSS", "React", "Node.js", "RageMP"];

function About() {
    return (
        <section id="about" className="about">
            <div className="about-content" data-aos="fade-right">
                <div className="about-wrapper">
                    <img
                        src="/public/profile.jpg"  // put your picture in public folder or use correct path
                        alt="Maulana"
                        className="about-image"
                    />
                    <div className="about-text">
                        <h2>About Me</h2>

                            <p>Electrical engineer (B.Eng) with over 10 years of professional field working experience, 
                            currently transitioning into software development. I enjoy building 
                            systems that solve real-life problems, from web applications to multiplayer 
                            game server logic
                            </p>
                        </div>
                
                </div>
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