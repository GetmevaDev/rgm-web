import classNames from "classnames";
import React from "react";

import styles from "./TextArea.module.scss";

export const TextArea = ({ id, placeholder, error, ...props }) => (
  <label className={styles.label} htmlFor={id}>
    <span className={styles.placeholder}>{placeholder}</span>
    <textarea
      className={classNames(styles.textarea, {
        [styles.input_error]: !!error,
      })}
      id={id}
      {...props}
    />
    {error && <span className={styles.error}>{error}</span>}
  </label>
);
