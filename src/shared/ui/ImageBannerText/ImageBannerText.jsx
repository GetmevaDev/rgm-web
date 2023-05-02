import Image from "next/image";
import React from "react";

import { useTheme } from "@/shared/hooks";

import { Button, Typography } from "..";

import styles from "./ImageBannerText.module.scss";

export const ImageBannerText = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.image_banner}>
      <div className={styles.left}>
        <Typography color="black" size="large">
          Robert Gerov <span className={styles.color}>Media</span>
        </Typography>

        <p className={styles.description}>
          An award-winning Digital Agency based in New York
        </p>

        <div className={styles.images}>
          <Image width={81} height={87} src="/images/award-1.svg" alt="award" />
          <Image width={81} height={87} src="/images/award-1.svg" alt="award" />
          <Image width={81} height={87} src="/images/award-1.svg" alt="award" />
        </div>

        <Button variant="outline">BOOK A FREE REVIEW</Button>
      </div>

      <div className={styles.right}>
        {theme === "app_light_theme" ? (
          <Image
            width={909}
            height={503}
            src="/images/banner-home-light.svg"
            alt="banner-light"
          />
        ) : (
          <Image
            width={909}
            height={503}
            src="/images/banner-home-dark.svg"
            alt="banner-dark"
          />
        )}
      </div>
    </div>
  );
};
