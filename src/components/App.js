import React from "react";
import NavBar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Container fluid="lg">
        <NavBar />
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Footer /> 
      </Container>
    </div>
  );
};

export default App;
