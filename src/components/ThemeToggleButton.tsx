import React from "react";
import { useTheme } from "../utilities/theme";
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

type ThemeToggleButtonProps = {
  onClick: () => void;
};

const ThemeToggleButton = ({ onClick }: ThemeToggleButtonProps) => {
  const theme = useTheme();
  const lightMode = theme === "light";

  return (
    <button className={changeMode} onClick={onClick}>
      <div className={imgWrapper}>
        <img
          alt={`toggle ${theme === "light" ? "dark" : "light"} mode`}
          src={theme === "light" ? moon : sun}
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
