function About() {
  return (
    <section id="about" className="about section section--alt">
      <div className="container">

        <div className="section-heading">
          <h2>About <span>Me</span></h2>
          <p>A little bit about who I am and what I do</p>
        </div>

        <div className="about__content">

          <article className="about__text">
            <p>
              Hi! I'm <strong>Devanshu Khachane</strong>, a passionate web developer
              currently mastering the <strong>MERN Stack</strong>. I enjoy turning
              ideas into clean, functional, and beautiful web experiences.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              reading about software architecture, or playing chess online.
              I believe in writing code that is not only correct, but also
              readable and maintainable.
            </p>
            <p>
              My goal is to become a confident full-stack developer and work on
              impactful products that solve real problems.
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1CY2G4pssELc7nx_SX30kYuRkMsrTG6DX"
              className="btn btn--primary"
              download
              aria-label="Download Resume PDF"
            >
              📄 Download Resume
            </a>
          </article>

          <div className="about__info">

            <div className="about__card">
              <h3 className="about__card-title">🎓 Education</h3>
              <ul className="about__list">
                <li>
                  <strong>B.Tech Computer Engineering</strong>
                  <span>2024 – 2028</span>
                </li>
                <li>
                  <strong>Full Stack Web Development</strong>
                </li>
              </ul>
            </div>

            <div className="about__card">
              <h3 className="about__card-title">💡 Interests</h3>
              <ul className="about__list">
                <li>Web Development</li>
                <li>Open Source Contribution</li>
                <li>UI/UX Design</li>
                <li>Problem Solving</li>
              </ul>
            </div>

            <div className="about__card">
              <h3 className="about__card-title">📊 Quick Facts</h3>
              <ul className="about__list about__facts">
                <li><span>Location</span><strong>India</strong></li>
                <li><span>Experience</span><strong>1+ Years</strong></li>
                <li><span>Projects</span><strong>4+ Completed</strong></li>
                <li><span>Status</span><strong className="status--open">Open to Work</strong></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
