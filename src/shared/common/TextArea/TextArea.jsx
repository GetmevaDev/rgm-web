import classNames from "classnames";
import React from "react";

import styles from "./TextArea.module.scss";

export const TextArea = ({ id, placeholder, text, error, ...props }) => (
  <label htmlFor={id} className={styles.label}>
    <span className={styles.placeholder}>{placeholder}</span>
    <textarea
      className={classNames(styles.textarea, {
        [styles.input_error]: !!error,
      })}
      id={id}
      placeholder={text}
      {...props}
    />
    <span className={styles.error}>{error}</span>
  </label>
);
