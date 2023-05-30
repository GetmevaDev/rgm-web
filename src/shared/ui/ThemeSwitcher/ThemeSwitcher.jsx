/* eslint-disable jsx-a11y/label-has-associated-control */
import cx from "classnames";
import Image from "next/image";
import React from "react";

import { ETheme } from "@/providers";
import { useLocalStorage, useTheme } from "@/shared/hooks";
import { setCookies } from "@/shared/lib/cookies";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const [checked, setChecked] = useLocalStorage("checked", false);

  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    // localStorage.setItem("theme", theme);
    setCookies("theme", theme);
  }, [theme]);

  return (
    <div className={styles.switchContainer}>
      {theme === ETheme.Light ? (
        <Image width={25} height={25} src="/svg/theme.svg" alt="theme" />
      ) : (
        <Image width={25} height={25} src="/svg/theme-dark.svg" alt="theme" />
      )}

      <label className={styles.switch}>
        <input
          type="checkbox"
          value={checked}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span
          onClick={toggleTheme}
          className={cx(
            styles.slider,
            styles.round,
            theme === ETheme.Light ? styles.dark : styles.light
          )}
        />
      </label>
    </div>
  );
};
