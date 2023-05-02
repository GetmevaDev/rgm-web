import React from "react";

import { Typography } from "..";

import { OurService } from "./Item/OurService";

import styles from "./OurServices.module.scss";

export const OurServices = () => (
  <div className={styles.our_services}>
    <Typography tag="h3" size="small">
      Our Suite of Digital Services
    </Typography>
    <p className={styles.description}> our Suite of Digital services</p>

    <div className={styles.services}>
      <OurService />
      <OurService />
      <OurService />
      <OurService />
      <OurService />
      <OurService />
      <OurService />
      <OurService />
      <OurService />
      <OurService />
    </div>
  </div>
);
