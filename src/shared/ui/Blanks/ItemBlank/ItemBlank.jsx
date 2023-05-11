import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { Typography } from "../..";

import styles from "./ItemBlank.module.scss";

const colors = {
  white: styles.white,
  gray: styles.gray,
};

export const ItemBlank = ({
  color,
  reverse,
  title,
  description,
  image,
  width,
  height,
}) => (
  <div className={classNames(styles.blank, colors[color])}>
    <div className={reverse ? styles.blank_inner : styles.blank_inner_reverse}>
      <div className={styles.left}>
        <Typography tag="h2">{title}</Typography>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.right}>
        <Image width={width} height={height} src={image} />
      </div>
    </div>
  </div>
);
