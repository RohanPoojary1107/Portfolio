import { Dispatch, SetStateAction, createContext, useContext } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
type ThemeContextType = [Theme | null, Dispatch<SetStateAction<Theme | null>>];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("Theme context was not provided!");
  }

  return theme;
};

export { useTheme, ThemeContext, Theme };
