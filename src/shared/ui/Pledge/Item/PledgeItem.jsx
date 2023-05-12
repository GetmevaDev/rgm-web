import Image from "next/image";
import React from "react";

import styles from "./PledgeItem.module.scss";

export const PledgeItem = () => (
  <div className={styles.bottom}>
    <div className={styles.image_inner}>
      <Image
        width={176}
        height={191}
        src="/svg/dots-black.svg"
        alt="dots-black"
        className={styles.dots}
      />
    </div>

    <div className={styles.going}>
      <h5 className={styles.title_seo}>On-going SEO</h5>
      <p className={styles.description_seo}>
        I only provide ongoing SEO if the website is built and managed by RGM.
        The reason for this philosophy is that I only work with clients that
        trust me with the complete website. A “complete website” is (1) Site
        Visibility, (2) Site Usability and Conversions, (3) Web Analytics &
        Metrics, (4) Back Office Management, (5) and more advanced web based
        integrations. Why? I simply want to focus on building websites the right
        way, the first time.
      </p>
    </div>
  </div>
);
