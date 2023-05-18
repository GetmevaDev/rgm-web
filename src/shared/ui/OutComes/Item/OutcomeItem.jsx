import React from "react";

import { Border } from "../..";

import styles from "./OutcomeItem.module.scss";

export const OutcomeItem = ({ title, description, border }) => (
  <div className={styles.item}>
    <div className={styles.number}>{title}</div>
    {border && <Border />}
    <div className={styles.description}>{description}</div>
  </div>
);
