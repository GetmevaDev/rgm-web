import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { ETheme } from "@/providers";
import { useTheme } from "@/shared/hooks";
import { FadeInWhenVisible, SubmitForm } from "@/widgets";

import { Button, Typography } from "..";

import styles from "./ImageBannerText.module.scss";

const positions = {
  center: styles.center,
  start: styles.start,
};

const ImageBannerText = ({
  title,
  subTitle,
  description,
  button,
  images,
  imageLight,
  imageDark,
  subDescrption,
  transform,
  buttonLink,
  buttonForm,
  position = "start",
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
    <div className={classNames(styles.image_banner, positions[position])}>
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
            {images.map((img) => (
              <Image
                width={81}
                height={87}
                alt="award"
                key={img.id}
                src={img?.attributes?.url}
              />
            ))}
          </div>
        )}

        {/* <div className={styles.buttons}>
          {button && (
            <Link href={buttonLink}>
              <Button variant="outline" className={styles.button}>
                {button}
              </Button>
            </Link>
          )}

          {buttonForm && (
            <span>
              <Button
                variant="outline"
                onClick={openPopup}
                className={styles.right_button}
              >
                Submit RFP
              </Button>
            </span>
          )}
        </div> */}

        {isActive && <SubmitForm isActive={isActive} closePopup={closePopup} />}
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

export default ImageBannerText;
