import Image from "next/image";
import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Typography } from "..";

import styles from "./FeaturedPress.module.scss";

const FeaturedPress = ({ title, subTitle, images }) => (
  <FadeInWhenVisible>
    <div className={styles.featured}>
      <Typography tag="h2" size="title">
        {title} <span>{subTitle}</span>
      </Typography>

      <div className={styles.images}>
        {images?.map((img) => (
          <Image
            key={img?.id}
            src={img?.attributes?.url}
            width={img?.attributes?.width}
            alt={img?.attributes?.name}
            height={img?.attributes?.height}
          />
        ))}
      </div>
    </div>
  </FadeInWhenVisible>
);

export default FeaturedPress;
