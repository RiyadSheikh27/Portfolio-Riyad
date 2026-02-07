import SectionHead from "../SectionHead";
import SkillCard from "./SkillCard";
import { skills } from "../../primitives/skills";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <SectionHead parallaxValue="skills" value="my skills" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-8 lg:mt-12 mb-6 lg:mb-8">
        {skills?.map((skill, index) => (
          <SkillCard key={skill.label} skill={skill} order={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Skills;