import {createContext, useContext} from "react";

export const ThemeContext = createContext('light');

export const useTheme = () => {
    const theme = useContext(ThemeContext);

    if(!theme) {
        throw new Error("Theme context was not provided!");
    }

    return theme;
}