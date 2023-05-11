import classNames from "classnames";
import React from "react";

import { Typography } from "..";

import { WorkItem } from "./Item/WorkItem";

import styles from "./Work.module.scss";

const arr = [
  {
    id: 1,
    title: "Branding",
    description:
      "Our design team immediately began building a world class brand book including a new logo, color palette, business cards, letterhead, envelopes, pens, etc.",
  },
  {
    id: 2,
    title: "Integrated marketing",
    description:
      "We used our extensive knowledge and experience in search engine marketing, to optimize the website for the relevant user intent.",
  },
];

const sizes = {
  two: styles.two,
  one: styles.one,
  three: styles.three,
};

export const Work = ({ size = "two" }) => (
  <div className={styles.work}>
    <div className={styles.work_inner}>
      <Typography tag="h2" size="mini">
        Work
      </Typography>
      <div className={classNames(sizes[size])}>
        {arr.map((item) => (
          <WorkItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  </div>
);
