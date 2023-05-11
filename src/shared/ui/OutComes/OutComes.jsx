import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { Typography } from "..";

import { OutcomeItem } from "./Item/OutcomeItem";

import styles from "./OutComes.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

export const OutComes = ({ image, title, color = "white" }) => (
  <div className={classNames(styles.outcomes, colors[color])}>
    <div className={styles.outcomes_inner}>
      <Typography size="mini" tag="h2">
        Outcomes
      </Typography>
      <div className={styles.items}>
        <OutcomeItem />
        <OutcomeItem />
        <OutcomeItem />
      </div>

      <div className={styles.image_inner}>
        <Image
          width={727}
          height={399}
          src={image}
          alt="outcome"
          className={styles.image}
        />
      </div>
    </div>
  </div>
);
