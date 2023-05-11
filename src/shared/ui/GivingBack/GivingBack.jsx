import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./GivingBack.module.scss";

export const GivingBack = () => (
  <div className={styles.giving}>
    <div className={styles.left}>
      <div className={styles.image}>
        <Image src="/images/assistance.svg" width={130} height={130} />
      </div>

      <div className={styles.text}>
        <Typography tag="div" size="small">
          Giving Back
        </Typography>
        <p className={styles.description}>
          A portion of our proceeds is donated to local charities.
        </p>
      </div>
    </div>
    <div className={styles.right}>
      <Image width={176} height={194} src="/svg/dots.svg" />
    </div>
  </div>
);
