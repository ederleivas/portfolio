import SectionTitle from "./SectionTitle";
import { skills } from "../project-assets/data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="py-20 align-element " id="skills">
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-slate-900 text-3xl font-medium tracking-wider capitalize">
          Tech Stack
        </h1>
      </div>
      <div className="py-16 grid gap-8 md:grid-col-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
