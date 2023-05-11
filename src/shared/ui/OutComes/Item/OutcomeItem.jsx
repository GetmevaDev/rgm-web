import React from "react";

import { Border } from "../..";

import styles from "./OutcomeItem.module.scss";

export const OutcomeItem = ({ number, description }) => (
  <div className={styles.item}>
    <div className={styles.number}>1</div>
    <Border />
    <div className={styles.description}>
      Robust mobile responsive user experience
    </div>
  </div>
);
