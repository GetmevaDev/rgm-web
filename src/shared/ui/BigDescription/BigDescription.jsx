import React from "react";

import { FadeInWhenVisible } from "@/widgets";

import styles from "./BigDescription.module.scss";

const BigDescription = ({ description }) => (
  <FadeInWhenVisible>
    <div
      className={styles.big_description}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </FadeInWhenVisible>
);
export default BigDescription;
