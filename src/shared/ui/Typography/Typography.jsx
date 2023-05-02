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

const places = {
  center: styles.center,
  right: styles.right,
  left: styles.left,
};

export const Typography = ({
  tag = "h1",
  size = "medium",
  color = "black",
  place = "center",
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
        places[place]
      )}
    >
      {children}
    </Component>
  );
};
