import React from "react";

import { Border } from "../..";

import styles from "./WorkItem.module.scss";

export const WorkItem = ({ title, description }) => (
  <div className={styles.work_item}>
    <p className={styles.title}>{title}</p>
    <Border />
    <p className={styles.description}>{description}</p>
  </div>
);
