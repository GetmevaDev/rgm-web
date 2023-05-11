import classNames from "classnames";
import React from "react";

import { Typography } from "..";

import styles from "./KeywordProfile.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

export const KeywordProfile = ({
  numbers,
  startCenter,
  startRight,
  color = "white",
}) => (
  <div className={classNames(styles.keyword, colors[color])}>
    <div className={styles.keyword_inner}>
      <Typography tag="h2" size="title">
        Keyword Profile
      </Typography>

      <div className={styles.list_inner}>
        <ol className={numbers ? styles.list : styles.numbers}>
          <li>Endodontist in williston park</li>
          <li>Endodontist in williston park, ny</li>
          <li>Root canal in williston park</li>
          <li>Emergency dentistry in williston park</li>
          <li>Emergency dentistry in williston park, ny</li>
          <li> Apical surgery in williston park</li>
        </ol>
        <ol
          className={numbers ? styles.list : styles.numbers}
          start={startCenter}
        >
          <li>Endodontist in williston park</li>
          <li>Endodontist in williston park, ny</li>
          <li>Root canal in williston park</li>
          <li>Emergency dentistry in williston park</li>
          <li>Emergency dentistry in williston park, ny</li>
          <li> Apical surgery in williston park</li>
        </ol>

        {startRight && (
          <ol
            className={numbers ? styles.list : styles.numbers}
            start={startRight}
          >
            <li>Endodontist in williston park</li>
            <li>Endodontist in williston park, ny</li>
            <li>Root canal in williston park</li>
            <li>Emergency dentistry in williston park</li>
            <li>Emergency dentistry in williston park, ny</li>
            <li> Apical surgery in williston park</li>
          </ol>
        )}
      </div>
    </div>
  </div>
);
