const projects = [
  {
    id: 1,
    name: "Vindicate RolePlay",
    description: "GTA V RageMP Roleplay server project focused on civilian gameplay systems."
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "My personal developer portfolio using React and Vite, deployed with Cloudflare Pages."
  },
  {
    id: 3,
    name: "Web App",
    description: "Currently building small web applications while learning React and Node.js."
  }
];

function Projects() {
    return (
        <section id="projects" className="projects">

            <h2 data-aos="fade-up">Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                    key={project.id}
                    className="project-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100} // stagger each card by 100ms
                    >
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    </div>
                ))}
                
            </div>
        </section>
    )
}

export default Projects