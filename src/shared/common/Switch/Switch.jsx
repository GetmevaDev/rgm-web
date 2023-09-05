/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import styles from "./Switch.module.scss";

export const Switch = ({ isOn, handleToggle, onColor }) => (
  <>
    <input
      checked={isOn}
      onChange={handleToggle}
      className={styles.switch_checkbox}
      type="checkbox"
    />
    <label
      style={{ background: isOn && onColor }}
      className={styles.switch_label}
      htmlFor="react-switch-new"
    >
      <span className={styles.switch_button} />
    </label>
  </>
);
