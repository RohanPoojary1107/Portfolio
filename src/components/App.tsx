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
import { ThemeContext, Theme } from "../utilities/theme";
import "./App.css";

type AppProps = {
  isInvalid?: boolean
}

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
          <Seo />
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
