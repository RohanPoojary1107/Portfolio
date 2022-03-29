import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Intro from "./Intro";
import About from "./About";
import Seo from "./Seo";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./NotFound";
import { ThemeContext } from "../utilities/theme";
import "./App.css";

const App = ({ data, isInvalid = false }) => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setMode(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      {isInvalid ? (
        <ThemeContext.Provider value={theme}>
          <Seo
            title="Rohan Poojary - 404"
            description="Oops! Page not Found :("
          />
          <Container fluid="lg">
            <NavBar toggleTheme={toggleTheme} />
            <NotFound />
          </Container>
        </ThemeContext.Provider>
      ) : (
        <ThemeContext.Provider value={theme}>
          <Seo data={data} />
          <Container fluid="lg">
            <NavBar toggleTheme={toggleTheme} />
            <Intro />
            <About />
            <Experience />
            <Projects />
            <Footer />
            <ScrollToTop />
          </Container>
        </ThemeContext.Provider>
      )}
    </div>
  );
};

export default App;
