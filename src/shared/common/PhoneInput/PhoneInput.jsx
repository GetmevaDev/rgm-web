import classNames from "classnames";
import React, { useState } from "react";

import { formatPhoneNumber } from "@/shared/lib/formatNumber";

import styles from "./PhoneInput.module.scss";

export const PhoneNumberInput = ({
  value,
  onChange,
  id,
  placeholder,
  error,
}) => {
  const [formattedValue, setFormattedValue] = useState(
    formatPhoneNumber(value)
  );

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);

    setFormattedValue(formattedValue);
    onChange(inputValue);
  };
  return (
    <label className={styles.label} htmlFor={id}>
      <span className={styles.placeholder}>{placeholder}</span>
      <input
        type="text"
        value={formattedValue}
        onChange={handleInputChange}
        className={classNames(styles.input, {
          [styles.input_error]: !!error,
        })}
        placeholder="Enter phone number"
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};
