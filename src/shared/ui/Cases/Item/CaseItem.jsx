import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../..";

import styles from "./CaseItem.module.scss";

export const CaseItem = ({ title, image, description, button, buttonLink }) => (
  <div className={styles.case_item}>
    <Image width={265} height={155} src={image} />

    <p className={styles.title}>{title}</p>
    <div className={styles.border} />
    <p className={styles.description}>{description}</p>

    <Link href={buttonLink}>
      <Button variant="outline" className={styles.button}>
        {button}
      </Button>
    </Link>
  </div>
);
