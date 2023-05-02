import classNames from "classnames";
import { memo, useEffect, useState } from "react";

import { ETheme } from "@/providers";
import { useTheme } from "@/shared/hooks";

import { Button } from "..";

export const ThemeSwitcher = memo(({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const color = theme === ETheme.Light ? <div>light</div> : <div>dark</div>;
  return (
    <Button onClick={toggleTheme} className={classNames("", {}, [className])}>
      {color}
    </Button>
  );
});
