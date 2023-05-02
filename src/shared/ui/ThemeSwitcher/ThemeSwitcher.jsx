import classNames from "classnames";
import { memo } from "react";

import { ETheme } from "@/providers";
import { useTheme } from "@/shared/hooks";

import { Button } from "..";

export const ThemeSwitcher = memo(({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} className={classNames("", {}, [className])}>
      {theme === ETheme.Light ? "light" : "dark"}
    </Button>
  );
});
