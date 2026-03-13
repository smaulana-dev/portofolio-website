import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Contact from "./sections/Contact"


function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  )
}

export default App