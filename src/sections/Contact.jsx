
import { FaEnvelope, FaGithub } from "react-icons/fa";


function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 data-aos="fade-up">Contact</h2>

      <div className="contact-grid" data-aos="fade-up">

        <a
          className="contact-icon"
          href="mailto:stratameta.tech@gmail.com"
          data-tooltip="Email me"
        >
          <FaEnvelope />
        </a>

        <a
          className="contact-icon"
          href="https://github.com/smaulana-dev"
          target="_blank"
          data-tooltip="GitHub"
        >
          <FaGithub />
        </a>

      </div>

    </section>
  )
}

export default Contact