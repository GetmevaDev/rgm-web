import classNames from "classnames";
import React from "react";

import styles from "./Description.module.scss";

const weights = {
  semi_bold: styles.semi_bold,
  medium: styles.medium,
};

export const Description = ({ description, sub, weight = "medium" }) => (
  <div className={styles.description_inner}>
    <p className={classNames(styles.description, weights[weight])}>
      {description}
    </p>
    {sub && (
      <p className={styles.sub}>*All plans require a 6 month commitment.*</p>
    )}
  </div>
);
