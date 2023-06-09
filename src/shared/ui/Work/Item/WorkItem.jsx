import Image from "next/image";
import React from "react";

import { Border } from "../..";

import styles from "./WorkItem.module.scss";

export const WorkItem = ({ title, description, svg, size }) => (
  <div className={!svg ? styles.work_item : styles.work_item_image}>
    {svg && (
      <Image
        width={90}
        height={90}
        src={svg?.data?.attributes?.url}
        alt={title}
        className={styles.image}
      />
    )}
    <p className={!size ? styles.title : styles.title_size}>{title}</p>
    <div className={styles.border}>
      <Border />
    </div>
    <p className={styles.description}>{description}</p>
  </div>
);
