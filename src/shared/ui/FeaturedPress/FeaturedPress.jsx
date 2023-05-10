import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./FeaturedPress.module.scss";

export const FeaturedPress = () => (
  <div className={styles.featured}>
    <Typography tag="h2" color="title">
      ROBERTGEROV <span>FEATURED PRESS</span>
    </Typography>

    <div className={styles.images}>
      <Image width={717} height={237} src="/images/featured.jpg" />
    </div>
  </div>
);
