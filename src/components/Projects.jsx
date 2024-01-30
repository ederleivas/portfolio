import ProjectsCard from "./ProjectsCard";
import { projects } from "../project-assets/data";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className=" py-2 align-element" id="projects">
      <h1 className="text-slate-900 text-3xl font-medium tracking-wider capitalize">
        Web Creations
      </h1>
      <div
        className="py-16 grid lg:grid-cols-2 
      xl:grid-cols-3 gap-8"
      >
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
