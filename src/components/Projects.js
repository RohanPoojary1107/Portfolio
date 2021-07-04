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

const Projects = () => {
  const projects = {
    "TDSB Homework Management Interface": {
      desc: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      techStack: "Python (Flask), Vue.js, Bootstrap, SQL",
      link: "https://github.com/gazijarin/TDSBHomeworkManagement",
      open: "https://tdsb-app.herokuapp.com/",
    },
    "Adam A.I.": {
      desc: "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
      techStack: "Javascript, HTML / CSS",
      link: "https://github.com/gazijarin/adamai",
      open: "https://gazijarin.github.io/AdamAI/",
    },
    Truth: {
      desc: "A three.js simulation of the planet system revolving around a monolith.",
      techStack: "Three.js",
      link: "https://github.com/gazijarin/truth",
      open: "https://gazijarin.github.io/Truth/",
    },
    "Odin Bot": {
      desc: "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      techStack: "Javascript, Node.js, Natural NLP, Telegram API",
      link: "https://github.com/gazijarin/OdinBot",
      open: "",
    },
    "Game Centre": {
      desc: "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      techStack: "Java, Android Studio",
      link: "https://github.com/gazijarin/gamecentre",
      open: "",
    },
    "Minimax Stonehenge": {
      desc: "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      techStack: "Python",
      link: "https://github.com/gazijarin/stonehenge",
      open: "",
    },
  };

  return (
    <div id="projects">
      <Header sectionName={`<projects />`} />
      <div className={grid}>
        {Object.keys(projects).map((key, i) => (
          <div className={card}>
            <>
              <div className={cardHeader}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31.5"
                  height="36"
                  viewBox="0 0 31.5 36"
                  dangerouslySetInnerHTML={{ __html: book }}
                />
                <div className={cardTitle}>{key}</div>
              </div>
              <div className={cardContent}>
                <div className={cardDesc}>{projects[key]["desc"]}</div>
                <div className={cardLang}>
                  {/* Languages: {projects[key]["techStack"]} */}
                  <ul>
                    <li>Python</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </>
            <div className={cardFooter}>
              {projects[key]["isPrivate"] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31.5"
                  height="36"
                  viewBox="0 0 31.5 36"
                  dangerouslySetInnerHTML={{ __html: lock }}
                />
              ) : (
                <a href="#">
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
