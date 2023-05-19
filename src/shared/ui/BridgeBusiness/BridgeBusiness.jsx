import React from "react";

import { Typography } from "..";

import styles from "./BridgeBusiness.module.scss";

export const BridgeBusiness = ({
  title,
  subTitle,
  description,
  date,
  items,
}) => (
  <section className={styles.bridge}>
    <div className={styles.left}>
      <Typography tag="h3" size="mini">
        {title}
        <span className={styles.color}> {subTitle}</span>
      </Typography>

      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
    <div className={styles.right}>
      {items?.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.number}>{item.number}</div>
          <div className={styles.right_description}>{item.description}</div>
        </div>
      ))}

      <div className={styles.data}>*Data for Q4, 2022</div>
    </div>
  </section>
);
