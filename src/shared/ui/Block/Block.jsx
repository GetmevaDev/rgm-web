import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Block.module.scss";

export const Block = ({
  title,
  description,
  image,
  reverse,
  width,
  height,
}) => (
  <div className={reverse ? styles.block : styles.block_reverse}>
    <div className={styles.left}>
      <Typography tag="h2" size="small">
        {title}
      </Typography>

      <p
        className={styles.description}
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
);
