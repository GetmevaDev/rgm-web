import React from "react";

import styles from "./Description.module.scss";

export const Description = ({ description, sub }) => (
  <div className={styles.description_inner}>
    <p className={styles.description}>
      Every search query delivers either information, the answers to a problem,
      or the product they want. If you want your business to be discovered, you
      need to optimize for the desired user intent that fits your goals. Pricing
      is listed below. If you do not see a plan that fits your budget or goal,
      feel free to get in-touch and let us know your particular needs.
    </p>
    {sub && (
      <p className={styles.sub}>*All plans require a 6 month commitment.*</p>
    )}
  </div>
);
