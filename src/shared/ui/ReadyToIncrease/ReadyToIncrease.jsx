/* eslint-disable import/order */
/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import { ETheme } from "@/providers";
import { useTheme } from "@/shared/hooks";
import { FadeInWhenVisible, SubmitForm } from "@/widgets";

import { Button, Typography } from "..";

import styles from "./ReadyToIncrease.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

export const ReadyToIncrease = ({
  title,
  image,
  color = "gray",
  width,
  height,
}) => {
  const [isActive, setIsActive] = useState(false);

  const { theme } = useTheme();

  const openPopup = () => {
    setIsActive(true);
  };

  const closePopup = () => {
    setIsActive(false);
  };

  return (
    <FadeInWhenVisible>
      <div className={classNames(styles.ready, colors[color])}>
        <div className={styles.ready_inner}>
          <div className={styles.left}>
            <Typography tag="h2" size="mini">
              {title}
            </Typography>

            <div className={styles.buttons}>
              <Button variant="outline" onClick={openPopup}>
                Submit RFP
              </Button>
              <Button variant="outline">Book a Free Review</Button>
            </div>
          </div>
          {isActive && (
            <SubmitForm isActive={isActive} closePopup={closePopup} />
          )}

          <div className={styles.card}>
            <Image
              src={image}
              width={width}
              height={height}
              alt="robert"
              className={
                theme === ETheme.Light ? styles.image_darken : styles.image
              }
            />
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
