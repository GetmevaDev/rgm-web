import Image from "next/image";
import React from "react";

import styles from "./PledgeItem.module.scss";

export const PledgeItem = ({ title, description }) => (
  <div className={styles.bottom}>
    <div className={styles.image_inner}>
      <Image
        width={176}
        height={191}
        src="/svg/dots-black.svg"
        alt="dots-black"
        className={styles.dots}
      />
    </div>

    <div className={styles.going}>
      <h5 className={styles.title_seo}>{title}</h5>
      <p className={styles.description_seo}>{description}</p>
    </div>
  </div>
);
