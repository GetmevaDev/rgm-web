import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Block.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

const positions = {
  left: styles.left,
  center: styles.center,
  right: styles.right,
};

export const Block = ({
  title,
  description,
  image,
  subTitle,
  reverse,
  width,
  miniTitle,
  height,
  color = "white",
  position = "left",
}) => (
  <div className={classNames(styles.block_inner, colors[color])}>
    <div className={reverse ? styles.block : styles.block_reverse}>
      <div className={styles.left}>
        <Typography tag="h2" size="small">
          {title}
        </Typography>

        <p className={styles.sub_title}>{subTitle}</p>

        <p className={classNames(styles.mini_title, positions[position])}>
          {miniTitle}
        </p>

        <p
          className={classNames(
            !subTitle && !miniTitle
              ? styles.description
              : styles.description_sub,
            positions[position]
          )}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>

      <div className={styles.right}>
        <Image
          width={width}
          height={height}
          src={image}
          className={reverse ? styles.image : styles.image_reverse}
        />

        <Image
          width={176}
          height={191}
          src="/svg/dots.svg"
          alt="dots"
          className={reverse ? styles.dots : styles.dots_reverse}
        />
      </div>
    </div>
  </div>
);
