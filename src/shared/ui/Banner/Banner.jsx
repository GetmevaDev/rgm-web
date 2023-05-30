import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { SubmitForm } from "@/widgets";

import { Button, Typography } from "..";

import styles from "./Banner.module.scss";

export const Banner = ({
  title,
  subTitle,
  description,
  image,
  button,
  link,
  buttonForm,
}) => {
  const [isActive, setIsActive] = useState(false);
  const openPopup = () => {
    setIsActive(true);
  };

  const closePopup = () => {
    setIsActive(false);
  };

  return (
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
          <div className={styles.buttons}>
            <Link href={link}>
              <Button variant="contained">{button}</Button>
            </Link>

            {buttonForm && (
              <Button variant="outline" onClick={openPopup}>
                Submit RFP
              </Button>
            )}
          </div>

          {isActive && (
            <SubmitForm isActive={isActive} closePopup={closePopup} />
          )}
        </div>
      </section>
      <div className={styles.border} />
    </>
  );
};
