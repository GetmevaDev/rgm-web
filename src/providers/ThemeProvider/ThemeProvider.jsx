import { useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY } from "@/shared/constants";
import { getCookies } from "@/shared/lib/cookies";

import { ETheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

const defaultTheme = getCookies(LOCAL_STORAGE_THEME_KEY) || ETheme.Light;

export const ThemeProvider = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
