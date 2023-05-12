import React from "react";

import { Typography } from "..";

import styles from "./Pledge.module.scss";

export const Pledge = () => (
  <div className={styles.plegde}>
    <Typography tag="h2" size="small">
      MY PLEDGE TO YOU
    </Typography>

    <div className={styles.description}>
      I am forthcoming as to what my SEO services can accomplish and am upfront
      about my methods. For example, we will ONLY engage in white-hat tactics in
      pursuing your goals, in accordance with guidelines setforth by the search
      engines.
    </div>
  </div>
);
