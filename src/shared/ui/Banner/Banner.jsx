import Image from "next/image";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Banner.module.scss";

export const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.image_inner}>
      <Image
        width={475}
        height={650}
        src="/images/robert.jpg"
        className={styles.image}
      />

      <Image
        width={176}
        height={191}
        src="svg/dots.svg"
        className={styles.dots}
      />
    </div>

    <div className={styles.banner_right}>
      <Typography tag="h2">
        Robert Gerov <span>Media</span>
      </Typography>

      <p className={styles.description}>
        Based in Times Square, ROBERT GEROV is a brand-builder and Award winning
        digital agency providing the very best in web development services. We
        are a team of cutting-edge web developers, software engineers,
        compliance experts, and marketing strategists—building custom
        experiences for businesses and their audiences.
      </p>
      <Button variant="contained">About us</Button>
    </div>
  </section>
);
