import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import { Typography } from "..";

import styles from "./DescriptionTitle.module.scss";

export const DescriptionTitle = ({ description, title }) => (
  <FadeInWhenVisible>
    <div className={styles.description_inner}>
      <Typography tag="h2" size="small" className={styles.title}>
        {title}
      </Typography>
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  </FadeInWhenVisible>
);
