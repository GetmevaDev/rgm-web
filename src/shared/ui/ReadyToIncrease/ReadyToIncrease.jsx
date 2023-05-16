import classNames from "classnames";
import Image from "next/image";

import { Button, Typography } from "..";

import styles from "./ReadyToIncrease.module.scss";

const colors = {
  gray: styles.gray,
  white: styles.white,
};

export const ReadyToIncrease = ({
  title,
  image,
  color = "gray",
  width,
  height,
}) => (
  <div className={classNames(styles.ready, colors[color])}>
    <div className={styles.ready_inner}>
      <div className={styles.left}>
        <Typography tag="h2" size="mini">
          {title}
        </Typography>

        <div className={styles.buttons}>
          <Button variant="outline">Submit RFP</Button>
          <Button variant="outline">Book a Free Review</Button>
        </div>
      </div>

      <div className={styles.card}>
        <Image
          src={image}
          width={width}
          height={height}
          alt="robert"
          className={styles.image}
        />
      </div>
    </div>
  </div>
);
