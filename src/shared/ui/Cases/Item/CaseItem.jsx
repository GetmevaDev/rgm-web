/* eslint-disable camelcase */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../..";

import styles from "./CaseItem.module.scss";

export const CaseItem = ({
  title,
  image,
  description,
  button,
  button_link,
}) => (
  <div className={styles.case_item}>
    <Image width={265} height={155} src={image?.data?.attributes?.url} />

    <p className={styles.title}>{title}</p>
    <div className={styles.border} />
    <p className={styles.description}>{description}</p>

    <Link href={button_link}>
      <Button variant="outline" className={styles.button}>
        {button}
      </Button>
    </Link>
  </div>
);
