import React from "react";

import { Typography } from "..";

import styles from "./KeywordProfile.module.scss";

export const KeywordProfile = () => (
  <div className={styles.keyword}>
    <div className={styles.keyword_inner}>
      <Typography tag="h2" size="title">
        Keyword Profile
      </Typography>

      <div className={styles.list_inner}>
        <ol className={styles.list}>
          <li>Endodontist in williston park</li>
          <li>Endodontist in williston park, ny</li>
          <li>Root canal in williston park</li>
          <li>Emergency dentistry in williston park</li>
          <li>Emergency dentistry in williston park, ny</li>
          <li> Apical surgery in williston park</li>
        </ol>
        <ol className={styles.list} start="7">
          <li>Endodontist in williston park</li>
          <li>Endodontist in williston park, ny</li>
          <li>Root canal in williston park</li>
          <li>Emergency dentistry in williston park</li>
          <li>Emergency dentistry in williston park, ny</li>
          <li> Apical surgery in williston park</li>
        </ol>
      </div>
    </div>
  </div>
);
