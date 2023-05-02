import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Logo.module.scss";

export const Logo = ({ className }) => (
  <Link href="/" className={styles.logo}>
    <Image
      src="/svg/logo.svg"
      width={153}
      aria-label="logo"
      height={66}
      loading="lazy"
      alt=""
      className={classNames(styles.image, className)}
    />

    <div className={styles.logo_text}>ROBERT GEROV MEDIA</div>
  </Link>
);
