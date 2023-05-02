import React from "react";

import { Logo, Navigation } from "@/shared/ui";

import styles from "./Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <Logo />

    <Navigation />
  </header>
);
