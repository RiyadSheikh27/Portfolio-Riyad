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
      <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-10">
        {projects?.map((project, index) => (
          <div
            key={project.id}
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-delay={index * 120}
            className="project-item group p-6 bg-[#1a2436e6] text-desc-color rounded-md"
          >
            <figure className="project-item-image overflow-hidden rounded-md h-60">
              <img
                src={project.image}
                alt={project.name}
                className="project-item-img w-full"
              />
            </figure>
            <h3 className="project-item-title mt-3 font-black">{project.name}</h3>
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
