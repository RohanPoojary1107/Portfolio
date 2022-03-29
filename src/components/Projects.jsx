import React from "react";
import Header from "./SectionHeader";
import { grid } from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

import { PROJECT_LIST } from "../data";

const Projects = () => {
  return (
    <div id="projects">
      <Header sectionName="projects" />
      <div className={grid}>
        {PROJECT_LIST.map((project) => (
          <ProjectCard {...project} key={project.name} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
