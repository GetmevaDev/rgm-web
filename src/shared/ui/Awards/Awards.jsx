import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Awards.module.scss";

export const Awards = ({ title, subTitle, images }) => (
  <div className={styles.awards}>
    <div className={styles.awards_inner}>
      <Typography tag="h2" size="title">
        {title} <span>{subTitle}</span>
      </Typography>

      <div className={styles.card}>
        {images?.map((img) => (
          <Image
            src={img?.attributes?.url}
            width={img?.attributes?.width}
            alt={img?.attributes?.name}
            height={img?.attributes?.height}
          />
        ))}
      </div>
    </div>
  </div>
);
