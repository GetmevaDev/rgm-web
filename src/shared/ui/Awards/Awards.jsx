import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./Awards.module.scss";

export const Awards = () => (
  <div className={styles.awards}>
    <div className={styles.awards_inner}>
      <Typography tag="h2" color="title">
        Awards & <span>Partnerships</span>
      </Typography>

      <div className={styles.card}>
        <Image src="/images/awards.jpg" width={1170} height={454} />
      </div>
    </div>
  </div>
);
