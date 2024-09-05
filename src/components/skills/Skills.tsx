import SectionHead from "../SectionHead";
import SkillCard from "./SkillCard";
import { skills } from "../../primitives/skills";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <SectionHead parallaxValue="skills" value="my skills" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 lg:mt-20 lg:mb-8">
        {skills?.map((skill, index) => (
          <SkillCard skill={skill} order={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
