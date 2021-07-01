import React from "react";
import NavBar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Container from "react-bootstrap/Container";
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Container>
        <NavBar />
        <Intro />
        <About />
        <Experience />
      </Container>
    </div>
  );
};

export default App;
