import React from "react";
import Header from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  card,
  cardContent,
  cardTitle,
  cardLang,
  cardDesc,
  container,
} from "./Projects.module.css";

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
      <Row noGutters className={`row ${container}`}>
        {Object.keys(projects).map((key, i) => (
          <Col md={4} sm={6} xs={12} className={`col ${card}`}>
            <div className={cardContent}>
              <div className={cardTitle}>{key}</div>
              <div className={cardDesc}>{projects[key]["desc"]}</div>
              <div className={cardLang}>
                Languages: {projects[key]["techStack"]}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
