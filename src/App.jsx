import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Contact from "./sections/Contact"
import ParticlesBackground from "./components/Particle"


function App() {
  return (
    
    <>
    <ParticlesBackground />
      <Navbar />
      <div className="container">
      
      <Hero />
      <About />
      <Projects />
      <Contact />

    
    </div>
    <footer className="footer">
  <p>
    &copy; {new Date().getFullYear()} Maulana (StrataMeta). Built with{" "}
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> &amp; ❤️
  </p>
</footer>
    </>
    
  )
}

export default App