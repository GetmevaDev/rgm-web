import React from "react";
import { Controller, useController, useForm } from "react-hook-form";

import styles from "./Input.module.scss";

export const Input = ({ name, control, label }) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <span className={styles.block}>
      <label htmlFor={label} aria-label={label}>
        {label}
      </label>

      <input
        type="text"
        className={styles.input}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
      />
    </span>
  );
};
