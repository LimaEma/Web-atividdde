import './Home.css'

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <strong>IA</strong>
          <span>DIGITAL PROJECT</span>
        </div>

        <nav className="menu">
          <a href="#home">MAIN</a>
          <a href="#about">GALLERY</a>
          <a href="#projects">PROJECTS</a>
          <a href="#mission">CERTIFICATIONS</a>
          <a href="#contact">CONTACTS</a>
        </nav>
      </header>

      <section className="hero" id="home">

        <div className="hero-text">
          <span>PROJECT</span>
          <h1>Lorum</h1>

          <div className="hero-buttons">
            <button>←</button>
            <button>→</button>
          </div>

          <div className="counter">
            <span>01</span>
            <span>/</span>
            <span>02</span>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/hero.jpg" alt="Projeto arquitetônico" />

          <button className="view-project">
            VIEW PROJECT →
          </button>
        </div>

      </section>


      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-images">

          <img
            className="about-img img1"
            src="/images/about1.jpg"
            alt="Arquitetura"
          />

          <img
            className="about-img img2"
            src="/images/about2.jpg"
            alt="Prédio"
          />

          <img
            className="about-img img3"
            src="/images/about3.jpg"
            alt="Arquitetura moderna"
          />

        </div>

        <div className="about-text">
          <h2>About</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a gallery of type and scrambled it to make a
            type specimen book.
          </p>

          <p>
            It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>

          <button className="read-more">
            READ MORE →
          </button>
        </div>

      </section>


      {/* MISSÃO */}
      <section className="mission" id="mission">

        <h2>Main Focus/Mission Statement</h2>

        <div className="mission-content">

          <div className="mission-item">
            <strong>1</strong>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>

          <div className="mission-item">
            <strong>2</strong>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed efficitur, lectus et facilisis placerat, magna mauris
              porttitor tortor.
            </p>
          </div>

        </div>

      </section>


      {/* PROJETOS */}
      <section className="projects" id="projects">

        <h2>Our Projects</h2>

        <div className="projects-grid">

          <div className="project featured">
            <img
              src="/images/projeto1.jpg"
              alt="Sample Project"
            />

            <div className="project-overlay">
              <h3>Sample<br />Project</h3>
              <span>VIEW MORE →</span>
            </div>
          </div>

          <div className="project">
            <img
              src="/images/projeto2.jpg"
              alt="Projeto 2"
            />
          </div>

          <div className="project">
            <img
              src="/images/projeto3.jpg"
              alt="Projeto 3"
            />
          </div>

          <div className="project">
            <img
              src="/images/projeto4.jpg"
              alt="Projeto 4"
            />
          </div>

          <div className="project">
            <img
              src="/images/projeto5.jpg"
              alt="Projeto 5"
            />
          </div>

        </div>

        <button className="all-projects">
          ALL PROJECTS →
        </button>

      </section>


      {/* CONTATO */}
      <section className="contact" id="contact">

        <h2>Contact Us</h2>

        <div className="contact-content">

          <form>

            <input
              type="text"
              placeholder="Name"
            />

            <input
              type="text"
              placeholder="Phone Number*"
            />

            <input
              type="email"
              placeholder="E-mail*"
            />

            <input
              type="text"
              placeholder="Interested In"
            />

            <textarea
              placeholder="Message*"
            ></textarea>

            <button type="submit">
              SEND EMAIL →
            </button>

          </form>

          <div className="contact-image">
            <img
              src="/images/contact.jpg"
              alt="Contato"
            />
          </div>

        </div>

      </section>

      <footer>

        <div className="footer-logo">
          <strong>IA</strong>
          <span>DIGITAL PROJECT</span>
        </div>

        <div>
          <h4>Information</h4>
          <p>Main</p>
          <p>Gallery</p>
          <p>Projects</p>
          <p>Certifications</p>
          <p>Contacts</p>
        </div>

        <div>
          <h4>Contacts</h4>
          <p>⌖ 1234 Sample Street</p>
          <p>Austin Texas 78704</p>
          <p>☎ 512.333.2222</p>
          <p>✉ sampleemail@gmail.com</p>
        </div>

        <div>
          <h4>Social Media</h4>
          <p>f &nbsp; t &nbsp; in &nbsp; p</p>
        </div>

      </footer>

    </div>
  )
}

export default Home
