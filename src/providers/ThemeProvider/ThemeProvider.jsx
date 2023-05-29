import { useEffect, useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY } from "@/shared/constants";
import { getCookie } from "@/shared/lib";

import { ETheme } from "./theme";
import { ThemeContext } from "./ThemeContext";

// const ISSERVER = typeof window === "undefined";
// let defaultTheme;

// if (!ISSERVER) {
//   defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY || ETheme.Light);
// }

export const ThemeProvider = ({ children, initialTheme }) => {
  const defaultTheme = getCookie(LOCAL_STORAGE_THEME_KEY || ETheme.Light);

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
