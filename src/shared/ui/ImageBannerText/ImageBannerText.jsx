import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

import { ETheme, ISSERVER } from "@/providers";
import { useTheme } from "@/shared/hooks";

import { Button, Typography } from "..";

import styles from "./ImageBannerText.module.scss";

export const ImageBannerText = ({
  title,
  subTitle,
  description,
  button,
  images,
  imageLight,
  imageDark,
  subDescrption,
  transform,
}) => {
  const { theme } = useTheme();

  return (
    <div className={styles.image_banner}>
      <div className={styles.left}>
        <Typography color="black" size="large" transform={transform}>
          {title} <span className={styles.color}>{subTitle}</span>
        </Typography>

        <p className={styles.sub_description}>{subDescrption}</p>

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {images && (
          <div className={styles.images}>
            <Image
              width={81}
              height={87}
              src="/images/award-1.svg"
              alt="award"
            />
            <Image
              width={81}
              height={87}
              src="/images/award-1.svg"
              alt="award"
            />
            <Image
              width={81}
              height={87}
              src="/images/award-1.svg"
              alt="award"
            />
          </div>
        )}

        {button && (
          <Button variant="outline" className={styles.button}>
            {button}
          </Button>
        )}
      </div>

      <div className={styles.right}>
        {theme === ETheme.Light ? (
          <Image width={724} height={439} src={imageLight} alt="banner-light" />
        ) : (
          <Image width={724} height={439} src={imageDark} alt="banner-dark" />
        )}
      </div>
    </div>
  );
};
