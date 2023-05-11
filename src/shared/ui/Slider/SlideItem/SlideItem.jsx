import Image from "next/image";
import React from "react";

import styles from "./SlideItem.module.scss";

export const SlideItem = ({ title, image, description }) => (
  <div className={styles.slide}>
    <div className={styles.image_inner}>
      <Image
        width={370}
        height={240}
        src={image}
        alt="slide"
        className={styles.image}
      />
    </div>
    <div className={styles.title}>{title}</div>
    <p className={styles.description}>{description}</p>
  </div>
);
