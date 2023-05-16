import React from "react";

import styles from "./BigDescription.module.scss";

export const BigDescription = ({ description }) => (
  <div
    className={styles.big_description}
    dangerouslySetInnerHTML={{ __html: description }}
  />
);
