function SkillCard({ name, level, icon }) {
  const levelClass =
    level === 'Advanced' ? 'skill-card__badge--advanced' :
      level === 'Intermediate' ? 'skill-card__badge--intermediate' :
        'skill-card__badge--beginner';

  return (
    <div className="skill-card">
      <span className="skill-card__icon" aria-hidden="true">
        {icon}
      </span>

      <h3 className="skill-card__name">{name}</h3>

      <span className={`skill-card__badge ${levelClass}`}>
        {level}
      </span>
    </div>
  );
}

export default SkillCard;
