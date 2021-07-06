import React from "react";
import Header from "./SectionHeader";
import {
  card,
  cardContent,
  cardTitle,
  cardLang,
  cardDesc,
  cardHeader,
  cardFooter,
  grid,
} from "./Projects.module.css";
import { github, book, lock } from "../icons.js";

const projectList = [
  {
    name: "Video Editor",
    desc: "A simple, user friendly video editor on the Web.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    isPrivate: false,
    link: "https://github.com/RohanPoojary1107/Video-editor",
  },
  {
    name: "Fortnite 2D MMOG",
    desc: "A 2-dimentional MMOG implementation of Fortnite built using WebSockets.",
    techStack: ["React", "Node.js", "Express", "mobile API"],
    isPrivate: true,
    link: "",
  },
  {
    name: "Arezue",
    desc: "An annoymous hiring platform aimed to reduce discrimination in the job hiring process.",
    techStack: ["Flutter", "Dart", "Node.js", "Express"],
    isPrivate: false,
    link: "https://github.com/RohanPoojary1107/Arezue-Frontend",
  },
  {
    name: "Othello",
    desc: "A two player board game made using object-oriented design principles and design patterns like MVC.",
    techStack: ["Java", "JavaFX", "CSS", "Agile"],
    isPrivate: true,
    link: "",
  },
  {
    name: "Vigilant App",
    desc: "An app dedicated to increase public safety and awareness by using quick and easy to deploy Geofence technology.",
    techStack: ["Java", "Firebase", "Radar API"],
    isPrivate: false,
    link: "https://github.com/RohanPoojary1107/MyVigilantApp",
  },
  {
    name: "Chat Server & Client",
    desc: "A TCP chat server and client following a text-based protocol and ability to share emotes!",
    techStack: ["C", "Make"],
    isPrivate: true,
    link: "",
  },
  {
    name: "Doodle Jump",
    desc: "A basic implementation of Doodle Jump, made completely using assembly programming following MIPS architecture.",
    techStack: ["Assembly", "MARS"],
    isPrivate: true,
    link: "",
  },
  {
    name: "Spreadsheet Software",
    desc: "A static type inferencer and checker for a spreadsheet language.",
    techStack: ["Racket", "Haskell"],
    isPrivate: true,
    link: "",
  },
  {
    name: "Sound Manipulation",
    desc: "Manipulating sounds by adding sound effects to them like fade-in, fade-out and panning from left to right.",
    techStack: ["C", "Make"],
    isPrivate: true,
    link: "",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <Header sectionName={`<projects />`} />
      <div className={grid}>
        {projectList.map((project) => (
          <div className={card} key={project.name}>
            <>
              <div className={cardHeader}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31.5"
                  height="36"
                  viewBox="0 0 31.5 36"
                  dangerouslySetInnerHTML={{ __html: book }}
                />
                <div className={cardTitle}>{project.name}</div>
              </div>
              <div className={cardContent}>
                <div className={cardDesc}>{project.desc}</div>
                <div className={cardLang}>
                  <ul>
                    {project.techStack.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
            <div className={cardFooter}>
              {project.isPrivate ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31.5"
                  height="36"
                  viewBox="0 0 31.5 36"
                  dangerouslySetInnerHTML={{ __html: lock }}
                />
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.75"
                    height="27.001"
                    viewBox="0 0 33.75 27.001"
                    dangerouslySetInnerHTML={{ __html: github }}
                  />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
