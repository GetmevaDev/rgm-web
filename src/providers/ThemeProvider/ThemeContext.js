import { createContext } from "react";

import { ETheme } from "./theme";

export const ThemeContext = createContext({
  theme: ETheme.Light,
  setTheme: (theme) => undefined,
});
