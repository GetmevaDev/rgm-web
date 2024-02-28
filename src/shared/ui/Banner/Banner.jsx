import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Button, Typography } from "..";

import styles from "./Banner.module.scss";

const Banner = ({ title, subTitle, description, image, button, link }) => (
  <FadeInWhenVisible>
    <section className={styles.banner}>
      <div className={styles.image_inner}>
        <Image
          width={400}
          height={550}
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
        <div>
          <Typography tag="h2" size="small">
            <span className={styles.color}>{subTitle.split(",")[0]}</span>
          </Typography>
          <Typography tag="h2" size="small">
            {title}
          </Typography>
          <Typography tag="h2" size="small">
            <span className={styles.color}>{subTitle.split(",")[1]}</span>
          </Typography>
        </div>

        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <Link href={link}>
            <Button variant="contained" className={styles.left_button}>
              {button}
            </Button>
          </Link>
        </div>
      </div>
    </section>
    <div className={styles.border} />
  </FadeInWhenVisible>
);
export default Banner;
