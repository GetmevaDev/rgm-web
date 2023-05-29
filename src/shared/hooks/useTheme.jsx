/* eslint-disable indent */
import { useContext, useEffect } from "react";

import { ETheme, ThemeContext } from "@/providers";

import { LOCAL_STORAGE_THEME_KEY } from "../constants";
import { setCookies } from "../lib/cookies";

export const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme;
    switch (theme) {
      case ETheme.Dark:
        newTheme = ETheme.Light;
        break;
      case ETheme.Light:
        newTheme = ETheme.Dark;
        break;
      default:
        newTheme = ETheme.Light;
        break;
    }

    setTheme(newTheme);
    // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setCookies(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
};
