import Image from "next/image";
import React from "react";

import styles from "./OurService.module.scss";

export const OurService = () => (
  <div className={styles.our_service}>
    <Image
      src="/svg/tags.svg"
      width={60}
      height={60}
      alt="item"
      className={styles.svg}
    />

    <h5 className={styles.title}>Web Development</h5>

    <div className={styles.border} />
    <p className={styles.description}>
      Beyond traditional marketing, offering our valued clients the very best in
      modern design concepts and innovative user experiences.
    </p>
  </div>
);
