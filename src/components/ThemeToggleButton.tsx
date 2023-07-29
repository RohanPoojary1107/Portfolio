import React from "react";
import { Theme, useTheme } from "../utilities/theme";
import {
  changeMode,
  modeIcon,
  imgWrapper,
  sunRings,
  starTop,
  starBottom,
} from "./ThemeToggleButton.module.css";

import moon from "../static/moon.svg";
import topStar from "../static/top-star.svg";
import bottomStar from "../static/bottom-star.svg";
import sun from "../static/sun.svg";
import sunRing from "../static/glow.svg";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useTheme();
  const lightMode = theme === Theme.LIGHT;

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <button className={changeMode} onClick={toggleTheme}>
      <div className={imgWrapper}>
        <img
          alt={`toggle ${
            theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
          } mode`}
          src={theme === Theme.LIGHT ? moon : sun}
          className={modeIcon}
        />
        {!lightMode && <img className={sunRings} src={sunRing} alt="" />}
        {lightMode && (
          <>
            <img className={starTop} src={topStar} alt="" />
            <img className={starBottom} src={bottomStar} alt="" />
          </>
        )}
      </div>
    </button>
  );
};

export default ThemeToggleButton;
