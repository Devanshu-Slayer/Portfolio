import { skills } from '../data/skills';

import SkillCard from './SkillCard';

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">

        <div className="section-heading">
          <h2>My <span>Skills</span></h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
