import React, {useState} from "react";
import NavBar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={`app ${theme}`}>
      <Container fluid="lg">
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
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
