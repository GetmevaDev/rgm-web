import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Banner.module.scss";

export const Banner = ({
  title,
  subTitle,
  description,
  image,
  button,
  link,
}) => (
  <>
    <section className={styles.banner}>
      <div className={styles.image_inner}>
        <Image
          width={475}
          height={650}
          src={image}
          alt="robert"
          className={styles.image}
        />

        <Image
          width={176}
          height={191}
          src="svg/dots.svg"
          alt="dots"
          className={styles.dots}
        />
      </div>

      <div className={styles.banner_right}>
        <Typography tag="h2">
          {title} <span className={styles.color}>{subTitle}</span>
        </Typography>

        <p className={styles.description}>{description}</p>
        <Link href={link}>
          <Button variant="contained">{button}</Button>
        </Link>
      </div>
    </section>
    <div className={styles.border} />
  </>
);
