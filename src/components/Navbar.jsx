

// Navbar.jsx
import AOS from 'aos';
import { FaCode } from 'react-icons/fa';

function Navbar() {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      AOS.refresh(); // refresh animations
    }
  };

  return (
    <nav>
      <div className="nav-container">

        <h3 className="logo" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
          <FaCode size={28} color="#fff" />
          <span className="logo-text">StrataMeta</span>
        </h3>

        <div className="nav-links">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar