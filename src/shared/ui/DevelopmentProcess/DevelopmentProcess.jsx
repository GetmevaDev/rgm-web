import React from "react";

import { Typography } from "..";

import { ProcessItem } from "./Item/ProcessItem";

import styles from "./DevelopmentProcess.module.scss";

export const DevelopmentProcess = ({ items, title, description }) => (
  <div className={styles.process}>
    <div className={styles.process_inner}>
      <Typography tag="h2" size="title" className={styles.title}>
        {title}
      </Typography>

      <div className={styles.main}>
        <div className={styles.left}>
          <ProcessItem items={items} />
        </div>
        <div
          className={styles.right}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </div>
  </div>
);
