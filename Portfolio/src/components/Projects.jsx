import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const allTechs = ['All', ...Array.from(new Set(projects.flatMap((p) => p.technologies)))];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (tech) => {
    setActiveFilter(tech);
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.technologies.includes(activeFilter));

  return (
    <section id="projects" className="projects section section--alt">
      <div className="container">

        <div className="section-heading">
          <h2>My <span>Projects</span></h2>
          <p>Things I've built along the way</p>
        </div>

        <div className="projects__filters">
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`projects__filter-btn ${activeFilter === tech ? 'projects__filter-btn--active' : ''}`}
              onClick={() => handleFilterClick(tech)}
              type="button"
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects__empty">
            No projects found for this technology yet.
          </p>
        )}

      </div>
    </section>
  );
}

export default Projects;
