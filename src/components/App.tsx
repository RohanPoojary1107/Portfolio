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
import {
  ThemeContext,
  Theme,
  getThemeLocalStorage,
  setThemeLocalStorage,
} from "../utilities/theme";
import "./App.css";
import { useStaticQuery, graphql } from "gatsby";

type AppProps = {
  isInvalid?: boolean;
};

const App = ({ isInvalid = false }: AppProps) => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const setMode = (mode: Theme) => {
    setTheme(mode);
    setThemeLocalStorage(mode);
  };

  useEffect(() => {
    const localTheme = getThemeLocalStorage();
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode(Theme.DARK)
      : localTheme
      ? setTheme(localTheme)
      : setMode(Theme.LIGHT);
  }, []);

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  const resume: string = data.allFile.edges[0].node.publicURL;

  return (
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Container fluid="lg">
          <NavBar resume={resume} />
          {isInvalid && <NotFound />}
          {!isInvalid && (
            <>
              <Intro />
              <About resume={resume} />
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
