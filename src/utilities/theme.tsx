import { createContext, useContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeContext = createContext(Theme.LIGHT);

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Theme context was not provided!");
  }

  return theme;
};
