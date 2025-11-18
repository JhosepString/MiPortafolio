import React from 'react';
import './App.css'; // Mantenemos los estilos

// Datos de ejemplo para los Proyectos y Habilidades
const projectData = [
  { id: 1, title: "E-commerce Simple", description: "Plataforma de compras con carrito.", tech: ["React", "Node.js"], demoLink: "#", codeLink: "#" },
  { id: 2, title: "App del Clima", description: "Pronóstico en tiempo real usando API.", tech: ["React", "Axios"], demoLink: "#", codeLink: "#" },
  // Añade más proyectos aquí
];

const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Git', icon: '🐙' }
];

function App() {
  return (
    <div className="Portfolio-App">
      
      {/* =================================== 1. HEADER =================================== */}
      <header className="header" id="home">
        <div className="logo">
          <a href="#home">José Antonio Hernandez</a>
        </div>
        <nav className="nav-links">
          <a href="#about">Acerca de</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>
      
      <main>
        
        {/* =================================== 2. HERO =================================== */}
        <section className="hero-section">
            <div className="hero-content">
                <h1>¡Hola! Soy José Antonio Hernandez</h1>
                <p className="subtitle">
                    Desarrollador web enfocado en crear soluciones web modernas y accesibles.
                </p>
                <div className="hero-avatar">
                    {/*  */}
                </div>
                <a href="#projects" className="btn btn-primary">
                    Ver mis Proyectos
                </a>
            </div>
        </section>

        {/* =================================== 3. ABOUT & SKILLS =================================== */}
        <section id="about" className="about-section">
            <h2>Acerca de Mí</h2>
            <p className="bio-text">
                Soy un apasionado desarrollador sin experiencia laboral pero con algunos proyectos realizados. Me especializo en desarrollo web y disfruto resolviendo problemas complejos con código limpio y eficiente.
            </p>

            <h3>Mi Stack Tecnológico</h3>
            <div className="skills-list">
                {skills.map(skill => (
                    <div key={skill.name} className="skill-item">
                        <span className="skill-icon">{skill.icon}</span>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
        
        {/* =================================== 4. PROJECTS =================================== */}
        <section id="projects" className="projects-section">
            <h2>🚀 Proyectos Destacados</h2>
            <div className="projects-grid">
                {projectData.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image-placeholder">
                             
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        
                        <div className="project-tech">
                            {project.tech.map((t, index) => (
                                <span key={index} className="tech-tag">{t}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-demo btn-secondary">
                                Ver Demo
                            </a>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-code btn-secondary">
                                Ver Código
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* =================================== 5. CONTACT =================================== */}
        <section id="contact" className="contact-section">
            <h2>📬 Contacto</h2>
            <p>
                ¿Tienes un proyecto en mente o quieres saludar? ¡Contáctame!
            </p>
            
            <div className="contact-info">
                <a href="mailto:tu.correo@example.com" className="btn btn-primary contact-link">
                    Enviar Correo
                </a>
                <div className="social-links">
                    <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <span> | </span>
                    <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>  
        </section>
      </main>
      
      {/* =================================== 6. FOOTER =================================== */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} José Antonio Hernandez. Desarrollado con React.
        </p>
        <div className="footer-social-links">
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span> | </span>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;