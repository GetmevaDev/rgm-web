import classNames from "classnames";
import React from "react";

import { Typography } from "..";

import { WorkItem } from "./Item/WorkItem";

import styles from "./Work.module.scss";

const sizes = {
  two: styles.two,
  one: styles.one,
  three: styles.three,
};

const colors = {
  gray: styles.gray,
  white: styles.white,
};

export const Work = ({ size = "two", color = "gray", arr, title }) => (
  <div className={classNames(styles.work, colors[color])}>
    <div className={styles.work_inner}>
      <Typography tag="h2" size="mini">
        {title}
      </Typography>
      <div className={classNames(sizes[size])}>
        {arr?.map((item) => (
          <WorkItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  </div>
);
