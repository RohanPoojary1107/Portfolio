import React from "react";
import NavBar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
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
        <Footer />
      </Container>
    </div>
  );
};

export default App;
