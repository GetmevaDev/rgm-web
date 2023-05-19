import React from "react";

import { InfoItem } from "./Item/InfoItem";

import styles from "./Info.module.scss";

export const Info = ({ slides }) => (
  <div className={styles.info}>
    <div className={styles.info_inner}>
      {slides?.map((item) => (
        <InfoItem {...item} />
      ))}
    </div>
  </div>
);
