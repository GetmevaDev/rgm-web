import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Block.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

export const Block = ({
  title,
  description,
  image,
  subTitle,
  reverse,
  width,
  height,
  color = "white",
}) => (
  <div className={classNames(styles.block_inner, colors[color])}>
    <div className={reverse ? styles.block : styles.block_reverse}>
      <div className={styles.left}>
        <Typography tag="h2" size="small">
          {title}
        </Typography>

        <p className={styles.sub_title}>{subTitle}</p>

        <p
          className={!subTitle ? styles.description : styles.description_sub}
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
