import Image from "next/image";
import React, { useEffect, useState } from "react";

import { ETheme, ISSERVER } from "@/providers";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/constants";
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
}) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY || ETheme.Light));
  }, []);

  return (
    <div className={styles.image_banner}>
      <div className={styles.left}>
        <Typography color="black" size="large" clas>
          {title} <span className={styles.color}>{subTitle}</span>
        </Typography>

        <p className={styles.description}>{description}</p>

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

        {button && <Button variant="outline">BOOK A FREE REVIEW</Button>}
      </div>

      <div className={styles.right}>
        {theme === ETheme.Light ? (
          <Image width={909} height={503} src={imageLight} alt="banner-light" />
        ) : (
          <Image width={909} height={503} src={imageDark} alt="banner-dark" />
        )}
      </div>
    </div>
  );
};
