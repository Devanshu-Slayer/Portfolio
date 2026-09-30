function ProjectCard({ title, description, technologies, image, github, liveDemo }) {
  return (
    <article className="project-card">

      <div className="project-card__image-wrapper">
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="project-card__image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('project-card__image-wrapper--fallback');
          }}
        />
      </div>

      <div className="project-card__content">

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tags">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            aria-label={`View ${title} source code on GitHub`}
          >
            GitHub
          </a>

          {liveDemo ? (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              aria-label={`View ${title} live demo`}
            >
              Live Demo
            </a>
          ) : (
            <button className="btn btn--primary" disabled>
              Coming Soon
            </button>
          )}
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;
