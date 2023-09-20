import Image from "next/image";
import React from "react";

import styles from "./DigitalService.module.scss";

export const DigitalService = ({ title, description, svg }) => (
  <>
    <div className={styles.left}>
      <div className={styles.logo}>
        <Image
          width={90}
          height={90}
          alt={svg?.data?.attributes?.name}
          src={svg?.data?.attributes?.url}
        />
      </div>
    </div>

    <div className={styles.right}>
      <div className={styles.title}>{title}</div>
      <div className={styles.border} />
      <div className={styles.description}>{description}</div>
    </div>
  </>
);
