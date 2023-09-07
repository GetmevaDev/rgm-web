import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./OurService.module.scss";

export const OurService = ({ title, description, svg, slug }) => (
  <Link href={slug} className={styles.our_service}>
    <div>
      <Image
        src={svg?.data?.attributes?.url}
        width={60}
        height={60}
        alt={title}
        className={styles.svg}
      />

      <h5 className={styles.title}>{title}</h5>

      <div className={styles.border} />
      <p className={styles.description}>{description}</p>
    </div>
  </Link>
);
