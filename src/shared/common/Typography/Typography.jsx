import classNames from "classnames";
import React from "react";

import styles from "./Typography.module.scss";

const sizes = {
  mini: styles.mini,
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
  title: styles.title,
};

const colors = {
  white: styles.white,
  black: styles.black,
};

const transforms = {
  uppercase: styles.uppercase,
  capitalize: styles.capitalize,
};

export const Typography = ({
  tag = "h1",
  size = "medium",
  color = "black",
  transform = "uppercase",
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
        colors[color],
        transforms[transform]
      )}
    >
      {children}
    </Component>
  );
};
