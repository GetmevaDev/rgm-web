import Image from "next/image";
import React from "react";

import styles from "./InfoItem.module.scss";

export const InfoItem = ({ title, image, description }) => (
  <div className={styles.slide}>
    <div className={styles.image_inner}>
      <Image
        width={370}
        height={240}
        src={image?.data?.attributes?.url}
        alt={title}
        className={styles.image}
      />
    </div>
    <div className={styles.title}>{title}</div>
    <p
      className={styles.description}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);
