import React from "react";

import { ItemBlank } from "./ItemBlank/ItemBlank";

import styles from "./Blanks.module.scss";

export const Blanks = ({ blanks }) => (
  <div className={styles.blanks}>
    {blanks.map((item) => (
      <ItemBlank
        color={item.color}
        reverse={item.reverse}
        key={item.id}
        {...item}
      />
    ))}
  </div>
);
