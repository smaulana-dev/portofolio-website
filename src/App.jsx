import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import About from "./sections/About"


function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>GitHub: github.com/smaulana-dev</p>
      </section>

    </div>
  )
}

export default App