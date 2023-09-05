import React from "react";

import styles from "./Radio.module.scss";

export const Radio = ({ label, name, value, ariaLabel, onChange, checked }) => (
  <div className={styles.radio}>
    <label htmlFor="Yes">
      <input
        className={styles.input}
        name={name}
        type="radio"
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      {label}
    </label>
  </div>
);
