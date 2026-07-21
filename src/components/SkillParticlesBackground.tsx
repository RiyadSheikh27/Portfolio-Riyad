import { skills } from "../primitives/skills";

const particleCount = 28;

const particles = Array.from({ length: particleCount }, (_, index) => {
  const skill = skills[index % skills.length];
  const left = (index * 37) % 100;
  const top = (index * 23) % 100;
  const duration = 18 + (index % 7) * 4;
  const delay = (index % 9) * -2.2;
  const driftX = 24 + (index % 4) * 10;
  const driftY = 18 + (index % 5) * 8;
  const scale = 0.6 + (index % 6) * 0.12;

  return {
    key: `${skill.label}-${index}`,
    icon: skill.icon,
    label: skill.label,
    style: {
      left: `${left}%`,
      top: `${top}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      ["--drift-x" as string]: `${driftX}px`,
      ["--drift-y" as string]: `${driftY}px`,
      ["--particle-scale" as string]: scale.toFixed(2),
    },
  };
});

const SkillParticlesBackground = () => {
  return (
    <div className="skill-particles-bg" aria-hidden="true">
      {particles.map((particle) => (
        <span key={particle.key} className="skill-particle" style={particle.style}>
          <img src={particle.icon} alt={particle.label} className="skill-particle-icon" />
          <span className="skill-particle-spark" />
        </span>
      ))}
    </div>
  );
};

export default SkillParticlesBackground;
