import React from "react";

import { Logo, Navigation } from "@/shared/ui";

import styles from "./Header.module.scss";

export const Header = ({ navigation }) => (
  <header className={styles.header}>
    <Logo
      logo={navigation?.Header?.Logo?.data?.attributes?.url}
      text={navigation?.Header?.text}
    />

    <Navigation items={navigation?.HeaderItems} />
  </header>
);
