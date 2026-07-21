import SectionHead from "../SectionHead";
import SkillCard from "./SkillCard";
import { skills } from "../../primitives/skills";

const midpoint = Math.ceil(skills.length / 2);
const topRow = skills.slice(0, midpoint);
const bottomRow = skills.slice(midpoint);

type MarqueeRowProps = {
  items: typeof skills;
  direction: "left" | "right";
  rowOffset: number;
};

const MarqueeRow = ({ items, direction, rowOffset }: MarqueeRowProps) => {
  const track = [...items, ...items];

  return (
    <div className="skills-marquee-row">
      <div
        className={`skills-marquee-track skills-marquee-track--${direction}`}
      >
        {track.map((skill, index) => (
          <div key={`${skill.label}-${index}`} className="skills-marquee-item">
            <SkillCard skill={skill} order={rowOffset + index} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="relative z-20">
        <SectionHead parallaxValue="skills" value="my skills" />
      </div>

      <div className="skills-marquee-wrapper relative z-10 mt-8 lg:mt-12 mb-6 lg:mb-8">
        <MarqueeRow items={topRow} direction="left" rowOffset={0} />
        <MarqueeRow items={bottomRow} direction="right" rowOffset={topRow.length} />
      </div>
    </section>
  );
};

export default Skills;
