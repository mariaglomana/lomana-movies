/* eslint-disable indent */
import { useState, useEffect, useCallback } from "react";
import themeObject from "assets/theme";

import { Theme } from "@material-ui/core/styles";
import { DarkModeState } from "types";

const PREFER_DARK_QUERY = "(prefers-color-scheme: dark)";

const updateTheme = (theme: Theme | any, mode: DarkModeState) => ({
  ...theme,
  palette: { ...theme.palette, type: mode },
});

const getInitialMode = () => {
  const lsVal = window.localStorage.getItem("colorMode");
  if (lsVal) {
    return lsVal === "dark" ? "dark" : "light";
  } else {
    return window.matchMedia(PREFER_DARK_QUERY).matches ? "dark" : "light";
  }
};

export default function useDarkMode(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme | any>(themeObject);

  const toggleDarkMode = useCallback(
    (configMode?: DarkModeState) => {
      const newMode = !!configMode
        ? configMode
        : theme.palette.type === "light"
        ? "dark"
        : "light";
      const updatedTheme = updateTheme(theme, newMode);
      setTheme(updatedTheme as Theme);
    },
    [updateTheme, setTheme, theme],
  );

  useEffect(() => {
    const initialThemeObject = updateTheme(themeObject, getInitialMode());
    setTheme(initialThemeObject);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(PREFER_DARK_QUERY);
    const handleChange = () => {
      toggleDarkMode(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("colorMode", theme.palette.type);
  }, [theme]);
  // we're doing it this way instead of as an effect so we only
  // set the localStorage value if they explicitly change the default

  return [theme, toggleDarkMode];
}
