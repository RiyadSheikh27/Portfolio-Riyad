import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHead from "../SectionHead";
import Modal from "./Modal";
import { ProjectProps } from "../../types";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [selectedProject, setSelectedProject] = useState<
    ProjectProps | undefined
  >();
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="section">
      <SectionHead parallaxValue="projects" value="my projects" />
      <div className="grid-cols-3 gap-10 lg:grid lg:mt-20">
        {projects?.map((project) => (
          <div
            key={project.id}
            data-aos="zoom-out-dow"
            data-aos-duration="2000"
            className="p-6 bg-[#1a2436e6] text-desc-color rounded-md"
          >
            <figure className="overflow-hidden rounded-md h-60">
              <img
                src={project.image}
                className="w-full transition-transform duration-[10000ms] hover:-translate-y-[80%]"
              />
            </figure>
            <h3 className="mt-3 font-black">{project.name}</h3>
            <div className="z-40 flex justify-center gap-4 pt-6">
              <label
                onClick={() => setSelectedProject(project)}
                htmlFor="projectDetailsModal"
                className="cursor-pointer project-card"
              >
                <span>See Details</span> <FaExternalLinkAlt />
              </label>
              <a
                href={project.demoUrl}
                target="_blank"
                className="project-card"
              >
                <span>Live Demo</span> <FaExternalLinkAlt />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="project-card"
              >
                <span>Github Link</span> <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && <Modal project={selectedProject} />}
    </section>
  );
};

export default Projects;
