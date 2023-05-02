import classNames from "classnames";
import React from "react";

import styles from "./Typography.module.scss";

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

const colors = {
  white: styles.white,
  black: styles.black,
};

export const Typography = ({
  tag = "h1",
  size = "medium",
  color = "black",
  children,
  className,
}) => {
  const Component = tag;
  return (
    <Component
      className={classNames(
        styles.typography,
        className,
        sizes[size],
        colors[color]
      )}
    >
      {children}
    </Component>
  );
};
