import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./NotFound";
import { ThemeContext, Theme } from "../utilities/theme";
import "./App.css";
import { Alert } from "react-bootstrap";

type AppProps = {
  isInvalid?: boolean;
};

const App = ({ isInvalid = false }: AppProps) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const setMode = (mode: Theme) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme: Theme = window.localStorage.getItem("theme") as Theme;
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode(Theme.DARK)
      : localTheme
      ? setTheme(localTheme)
      : setMode(Theme.LIGHT);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setMode(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={theme}>
        <Container fluid="lg">
          <NavBar toggleTheme={toggleTheme} />
          {isInvalid && <NotFound />}
          {!isInvalid && (
            <>
              <Alert variant="primary" style={{ color: "#112A46" }}>
                <b className="open-to-work">Open to work starting June 2023!</b>
                <br />
                I'm looking for New Grad roles in Software Development. If you
                or someone in your circle is hiring, please feel free to reach
                out on{" "}
                <a
                  href="https://www.linkedin.com/in/rohanpoojary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                  style={{color: "#112A46"}}
                >
                  LinkedIn
                </a>{" "}
                🙌
              </Alert>
              <Intro />
              <About />
              <Experience />
              <Projects />
              <Footer />
              <ScrollToTop />
            </>
          )}
        </Container>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
